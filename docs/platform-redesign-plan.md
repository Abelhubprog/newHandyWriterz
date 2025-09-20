# Platform redesign plan: Service pages substitution + Admin dashboard rebuild

## Goals
- Replace existing services pages with a reusable, newsroom-grade, CMS-driven experience.
- Rebuild Admin dashboard into a modern, consolidated surface with robust publishing workflow, messaging, and file sharing.
- Preserve user dashboard; only integrate messaging/files between Admin and Users.
- Meet SEO, accessibility, performance, and security standards for production.

## Requirements checklist
- Service pages
  - CMS-driven content (hero, sections, FAQ, posts, categories, tags) per service
  - Featured carousel, filters (search/category/tag), infinite load, sticky sidebar
  - Article cards with author, engagement, share/bookmark, safe media (img/video)
  - SEO: canonical, robots (drafts noindex), JSON-LD (Service, Breadcrumb, FAQ, ItemList)
  - A11y: keyboard nav, focus states, semantic landmarks, color contrast
  - Performance: lazy images, skeletons, code-split route, minimal CLS
- Admin dashboard
  - Role-guarded access (Clerk), fine-grained roles (admin, editor, author, reviewer)
  - Content workflow: draft → review → approved → scheduled/published → archived
  - Service Experience Editor (hero/highlights/sections/FAQ/pricing/SEO)
  - Post management per service (create/edit/publish/feature/categorize/tag)
  - Messaging with users and file sharing; audit trail; notifications
  - Analytics: content performance (views, likes, comments, CTR), trends, top categories
  - Safety: sanitization, media validation, rate limits, activity logs
- Data & infra
  - Cloudflare D1 migrations for service pages, posts, categories/tags, versioning, scheduling
  - Seed/fixtures; dev mock fallback
  - Observability (basic logs/metrics), error boundaries, SLOs for page load

## Architecture & repo mapping
- Public routes
  - `src/pages/services/[service].tsx`: Reusable service page template
  - Components: `FeaturedCarousel`, `ArticleCard`, `FiltersBar`, `SidebarTrending`, `NewsletterCTA`
- CMS/data layer
  - `src/services/serviceCmsService.ts`: page/category CRUD
  - `src/services/serviceContentService.ts`: posts/categories/tags/search
  - `src/hooks/useServiceContent.ts`: switch to infinite query for pagination; filtering
- Admin surface
  - `src/admin/Routes.tsx`: consolidated routes
  - Editors: `src/admin/pages/content/ServiceExperienceEditor.tsx` and subforms
  - Posts: `src/admin/pages/content/posts/*` (list, editor, moderation queue)
  - Messaging & files: `src/admin/pages/inbox/*` integrated with user threads
  - Settings: roles, feature flags, SEO defaults

## Data model (D1)
- Tables (extend existing where present)
  - `service_pages` (id, slug, title, summary, hero_image, sections JSON, faq JSON, pricing JSON, seo JSON, status, timestamps)
  - `service_categories` (id, service_id, slug, name, description, color, sort)
  - `posts` (existing) add: is_featured, view_count, share_count, scheduled_at
  - `post_tags` (post_id, tag) or tags JSON (keep current, add index if native)
  - `content_versions` (entity_type, entity_id, version, diff, author_id, created_at)
  - `messages`, `attachments` for admin-user comms (if not already present)

## Execution plan (phased)
1) Foundation
- Confirm/extend D1 migrations; add missing indexes (slug, status, service_id, scheduled_at)
- Update services seed; ensure mock fallback parity
- Harden sanitization for Markdown/HTML (rehype-sanitize policies) and media upload validation

2) Public service page template
- Generalize current `adult-health-nursing` page into a parametric template; wire existing hooks
- Switch `useServiceContent` to React Query infinite queries; append pages, preserve filters
- Implement components: featured carousel, filters bar, cards, sidebars
- Add structured data injection and meta tags; verify draft robots rules
- Accessibility pass (tab order, roles, ARIA labels, focus rings)

3) Admin dashboard rebuild
- Routes: Dashboard, Content, Posts, Messaging, Files, Settings
- Content flow: Service Experience Editor (autosave, versioning, preview), publish workflow
- Posts: list with filters, editor (markdown, embeds), schedule, feature pin, review queue
- Messaging: threads with users, file upload, admin internal notes, status links to orders
- Notifications: email/webhooks for publish/review events
- Audit trail across actions

4) SEO & Performance
- Add Article/BlogPosting JSON-LD to post details (future route)
- Preload hero image; defer non-critical JS; image `loading=lazy`, `decoding=async`
- Lighthouse targets: PWA-friendly, >90 performance/SEO/accessibility

5) Rollout
- Launch `adult-health-nursing` first; content parity check
- Replicate to other services: child-nursing, mental-health-nursing, nursing-education
- Backfill content; monitor logs/analytics; stabilize

## Acceptance criteria
- Adult Health Nursing page meets newsroom UX and SEO; filters and infinite load work
- Admin can publish content, feature posts, manage categories/tags, edit page modules
- Messaging and file sharing between admin and users functional and secure
- A11y, SEO, and performance budgets met; CI type-check/build pass

## Risks & mitigations
- Pagination state (append vs replace): switch to infinite query + accumulative state
- Sanitization gaps: strict schema, test XSS vectors; server-side validation where applicable
- Schedule/publish drift: timezone-safe timestamps; cron/queue reliability
- Role drift: Clerk roles and guards enforced at route and action levels

## Work breakdown (WBS)
- W1: Data/migrations; hook infinite queries; shared UI components scaffold
- W2: Adult Health Nursing template + components + SEO; QA pass
- W3: Admin routes + Editors + Posts; workflow + audit; messaging/files integration
- W4: Replicate service pages; analytics dashboards; polish & docs

## Testing
- Unit: utils, hooks, services; sanitization
- Integration: admin publish → public render; messaging/file flows
- E2E: core paths for service browsing and admin publish

## Deliverables
- Parametric service page template, components, and styles
- Updated hooks/services for filters + infinite pagination
- Rebuilt Admin dashboard with content workflows and messaging/files
- Migrations, seeds, and documentation
