import React from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'isomorphic-dompurify';
import { getPost, reactToPost, votePost, commentOnPost } from '@/lib/api';
import { useAuth, useUser, SignedIn, SignedOut } from '@clerk/clerk-react';

export default function PostPage() {
  const { domain = 'ai', slug = '' } = useParams();
  const [post, setPost] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const { getToken } = useAuth();
  const { isSignedIn } = useUser();

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    getPost(domain!, slug!)
      .then((p) => setPost(p))
      .catch((e) => setError(String(e?.message || e)))
      .finally(() => setLoading(false));
  }, [domain, slug]);

  React.useEffect(() => {
    if (!post) return;
    const link: HTMLLinkElement =
      (document.querySelector('link[rel="canonical"]') as HTMLLinkElement) || document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', post.canonical);
    if (!link.parentElement) document.head.appendChild(link);

    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      author: post.author_name || 'Admin',
      datePublished: new Date(((post.published_at || post.updated_at) as number) * 1000).toISOString(),
      image: post.cover_url || undefined,
      wordCount: post.mdx ? String(post.mdx).split(/\s+/).length : undefined,
    } as any;
    const script = (document.getElementById('ld-json') as HTMLScriptElement) || document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'ld-json';
    script.textContent = JSON.stringify(ld);
    if (!script.parentElement) document.head.appendChild(script);
  }, [post]);

  if (loading) return <main className="container"><p className="muted">Loading…</p></main>;
  if (error) return <main className="container"><p className="text-red-500">{error}</p></main>;
  if (!post) return null;

  const clean = DOMPurify.sanitize(post.html || '');

  async function onReact(kind: 'like' | 'bookmark') {
    if (!isSignedIn) return alert('Sign in');
    const t = await getToken();
    await reactToPost(post.id, t!, kind);
  }
  async function onVote(v: 1 | -1) {
    if (!isSignedIn) return alert('Sign in');
    const t = await getToken();
    await votePost(post.id, t!, v);
  }
  async function onComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isSignedIn) return alert('Sign in');
    const t = await getToken();
    const body = (e.currentTarget.elements.namedItem('body') as HTMLTextAreaElement).value;
    await commentOnPost(post.id, t!, body);
    e.currentTarget.reset();
  }

  return (
    <main className="container">
      <nav className="muted">
        <a href={`/${domain}`}>{domain}</a> » <span>{post.title}</span>
      </nav>
      <article className="article">
        <header>
          <h1>{post.title}</h1>
          <div className="meta">
            By <strong>{post.author_name || 'Admin'}</strong> • {post.reading_time_min} min •{' '}
            {new Date(((post.published_at || post.updated_at) as number) * 1000).toLocaleDateString()}
          </div>
          {post.cover_url && <img className="media" src={post.cover_url} alt="" />}
        </header>
        <div className="content" dangerouslySetInnerHTML={{ __html: clean }} />

        <div className="engage" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button className="btn" onClick={() => onReact('like')}>👍 Like</button>
          <button className="btn" onClick={() => onVote(1)}>⬆ Upvote</button>
          <button className="btn" onClick={() => onVote(-1)}>⬇ Downvote</button>
          <button
            className="btn"
            onClick={() =>
              (navigator as any).share
                ? (navigator as any).share({ title: post.title, url: location.href })
                : navigator.clipboard.writeText(location.href)
            }
          >
            🔗 Share
          </button>
          <button className="btn" onClick={() => onReact('bookmark')}>⭐ Bookmark</button>
        </div>

        <section className="comments">
          <h3>Comments</h3>
          <SignedOut>
            <div className="muted">Sign in to comment.</div>
          </SignedOut>
          <SignedIn>
            <form onSubmit={onComment} className="two">
              <textarea name="body" placeholder="Add your comment…" required />
              <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                <button className="btn ghost" type="reset">
                  Cancel
                </button>
                <button className="btn primary" type="submit">
                  Comment
                </button>
              </div>
            </form>
          </SignedIn>
        </section>
      </article>

      {post.toc && post.toc.length > 0 && (
        <aside className="toc">
          <h3>On this page</h3>
          {post.toc.map((t: any) => (
            <a key={t.id} href={`#${t.id}`}>
              {t.text}
            </a>
          ))}
        </aside>
      )}
    </main>
  );
}
