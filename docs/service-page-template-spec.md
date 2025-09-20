# Service Page Template Specification

## Goals
Reusable, newsroom-grade template for all service pages pulling CMS and posts data.

## Layout
- Hero: title, summary, metrics
- Featured carousel
- Filters bar: search, category, tags, grid/list toggle
- Articles list: infinite scroll, cards with author/engagement
- Sidebar: trending, newsletter CTA
- Sections (markdown), FAQ (accordion)

## Behavior
- Filters drive server-side query: status, category, search, tag
- Pagination: infinite append; “Load more” fallback
- Robust empty/loading/error states; skeletons

## SEO
- Canonical, robots (noindex for drafts)
- JSON-LD: Service, BreadcrumbList, FAQPage, ItemList (articles)
- OpenGraph/Twitter images from hero

## Accessibility
- Keyboard nav; landmark roles; focus styles; aria-expanded for accordions

## Performance
- Lazy images, decoding=async; stable aspect ratios; prefetch next page

## Components & Contracts
- FeaturedCarousel(posts: Post[])
- FiltersBar({search, category, tags, onChange})
- ArticleCard(post)
- SidebarTrending(posts)
- NewsletterCTA()
- SectionsRenderer(sections)
- FaqList(faq)

## Routing
- `/services/:slug` maps to template using slug to load CMS + posts

## Telemetry
- Clicks on cards, filters, load-more; dwell time; share/bookmark intents
