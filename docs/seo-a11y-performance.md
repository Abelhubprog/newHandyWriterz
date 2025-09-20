# SEO, Accessibility, and Performance

## SEO
- Canonical, robots for drafts, OG/Twitter images
- JSON-LD: Service, BreadcrumbList, FAQPage, ItemList; later Article for details
- Pagination rel (prev/next) when applicable; sitemap updates

## Accessibility
- Focus-visible outlines; aria-labels; roles; semantic headings; color contrast (WCAG AA)
- Keyboard nav for carousels and accordions

## Performance
- Budgets: TTI < 3.5s on 3G; CLS < 0.1; LCP < 2.5s
- Use lazy media, decoding=async, prefetch next page, code split heavy admin routes
- Cache with React Query; avoid layout shifts with reserved space
