import React from 'react';
import { useAuth } from '@clerk/clerk-react';
import { createPost } from '@/lib/api';

export default function Editor() {
  const { getToken } = useAuth();
  const [form, setForm] = React.useState({
    domainSlug: 'ai',
    title: '',
    slug: '',
    excerpt: '',
    coverUrl: '',
    tags: '',
    mdx: '',
    status: 'draft' as 'draft' | 'published',
    canonicalUrl: '',
  });
  const [submitting, setSubmitting] = React.useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const token = await getToken();
      const body = { ...form, tags: form.tags.split(',').map((s) => s.trim()).filter(Boolean) };
      const res = await createPost(token!, body);
      if (res && res.ok) alert('Saved');
      else alert('Failed: ' + JSON.stringify(res));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="editor" onSubmit={onSubmit}>
      <div className="two">
        <div className="field">
          <label>Title</label>
          <input value={form.title} onChange={(e) => setForm((s) => ({ ...s, title: e.target.value }))} required />
        </div>
        <div className="field">
          <label>Slug</label>
          <input
            value={form.slug}
            onChange={(e) => setForm((s) => ({ ...s, slug: e.target.value }))}
            pattern="[a-z0-9-]+"
            required
          />
        </div>
      </div>
      <div className="two">
        <div className="field">
          <label>Domain</label>
          <select value={form.domainSlug} onChange={(e) => setForm((s) => ({ ...s, domainSlug: e.target.value }))}>
            <option value="ai">AI</option>
            <option value="crypto">Crypto</option>
            <option value="health">Health</option>
            <option value="social-work">Social Work</option>
            <option value="dev">Dev</option>
          </select>
        </div>
        <div className="field">
          <label>Tags (comma separated)</label>
          <input value={form.tags} onChange={(e) => setForm((s) => ({ ...s, tags: e.target.value }))} />
        </div>
      </div>
      <div className="field">
        <label>Excerpt</label>
        <textarea rows={3} value={form.excerpt} onChange={(e) => setForm((s) => ({ ...s, excerpt: e.target.value }))} />
      </div>
      <div className="field">
        <label>Cover URL</label>
        <input value={form.coverUrl} onChange={(e) => setForm((s) => ({ ...s, coverUrl: e.target.value }))} />
      </div>
      <div className="field">
        <label>Canonical URL (optional)</label>
        <input value={form.canonicalUrl} onChange={(e) => setForm((s) => ({ ...s, canonicalUrl: e.target.value }))} />
      </div>
      <div className="field">
        <label>Content (MD/MDX)</label>
        <textarea rows={16} value={form.mdx} onChange={(e) => setForm((s) => ({ ...s, mdx: e.target.value }))} required />
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
        <select value={form.status} onChange={(e) => setForm((s) => ({ ...s, status: e.target.value as any }))}>
          <option value="draft">Draft</option>
          <option value="published">Publish</option>
        </select>
        <button className="btn primary" type="submit" disabled={submitting}>
          {submitting ? 'Saving…' : 'Save'}
        </button>
      </div>
    </form>
  );
}
