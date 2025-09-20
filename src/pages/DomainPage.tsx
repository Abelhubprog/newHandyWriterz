import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPosts } from '@/lib/api';

export default function DomainPage() {
  const { domain = 'ai' } = useParams();
  const [posts, setPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    getPosts(domain!)
      .then((res) => setPosts(res))
      .catch((e) => setError(String(e?.message || e)))
      .finally(() => setLoading(false));
  }, [domain]);

  return (
    <main className="container">
      <section className="hero">
        <span className="badge">Domain</span>
        <h1>{titleFor(domain!)}</h1>
        <p className="muted">{descFor(domain!)}</p>
      </section>

      {loading && <p className="muted">Loading…</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          <h2>Latest</h2>
          <div className="grid">
            {posts.map((p) => (
              <article className="card" key={p.id}>
                <Link to={`/${domain}/${p.slug}`} className="title">
                  {p.title}
                </Link>
                <div className="post-meta">
                  <span>{p.reading_time_min || 0} min</span> •
                  <span>
                    {new Date(((p.published_at || p.updated_at) as number) * 1000).toLocaleDateString()}
                  </span>
                </div>
                {p.excerpt ? <p className="muted">{p.excerpt}</p> : null}
              </article>
            ))}
          </div>
        </>
      )}
    </main>
  );
}

function titleFor(slug: string) {
  return (
    {
      ai: 'AI — Research & Practice',
      crypto: 'Crypto — Protocols & Products',
      health: 'Health',
      'social-work': 'Social Work',
      dev: 'Dev',
    } as Record<string, string>
  )[slug] || slug;
}
function descFor(slug: string) {
  return (
    {
      ai: 'Long-form articles, code, and datasets exploring modern AI.',
      crypto: 'Token engineering, compliance, UX and security.',
      health: 'Evidence-based health writing for practitioners and readers.',
      'social-work': 'Policy, programs and real-world practice.',
      dev: 'Engineering, DX and product systems.',
    } as Record<string, string>
  )[slug] || '';
}
