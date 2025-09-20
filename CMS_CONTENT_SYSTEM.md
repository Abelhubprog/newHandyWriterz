# CMS Content System — Model, Pipeline, and Delivery

A practical map of the content system that powers domain pages and the admin CMS editors. This reflects the current schema, services, and Workers APIs present in the repo.

Last indexed: 2025-09-19


## Overview (what exists now)

- Stores
  - Cloudflare D1: primary relational store for posts, service pages, categories, analytics.
  - Cloudflare R2: object storage for media uploads (images, docs), via `api/upload.ts`.
  - Cloudflare KV (optional): caching (not consistently used yet).
- Runtime
  - Cloudflare Pages Functions wrapper in `functions/api/*` delegates to Worker handlers in `api/*.ts`.
- Auth
  - Clerk on client; server helpers in `functions/api/auth.ts` for token verification and admin role checks.
- Clients
  - Domain pages in `src/pages/domains/**` read public content via `serviceCmsService` + `serviceContentService`.
  - Admin CMS editor pages (currently under `src/admin/pages/content/**`) write drafts/publish via `serviceCmsService`.


## Content types and tables

- Service Page (experience)
  - Table: `service_pages`
  - Keys: `service_slug` (FK reference), `slug` (page slug), `version` (optional), `is_published`, `published_at`, `updated_at`
  - JSON columns: `hero`, `highlights[]`, `sections[]`, `faq[]`, `pricing`, `seo`, `cta`
  - Summary table: `service_page_summaries` for list views and SEO rollups (title, description, hero image, status). Updated whenever drafts/publishes occur.
- Service Category (taxonomy)
  - Table: `service_categories`
  - Keys: `service_slug` (PK), name, description, icon, color, `seo`, `order`
- Service Posts (articles)
  - Table: `posts` (see migrations `03_posts_table.sql` and later content tables). Fields include: `id`, `service_slug`, `slug`, `title`, `excerpt`, `content` (markdown or rich JSON), `status` (draft/published), `tags[]`, `featured:boolean`, `published_at`, `read_time`
- Messaging/Interactions (supporting)
  - Tables: see `010_interactions_system.sql`, `011_document_submissions.sql` for messages/attachments and submissions.
- Analytics
  - Tables: `009_content_analytics.sql`, `005_analytics_tables.sql` track views/interactions; not fully wired yet.


## Services (code) and responsibilities

- `src/services/serviceCmsService.ts`
  - Fetch category (`getCategory(serviceSlug)`) and service page (`getPage(slug)`)
  - Save draft/upsert (`saveDraft`), publish (`publish`) — both call `databaseService.upsert` and then update `service_page_summaries` for fast lists
  - Normalize structures on read/write; owns default seed content for new pages
- `src/services/serviceContentService.ts`
  - Query posts (`getServicePosts`, with filters: status, search, tags, pagination)
  - Featured posts selector; aggregates (`getStatsByService`)
  - Computes derived fields like `read_time` if missing
- `src/services/databaseService.ts`
  - Abstraction over D1 with a mock fallback (for local/no-binding dev)
  - Generic helpers: `getBySlug`, `list`, `upsert`, `delete`, plus table-specific utilities


## API surfaces (Workers)

- `api/upload.ts`
  - POST /api/upload (multipart) — saves file to R2; returns `{ url, key, size, type }`
  - POST /api/upload/presigned-url — returns `{ uploadUrl, key }` for direct uploads
  - Validates content type and size in code (50MB cap) and CORS per-file
- `api/messages.ts`
  - Admin/user messaging; when admin sends, triggers email via Resend
- `api/payments.ts`, `api/send-*` (ancillary)

All are adapted for Pages in `functions/api/*.ts`.


## URL scheme and routing

- Domain pages
  - `GET /d/:serviceSlug` — domain landing page (e.g., `AdultHealth`) reads `service_pages` + posts
  - Future: `GET /d/:serviceSlug/:postSlug` for individual articles
- Admin CMS
  - Active: `/admin/*` under `features/router.tsx` (Dashboard/Posts/Users/Messages/Files/Settings)
  - Legacy editors: `/admin/services` list and `/admin/services/edit/:serviceSlug/experience` editor exist under `src/admin/pages/content/**` but are not wired into active router; to be migrated.


## Pipelines

1) Drafting a Service Experience
- Admin opens editor → loads category and page via `serviceCmsService.getCategory/getPage`
- Editing updates local state; autosave after debounce calls `saveDraft`
- `saveDraft` → upserts `service_pages` (JSON columns) and updates summary
- Optional publish: set `is_published=true` and `published_at`, upsert summary
- Domain page reads the latest published content (ensure filters by `is_published=true` on public views)

2) Publishing an Article
- Create post via admin posts page (new surface) or legacy flow
- Save as draft (`status='draft'`) until ready
- Publish sets `status='published'` and `published_at`; `serviceContentService` exposes `getFeaturedPosts`/`getServicePosts`
- Domain page lists featured, trending, and recent with pagination and tag filters

3) Media handling
- Client requests presigned URL or uploads via multipart to `/api/upload`
- Worker validates and stores in R2
- Returns public URL/key; stored in CMS JSON (hero, sections) or post content


## Validation, security, and observability

- Validation
  - Client-side normalization exists in editors; server-side schema validation (zod) is missing on write routes
  - Posts content is not consistently sanitized; use a sanitizer for HTML render surfaces
- Security
  - Clerk auth available; admin role checks exist on client and helper for server, but not enforced across all write endpoints
  - Rate limits for upload and messages are not present; recommend per-IP + per-user limits
- Observability
  - Health endpoint added; structured logs proposed (pino), but Workers don’t log request IDs or audit events yet


## Gaps and risks

- Duplicate admin routers cause orphaned editors and inconsistent UX
- Inconsistent data access: `databaseService` vs direct `cloudflareDb` calls
- No revision history for `service_pages`; overwrites lose history
- Article detail route missing; weak internal linking and SEO depth
- Limited input validation and sanitization; XSS risk in rich content
- No moderation workflow on posts/comments yet (tables exist for workflows in migrations 04/05 but not wired)


## Near-term remediation plan

- Consolidate admin to `features/*`; migrate `ServiceExperienceEditor` and `ServicesPage` into `src/features/content/**`
- Wrap all admin writes in server handlers with:
  - Clerk `authenticateUser` + `isAdminUser`
  - zod input schemas per route
  - structured logs with request IDs and audit entries (who changed what)
- Add `service_page_revisions` table and write-ahead on publish/draft; expose revisions in admin
- Implement `/d/:serviceSlug/:postSlug` article route and renderer with sanitized HTML/MDX
- Standardize data access via `databaseService`; deprecate raw `cloudflareDb` in UI
- Add basic rate limiting to `/api/upload` and `/api/messages`


## Reference migrations

- `migrations/000_initial_setup.sql` … `006_service_content_tables.sql` define content foundations
- `migrations/007_content_versioning.sql` and `008_content_scheduling.sql` introduce versioning/scheduling primitives
- `migrations/009_content_analytics.sql`, `010_interactions_system.sql`, `011_document_submissions.sql` add analytics and interactions


---

This map clarifies the current CMS model and paths to harden it for production without major rewrites.
