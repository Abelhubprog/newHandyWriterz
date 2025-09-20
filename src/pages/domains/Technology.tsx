import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { format } from 'date-fns';
import { serviceCmsService } from '@/services/serviceCmsService';
import type { ServicePageRecord, ServiceCategoryRecord } from '@/services/servicePage.types';
import { useServiceContent } from '@/hooks/useServiceContent';
import type { Category, ServiceType } from '@/types/content';
import { ServiceContentService, type ServicePost } from '@/services/serviceContentService';
import { Tag as TagIcon, ArrowRight, User, Heart, MessageCircle, Search, Filter, Bookmark, Share2, Loader2 } from 'lucide-react';

const SERVICE_SLUG = 'technology' as ServiceType;
const FALLBACK_IMAGE = '/images/placeholders/article-cover.jpg';

const estimateReadTime = (text: string) => Math.max(2, Math.round((text || '').split(/\s+/).length / 200));
const formatPublishedDate = (value?: string) => {
  if (!value) return '—';
  try { return format(new Date(value), 'MMM d, yyyy'); } catch { return '—'; }
};

const TechnologyDomainPage: React.FC = () => {
  const { data: pageData } = useQuery({
    queryKey: ['service-page', SERVICE_SLUG],
    queryFn: () => serviceCmsService.getPage(SERVICE_SLUG),
  });
  const { data: categoryData } = useQuery({
    queryKey: ['service-category', SERVICE_SLUG],
    queryFn: () => serviceCmsService.getCategory(SERVICE_SLUG),
  });

  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [view, setView] = useState<'articles' | 'categories'>('articles');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const loadMoreRef = useRef<HTMLButtonElement | null>(null);

  const normalizedSearch = useMemo(() => [searchTerm, selectedTag].filter(Boolean).join(' ').trim(), [searchTerm, selectedTag]);

  const {
    posts,
    categories = [],
    tags = [],
    isLoading,
    totalPosts,
    setPage,
    hasNextPage,
  } = useServiceContent({
    serviceType: SERVICE_SLUG,
    status: 'published',
    limit: 9,
    category: selectedCategory !== 'all' ? selectedCategory : undefined,
    search: normalizedSearch || undefined,
  });

  const page = pageData as ServicePageRecord | undefined;
  const cat = categoryData as ServiceCategoryRecord | undefined;
  const heroMetrics = (cat?.stats || []).slice(0, 4);

  const title = page?.title || 'Technology';
  const seoTitle = page?.seo?.title || `${title} | HandyWriterz`;
  const seoDesc = page?.seo?.description || page?.summary || 'Latest trends in technology, software development, and digital innovation.';
  const canonicalUrl = `https://www.handywriterz.com/d/technology`;

  const itemListJsonLd = useMemo(() => {
    if (!posts?.length) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: posts.map((p: ServicePost, idx: number) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `${canonicalUrl}#post-${p.slug || p.id}`,
        name: p.title,
      })),
    };
  }, [posts, canonicalUrl]);

  const { data: featured = [] } = useQuery({
    queryKey: ['featured-posts-inline', SERVICE_SLUG],
    queryFn: () => ServiceContentService.getFeaturedPosts(SERVICE_SLUG, 3),
    staleTime: 5 * 60 * 1000,
  });

  const { data: trendingData } = useQuery({
    queryKey: ['service-trending', SERVICE_SLUG],
    queryFn: async () => {
      const { posts: all } = await ServiceContentService.getServicePosts(SERVICE_SLUG, { status: 'published', limit: 30 });
      return all.sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0)).slice(0, 5);
    },
    staleTime: 5 * 60 * 1000,
  });

  // Reset pagination when filters/search change
  useEffect(() => { setPage(1); }, [normalizedSearch, selectedCategory, setPage]);

  // Infinite load: observe load more button
  useEffect(() => {
    if (!loadMoreRef.current) return;
    const btn = loadMoreRef.current;
    const obs = new IntersectionObserver((entries) => {
      const [first] = entries;
      if (first.isIntersecting && hasNextPage && !isLoading) setPage((p: any) => p + 1);
    }, { rootMargin: '200px' });
    obs.observe(btn);
    return () => obs.disconnect();
  }, [hasNextPage, isLoading]);

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); setPage(1); };

  return (
    <main>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content={page?.isPublished ? 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' : 'noindex, nofollow'} />
        {itemListJsonLd && <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>}
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-indigo-500">Domain</div>
              <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
              <p className="mt-3 text-lg text-slate-700">{page?.summary || cat?.heroSummary || 'Exploring the frontiers of technology, from AI and machine learning to blockchain and beyond.'}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#articles" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white">
                  Explore articles
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {heroMetrics.map((m, idx) => (
                  <div key={`${m.label}-${idx}`} className="rounded-2xl bg-slate-50 p-4 text-center">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{m.label}</div>
                    <div className="mt-2 text-xl font-bold text-slate-900">{m.value}</div>
                  </div>
                ))}
                {heroMetrics.length === 0 && (
                  <div className="col-span-4 text-center text-sm text-slate-500">Metrics coming soon.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">Featured</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {featured.map((post: ServicePost) => (
                <article key={post.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="h-44 w-full overflow-hidden bg-slate-100">
                    <img src={post.featuredImage || FALLBACK_IMAGE} alt={post.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE; }} loading="lazy" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-slate-500">{formatPublishedDate(post.publishedAt)} • {post.readTime ?? estimateReadTime(post.content)} min</div>
                    <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-slate-900">{post.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm text-slate-600">{post.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                      <span className="inline-flex items-center gap-2"><User className="h-4 w-4" />{post.author?.name || 'Editorial'}</span>
                      <span className="inline-flex items-center gap-3">
                        <button aria-label="Bookmark" className="rounded-full p-1 hover:bg-slate-100"><Bookmark className="h-4 w-4" /></button>
                        <button aria-label="Share" className="rounded-full p-1 hover:bg-slate-100"><Share2 className="h-4 w-4" /></button>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Toggle + Filters */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="inline-flex rounded-full bg-slate-100 p-1">
            <button type="button" onClick={() => setView('articles')} className={clsx('rounded-full px-4 py-2 text-sm font-semibold', view === 'articles' ? 'bg-white shadow' : 'text-slate-600')}>Articles</button>
            <button type="button" onClick={() => setView('categories')} className={clsx('rounded-full px-4 py-2 text-sm font-semibold', view === 'categories' ? 'bg-white shadow' : 'text-slate-600')}>Categories</button>
          </div>
          {view === 'articles' && (
            <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-center md:justify-end">
              <form onSubmit={onSearch} className="flex items-center gap-2">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search articles" className="w-56 rounded-full border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-slate-200" />
                </div>
              </form>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-slate-400" />
                <select value={selectedCategory} onChange={(e) => { setSelectedCategory(e.target.value); setPage(1); }} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm">
                  <option value="all">All categories</option>
                  {(categories as Category[]).map((c) => (<option key={c.id} value={c.slug}>{c.name}</option>))}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Articles */}
      {view === 'articles' && (
        <section id="articles" className="py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-900">Latest articles</h2>
              <div className="inline-flex rounded-full bg-slate-100 p-1">
                <button type="button" onClick={() => setLayout('grid')} className={clsx('rounded-full px-3 py-1 text-sm font-semibold', layout === 'grid' ? 'bg-white shadow' : 'text-slate-600')}>Grid</button>
                <button type="button" onClick={() => setLayout('list')} className={clsx('rounded-full px-3 py-1 text-sm font-semibold', layout === 'list' ? 'bg-white shadow' : 'text-slate-600')}>List</button>
              </div>
            </div>

            {/* Tag chips */}
            <div className="mb-4 flex flex-wrap gap-2">
              {(tags.length ? tags : ['ai-ml', 'web-development', 'cybersecurity']).slice(0, 12).map((tag) => (
                <button key={tag} onClick={() => { setSelectedTag(tag); setPage(1); }} className={clsx('inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold', selectedTag === tag ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200')}>#{tag}</button>
              ))}
              {selectedTag && (<button onClick={() => { setSelectedTag(''); setPage(1); }} className="text-xs text-slate-500 underline">Clear tag</button>)}
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {/* Main list */}
              <div className="lg:col-span-2">
                {isLoading && posts.length === 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="animate-pulse rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <div className="h-44 w-full bg-slate-100" />
                        <div className="p-5 space-y-3">
                          <div className="h-3 w-24 rounded bg-slate-100" />
                          <div className="h-4 w-3/4 rounded bg-slate-100" />
                          <div className="h-4 w-1/2 rounded bg-slate-100" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : posts.length === 0 ? (
                  <p className="text-sm text-slate-500">No articles yet.</p>
                ) : layout === 'list' ? (
                  <div className="space-y-4">
                    {posts.map((post: ServicePost) => (
                      <div key={post.id} className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row">
                        <div className="relative h-40 w-full overflow-hidden rounded-xl bg-slate-100 sm:w-56">
                          <img src={post.featuredImage || FALLBACK_IMAGE} alt={post.title} className="h-full w-full object-cover" loading="lazy" onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE; }} />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="space-y-2">
                            <div className="text-xs text-slate-500">{formatPublishedDate(post.publishedAt)} • {post.readTime ?? estimateReadTime(post.content)} min</div>
                            <h3 className="text-lg font-semibold text-slate-900">{post.title}</h3>
                            <p className="text-sm text-slate-600 line-clamp-2">{post.excerpt}</p>
                          </div>
                          <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
                            <span className="inline-flex items-center gap-2"><User className="h-4 w-4" />{post.author?.name || 'Editorial'}</span>
                            <span className="inline-flex items-center gap-4">
                              <span className="inline-flex items-center gap-1"><Heart className="h-4 w-4" />{post.likes}</span>
                              <span className="inline-flex items-center gap-1"><MessageCircle className="h-4 w-4" />{post.comments}</span>
                              <button aria-label="Bookmark" className="rounded-full p-1 hover:bg-slate-100"><Bookmark className="h-4 w-4" /></button>
                              <button aria-label="Share" className="rounded-full p-1 hover:bg-slate-100"><Share2 className="h-4 w-4" /></button>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post: ServicePost) => (
                      <article key={post.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <div className="h-44 w-full overflow-hidden bg-slate-100">
                          <img src={post.featuredImage || FALLBACK_IMAGE} alt={post.title} className="h-full w-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE; }} loading="lazy" />
                        </div>
                        <div className="p-5">
                          <div className="text-xs text-slate-500">{formatPublishedDate(post.publishedAt)} • {post.readTime ?? estimateReadTime(post.content)} min</div>
                          <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-slate-900">{post.title}</h3>
                          <p className="mt-2 line-clamp-3 text-sm text-slate-600">{post.excerpt}</p>
                          <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                            <span className="inline-flex items-center gap-2"><User className="h-4 w-4" />{post.author?.name || 'Editorial'}</span>
                            <span className="inline-flex items-center gap-4">
                              <span className="inline-flex items-center gap-1"><Heart className="h-4 w-4" />{post.likes}</span>
                              <span className="inline-flex items-center gap-1"><MessageCircle className="h-4 w-4" />{post.comments}</span>
                              <button aria-label="Bookmark" className="rounded-full p-1 hover:bg-slate-100"><Bookmark className="h-4 w-4" /></button>
                              <button aria-label="Share" className="rounded-full p-1 hover:bg-slate-100"><Share2 className="h-4 w-4" /></button>
                            </span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex items-center justify-center">
                  {hasNextPage ? (
                    <button ref={loadMoreRef} disabled={isLoading} onClick={() => setPage((prev: any) => prev + 1)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-60">
                      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />} Load more
                    </button>
                  ) : (
                    <span className="text-sm text-slate-500">Showing {posts.length} of {totalPosts} articles</span>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6 lg:sticky lg:top-8">
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Trending</h3>
                  <ul className="mt-3 space-y-3">
                    {(trendingData || []).map((t) => (
                      <li key={t.id} className="text-sm">
                        <div className="line-clamp-2 font-medium text-slate-900">{t.title}</div>
                        <div className="text-xs text-slate-500">{formatPublishedDate(t.publishedAt)} • {t.readTime ?? estimateReadTime(t.content)} min</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Newsletter</h3>
                  <p className="mt-1 text-sm text-slate-600">Get the latest {title} insights in your inbox.</p>
                  <form className="mt-3 flex gap-2">
                    <input type="email" placeholder="you@example.com" className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200" />
                    <button type="button" className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white">Subscribe</button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      {view === 'categories' && (
        <section className="py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {(categories as Category[]).map((c) => (
                <div key={c.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{c.count} articles</div>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">{c.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{c.description || 'Curated technology research and clinical notes.'}</p>
                  <Link to={`#cat-${c.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">Explore<ArrowRight className="h-4 w-4" /></Link>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500"><TagIcon className="h-4 w-4" /> Popular tags</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {(tags.length ? tags : ['ai-ml', 'web-development', 'cybersecurity']).map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default TechnologyDomainPage;
