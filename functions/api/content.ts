import { D1Database, R2Bucket } from '@cloudflare/workers-types';
import { authenticateUser, createErrorResponse, createSuccessResponse, isAdminUser } from './auth';

interface Env {
  DB: D1Database;
  STORAGE: R2Bucket;
  ORIGIN?: string;
  CLERK_SECRET_KEY: string;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);
  const pathname = url.pathname.replace('/api/content', '') || '/';

  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json'
  };
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers });
  }

  try {
    // Routing
    if (request.method === 'GET' && pathname === '/domains') {
      const { results } = await env.DB.prepare('SELECT id, slug, name, description FROM domains ORDER BY name').all();
      return new Response(JSON.stringify(results || []), { headers });
    }

    if (request.method === 'GET' && pathname === '/posts') {
      const domainSlug = url.searchParams.get('domain');
      const status = url.searchParams.get('status') || 'published';
      if (!domainSlug) return createErrorResponse('missing_domain', 400, 'BAD_REQUEST');
      const domain = await env.DB.prepare('SELECT id FROM domains WHERE slug = ?').bind(domainSlug).first<any>();
      if (!domain) return createErrorResponse('domain_not_found', 404, 'NOT_FOUND');
      const { results } = await env.DB.prepare(
        `SELECT p.id, p.slug, p.title, p.excerpt, p.cover_url, p.tags, p.reading_time_min, p.updated_at, p.published_at
         FROM posts_public p WHERE p.domain_id = ? AND p.status = ?
         ORDER BY (p.published_at IS NULL), p.published_at DESC, p.updated_at DESC`
      ).bind(domain.id, status).all();
      return new Response(JSON.stringify(results || []), { headers });
    }

    const postSlugMatch = pathname.match(/^\/posts\/([^/]+)\/([^/]+)$/);
    if (request.method === 'GET' && postSlugMatch) {
      const [, domainSlug, slug] = postSlugMatch;
      const row = await env.DB.prepare(
        `SELECT p.*, d.slug AS domain_slug, d.name AS domain_name
         FROM posts_public p JOIN domains d ON p.domain_id = d.id
         WHERE d.slug = ? AND p.slug = ? AND p.status = 'published' LIMIT 1`
      ).bind(domainSlug, slug).first<any>();
      if (!row) return createErrorResponse('not_found', 404, 'NOT_FOUND');
      const canonical = row.canonical_url || `${env.ORIGIN || url.origin}/${domainSlug}/${slug}`;
      return new Response(JSON.stringify({ ...row, canonical }), { headers });
    }

    // Authenticated endpoints below
    if (request.method === 'POST' && pathname === '/posts') {
      const auth = await authenticateUser(request, env);
      if (!auth.success) return createErrorResponse(auth.error.message, auth.error.status, auth.error.code);
      const admin = await isAdminUser(auth.userId!, env);
      if (!admin.success || !admin.isAdmin) return createErrorResponse('forbidden', 403, 'FORBIDDEN');

      const body = await request.json();
      const parsed = await parsePostBody(body);
      const domain = await env.DB.prepare('SELECT id FROM domains WHERE slug = ?').bind(parsed.domainSlug).first<any>();
      if (!domain) return createErrorResponse('domain_not_found', 404, 'NOT_FOUND');

      const rendered = renderMarkdown(parsed.mdx);
      const now = Math.floor(Date.now() / 1000);
      await env.DB.prepare(`
        INSERT INTO posts_public (
          domain_id, slug, title, excerpt, cover_url, author_id, author_name, reading_time_min,
          tags, status, canonical_url, mdx, html, toc, created_at, updated_at, published_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        domain.id, parsed.slug, parsed.title, parsed.excerpt, parsed.coverUrl || '',
        auth.userId, '', estimateReadTime(parsed.mdx),
        JSON.stringify(parsed.tags), parsed.status, parsed.canonicalUrl || '',
        parsed.mdx, rendered.html, JSON.stringify(rendered.toc),
        now, now, parsed.status === 'published' ? now : null
      ).run();

      return createSuccessResponse({ ok: true, slug: parsed.slug });
    }

    const postIdPatch = pathname.match(/^\/posts\/(\d+)$/);
    if (request.method === 'PATCH' && postIdPatch) {
      const auth = await authenticateUser(request, env);
      if (!auth.success) return createErrorResponse(auth.error.message, auth.error.status, auth.error.code);
      const admin = await isAdminUser(auth.userId!, env);
      if (!admin.success || !admin.isAdmin) return createErrorResponse('forbidden', 403, 'FORBIDDEN');
      const id = Number(postIdPatch[1]);
      const cur = await env.DB.prepare('SELECT * FROM posts_public WHERE id = ?').bind(id).first<any>();
      if (!cur) return createErrorResponse('not_found', 404, 'NOT_FOUND');
      const body = await request.json();
      const parsed = await parsePostBodyPartial(body);
      const mdx = parsed.mdx ?? cur.mdx;
      const rendered = renderMarkdown(mdx);
      const status = parsed.status ?? cur.status;
      const now = Math.floor(Date.now() / 1000);

      await env.DB.prepare(`
        UPDATE posts_public SET
          title=COALESCE(?,title), slug=COALESCE(?,slug), excerpt=COALESCE(?,excerpt),
          cover_url=COALESCE(?,cover_url), tags=COALESCE(?,tags),
          status=?, canonical_url=COALESCE(?,canonical_url),
          mdx=?, html=?, toc=?, updated_at=?,
          published_at=CASE WHEN ?='published' THEN COALESCE(published_at,?) ELSE published_at END
        WHERE id=?
      `).bind(
        parsed.title ?? null, parsed.slug ?? null, parsed.excerpt ?? null,
        parsed.coverUrl ?? null, JSON.stringify(parsed.tags ?? JSON.parse(cur.tags || '[]')),
        status, parsed.canonicalUrl ?? null,
        mdx, rendered.html, JSON.stringify(rendered.toc), now,
        status, now, id
      ).run();

      return createSuccessResponse({ ok: true });
    }

    const commentsMatch = pathname.match(/^\/posts\/(\d+)\/comments$/);
    if (request.method === 'POST' && commentsMatch) {
      const auth = await authenticateUser(request, env);
      if (!auth.success) return createErrorResponse(auth.error.message, auth.error.status, auth.error.code);
      const id = Number(commentsMatch[1]);
      const { body } = await request.json();
      if (!body || body.length < 2) return createErrorResponse('short_comment', 400, 'BAD_REQUEST');
      await env.DB.prepare('INSERT INTO comments (post_id, user_id, user_handle, body) VALUES (?,?,?,?)')
        .bind(id, auth.userId!, '', body).run();
      return createSuccessResponse({ ok: true });
    }

    const reactMatch = pathname.match(/^\/posts\/(\d+)\/react$/);
    if (request.method === 'POST' && reactMatch) {
      const auth = await authenticateUser(request, env);
      if (!auth.success) return createErrorResponse(auth.error.message, auth.error.status, auth.error.code);
      const id = Number(reactMatch[1]);
      const { kind } = await request.json();
      if (!['like', 'bookmark'].includes(kind)) return createErrorResponse('bad_kind', 400, 'BAD_REQUEST');
      await env.DB.prepare('INSERT OR IGNORE INTO reactions (post_id, user_id, kind) VALUES (?,?,?)')
        .bind(id, auth.userId!, kind).run();
      return createSuccessResponse({ ok: true });
    }

    const voteMatch = pathname.match(/^\/posts\/(\d+)\/vote$/);
    if (request.method === 'POST' && voteMatch) {
      const auth = await authenticateUser(request, env);
      if (!auth.success) return createErrorResponse(auth.error.message, auth.error.status, auth.error.code);
      const id = Number(voteMatch[1]);
      const jb = await request.json();
      const v = jb && jb.value && jb.value > 0 ? 1 : -1;
      await env.DB.prepare(
        `INSERT INTO votes (post_id, user_id, value) VALUES (?,?,?)
         ON CONFLICT(post_id, user_id) DO UPDATE SET value=excluded.value`
      ).bind(id, auth.userId!, v).run();
      return createSuccessResponse({ ok: true });
    }

    return createErrorResponse('Endpoint not found', 404, 'ENDPOINT_NOT_FOUND');
  } catch (err) {
    console.error('content api error', err);
    return createErrorResponse('internal_error', 500, 'INTERNAL_ERROR');
  }
};

// Minimal schema validation (avoid adding new deps)
function isKebab(s: string) { return /^[a-z0-9-]+$/.test(s); }
async function parsePostBody(body: any) {
  const domainSlug = String(body.domainSlug || '').trim();
  const title = String(body.title || '').trim();
  const slug = String(body.slug || '').trim();
  const excerpt = String(body.excerpt || '');
  const coverUrl = body.coverUrl ? String(body.coverUrl) : '';
  const tags = Array.isArray(body.tags) ? body.tags.map((t: any) => String(t)) : [];
  const mdx = String(body.mdx || '');
  const status = (body.status === 'published') ? 'published' : 'draft';
  const canonicalUrl = body.canonicalUrl ? String(body.canonicalUrl) : '';
  if (domainSlug.length < 2) throw new Error('invalid_domain');
  if (title.length < 3) throw new Error('invalid_title');
  if (!isKebab(slug)) throw new Error('invalid_slug');
  if (!mdx) throw new Error('empty_mdx');
  return { domainSlug, title, slug, excerpt, coverUrl, tags, mdx, status, canonicalUrl };
}
async function parsePostBodyPartial(body: any) {
  const out: any = {};
  if (body.domainSlug) out.domainSlug = String(body.domainSlug);
  if (body.title) out.title = String(body.title);
  if (body.slug) { const s = String(body.slug); if (!isKebab(s)) throw new Error('invalid_slug'); out.slug = s; }
  if ('excerpt' in body) out.excerpt = String(body.excerpt || '');
  if ('coverUrl' in body) out.coverUrl = String(body.coverUrl || '');
  if ('tags' in body) out.tags = Array.isArray(body.tags) ? body.tags.map((t: any) => String(t)) : [];
  if ('mdx' in body) out.mdx = String(body.mdx || '');
  if ('status' in body) out.status = (body.status === 'published') ? 'published' : 'draft';
  if ('canonicalUrl' in body) out.canonicalUrl = String(body.canonicalUrl || '');
  return out;
}

// Lightweight Markdown → HTML (headings + code blocks pre tag). Avoids heavy MDX libs on edge.
function renderMarkdown(src: string): { html: string, toc: Array<{ level: number, id: string, text: string }> } {
  const lines = src.replace(/\r\n/g, '\n').split('\n');
  const toc: Array<{ level: number, id: string, text: string }> = [];
  const esc = (s: string) => s
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  let html = '';
  let inCode = false;
  let codeLang = '';
  for (const raw of lines) {
    const line = raw;
    if (line.startsWith('```')) {
      if (!inCode) { inCode = true; codeLang = line.slice(3).trim(); html += `<pre><code class="language-${esc(codeLang)}">`; }
      else { inCode = false; codeLang = ''; html += `</code></pre>`; }
      continue;
    }
    if (inCode) { html += esc(line) + '\n'; continue; }
    const h = line.match(/^(#{1,3})\s+(.+)$/);
    if (h) {
      const level = h[1].length; const text = h[2].trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      toc.push({ level, id, text });
      html += `<h${level} id="${id}">${esc(text)}</h${level}>`;
      continue;
    }
    if (line.trim() === '') { html += '<p></p>'; continue; }
    html += `<p>${esc(line)}</p>`;
  }
  return { html, toc };
}

function estimateReadTime(mdx: string) {
  const words = mdx.trim().split(/\s+/g).length;
  return Math.max(1, Math.round(words / 220));
}
