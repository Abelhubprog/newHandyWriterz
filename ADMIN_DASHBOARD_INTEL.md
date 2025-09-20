# Admin Dashboard — Functionality Map and Data Flows

This document maps how the Admin Dashboard currently works in this repo, from files and routes to state, data flows, and breakpoints. It’s grounded in the present code, highlighting the active surfaces vs. legacy/duplicate ones that should be archived.

Last indexed: 2025‑09‑19


## Topography: active vs. legacy (full sweep)

- Active admin shell and routes
  - `src/router.tsx` spreads `...adminRoutes` from `src/features/router.tsx` under `/admin`, guarded by `AdminGuard`.
  - Layout: `src/features/common/layouts/AdminLayout.tsx` (Sidebar + Header + <Outlet/>).
- Other admin stacks present (not wired by app router)
  - `src/admin/Routes.tsx` with its own `./layouts/AdminLayout` and `./components/ProtectedRoute`; includes content/services/users routes.
  - `src/pages/admin/router.tsx` imports `@/components/admin/layouts/AdminLayout` (path no longer exists) and defines duplicate pages.
  - `src/app/admin/router.tsx` imports `./components/layouts/AdminLayout` and `./pages/*` under `src/app/admin/**`.
  - `src/routes/AppRoutes.tsx` is deprecated and returns `null`.
  - `archive/legacy-admin/**` contains pre-Clerk admin; keep archived.

These duplications cause routing confusion and inconsistent data access (see Risks below).


## FILE MAP (Admin)

path | kind | role | imports-from | used-by
---|---|---|---|---
`src/features/router.tsx` | route | Source of active admin route table | `AdminGuard`, `AdminLayout`, lazy pages | spread into `src/router.tsx`
`src/router.tsx` | router | App router; spreads `adminRoutes` | `./features/router` | App entry routing
`src/features/common/layouts/AdminLayout.tsx` | layout | Admin chrome (Sidebar/Header + Outlet) | common nav components | `features/router.tsx`
`src/components/auth/AdminGuard.tsx` | guard | Client RBAC check via Clerk role | `useAuth` | wraps AdminLayout
`src/components/auth/ProtectedRoute.tsx` | guard | Generic guard; optional `requireAdmin` | `useAuth` | used by legacy `src/admin/Routes.tsx`
`src/features/dashboard/Dashboard.tsx` | page | Admin dashboard landing | React Query (varies) | `features/router.tsx`
`src/features/posts/Posts.tsx` | page | Post management (new surface) | data services | `features/router.tsx`
`src/features/users/Users.tsx` | page | User management (new surface) | data services | `features/router.tsx`
`src/features/messages/Messages.tsx` | page | Messaging overview | API: `/api/messages` (Workers) | `features/router.tsx`
`src/features/files/Files.tsx` | page | File manager | API: `/api/upload*` | `features/router.tsx`
`src/features/settings/Settings.tsx` | page | Admin settings | env/feature flags | `features/router.tsx`
`src/admin/pages/content/ServiceExperienceEditor.tsx` | page | CMS editor for service public page (hero/highlights/sections/faq/pricing) | `serviceCmsService`, React Query | legacy route set (duplicate)
`src/admin/pages/content/ServicesPage.tsx` | page | Service list with counts, actions | `cloudflareDb` direct SQL, `toast` | legacy route set (duplicate)
`src/admin/pages/content/service-experience/*` | components | Editor sub-forms & utils | forms, uploader, types, utils | ServiceExperienceEditor
`src/pages/admin/router.tsx` | route | Duplicate router referencing non-existent `components/admin/layouts/AdminLayout` | n/a | not used
`src/app/admin/router.tsx` | route | Duplicate router for `src/app/admin/*` pages | n/a | not used
`src/services/serviceCmsService.ts` | service | CMS for service page/category | `databaseService` | editors + domain pages
`src/services/serviceContentService.ts` | service | Service article CRUD/list/stats | `databaseService` | domain pages + admin posts
`src/services/databaseService.ts` | data-access | D1 via Cloudflare client with mock fallback | `@/lib/cloudflareClient` | all CMS/services
`api/messages.ts` | api | Admin/user messaging endpoints | D1 + Resend | admin pages
`api/upload.ts` | api | R2 uploads (multipart + presign) | R2 bucket binding | admin files
`functions/api/*` | pages functions | Adapters + health | delegate to `api/*` | Cloudflare Pages
`src/hooks/useAuth.ts` | hook | Clerk user and derived role | Clerk React | guards/layouts

Notes
- The “features/*” admin is the active one; “admin/*” under `src/admin/**` duplicates some pages (notably ServiceExperienceEditor and ServicesPage) that are valuable but should be migrated under `features/*` for a single source of truth.
- Some admin UI also exists under `src/pages/admin/**` which is legacy; not used by active router.


## ROUTE MAP (Admin)

Active (from `src/features/router.tsx`):

- Base: `/admin` → element: `<AdminGuard><AdminLayout/></AdminGuard>`
  - `/admin/dashboard` → `features/dashboard/Dashboard`
  - `/admin/posts` → `features/posts/Posts`
  - `/admin/users` → `features/users/Users`
  - `/admin/messages` → `features/messages/Messages`
  - `/admin/comments` → `features/comments/Comments`
  - `/admin/files` → `features/files/Files`
  - `/admin/services` → legacy `src/admin/pages/content/ServicesPage` (temporarily bridged)
  - `/admin/services/edit/:service/experience` → legacy `src/admin/pages/content/ServiceExperienceEditor` (bridged)
  - `/admin/settings` → `features/settings/Settings`
  - `*` → `pages/not-found`

Legacy/duplicate (not wired into app router):
- `src/admin/Routes.tsx` defines its own tree (orders, messages, content, categories, services, users, analytics, settings) using `ProtectedRoute`. Not used by `src/router.tsx`.
- `src/pages/admin/router.tsx` also exports `adminRoutes` with a different AdminLayout.

Guards
- Client guard: `src/components/auth/AdminGuard.tsx` reads `useAuth()` → `hasAdminRole()` → Clerk metadata (role: "admin"). Redirects to `/auth/admin-login` when unauthorized.
- Server helpers: `functions/api/auth.ts` exports `authenticateUser` (Clerk session token verification) and `isAdminUser` (role check via Clerk metadata). Not yet enforced on every admin API.


## STATE MAP

- Local UI state: per‑page React state (e.g., editor tabs/forms in `ServiceExperienceEditor`).
- Server cache/state: React Query throughout (e.g., `useQuery(['service-page', slug], ...)`, `useMutation` for save/publish). Default QueryClient configured in `src/main.tsx` (stale ~5m).
- Auth state: `useAuth()` wraps Clerk user; provides `isAdmin` boolean used by guards and admin chrome.
- No central Redux/Zustand store in active admin. Some legacy contexts/hooks still exist in archived/duplicate stacks.


## DATA FLOW (selected views)

1) Service Experience Editor (public domain page CMS)
- Location: `src/admin/pages/content/ServiceExperienceEditor.tsx`
- Reads:
  - `serviceCmsService.getPage(serviceSlug)` → `databaseService.getBySlug('service_pages', slug, 'slug', { service_slug })` → maps to `ServicePageRecord` with JSON columns (sections/stats/faq/pricing/seo) parsed.
  - `serviceCmsService.getCategory(serviceSlug)` → `databaseService.getBySlug('service_categories', serviceSlug, 'service_slug')` → `ServiceCategoryRecord`.
- Writes:
  - Autosave via `saveDraft` mutation → `serviceCmsService.saveDraft(record)` → `databaseService.upsert('service_pages', payload, ['service_slug','slug'])` then `updateSummary` upserts summary row.
  - `publish` mutation → sets `is_published=true`, `published_at` and upserts both page and summary.
- Validation: none server‑side; client normalizes shapes. Risk noted below.

2) Services List (Admin)
- Location: `src/admin/pages/content/ServicesPage.tsx`
- Reads counts via raw queries: `cloudflareDb.select('services')`, and `query('SELECT ... FROM categories/posts GROUP BY service_id')`.
- Writes: delete via `cloudflareDb.delete('services', { id })`.
- Diverges from the `databaseService` abstraction, creating inconsistent access patterns and permissions handling.

3) Messaging (Admin)
- Likely uses `/api/messages` (Workers) for list/thread/send (see `api/messages.ts`). Admin→user sends email via Resend in API. Clerk auth verification should be enforced server‑side for admin conversations.

4) Files (Admin)
- Uses R2 uploads via `/api/upload` (multipart) or presign flow described in repo docs; Page location under `features/files/Files.tsx`. API implemented in `api/upload.ts` and mirrored for Pages in `functions/api/upload.ts`.


## FEATURE FLOWS (ASCII sequences)

A) Page Experience draft→publish

Admin UI → ServiceCmsService → DatabaseService → D1

- editor changes
- debounce 1.5s
- saveDraft()
  - upsert service_pages JSON columns
  - upsert service_page_summaries
- publish()
  - sets is_published=true, published_at
  - upsert summary
- Domain page (e.g., `d/adult-health`) reads via React Query and renders

B) Admin access (client)

Route (/admin/*) → AdminGuard → useAuth (Clerk) → hasAdminRole

- Not admin → redirect `/auth/admin-login`
- Admin → render AdminLayout and children

C) Media upload (admin)

Admin page → POST /api/upload (multipart file, key)

- Validates size/type client‑side
- Stores object in R2 (Workers binding)
- Returns `{ url, key, size, type }`
- Stored key referenced in CMS records (hero/section media)


## WHY IT BREAKS (root causes, repro, fix)

1) Duplicate/competing admin routers
- Root cause: `features/router.tsx` and `src/admin/Routes.tsx`/`src/pages/admin/router.tsx` coexist; only `features/router.tsx` is wired. Some useful editors (ServiceExperienceEditor) live under `src/admin/pages/**`.
- Repro: Visiting links referenced by legacy routes won’t render via active router; code splitting duplicates layout/guards.
- Fix Plan (do not touch user dashboard):
  - Step A: Bridge legacy editors into active router (Done in code) to expose functionality under `/admin`.
  - Step B: Move `ServiceExperienceEditor` and `ServicesPage` to `src/features/content/**` and update imports.
  - Step C: Remove duplicate routers (`src/admin/Routes.tsx`, `src/pages/admin/router.tsx`, `src/app/admin/router.tsx`) from the import graph and archive them.
  - Step D: Keep user dashboard routes under `/dashboard` unchanged.

2) Inconsistent data access layers
- Root cause: `ServicesPage` uses `cloudflareDb.*` while editors/domains use `databaseService`. Different auth/validation/logging paths.
- Repro: Permissions and error handling diverge; mock vs. real D1 fallbacks differ.
- Fix Plan: Standardize on `databaseService` (D1 + mock) for all admin CMS surfaces. Wrap raw SQL in service functions with input validation.

3) Missing server‑side authZ/validation on admin APIs
- Root cause: Guards are client‑only; Workers handlers don’t consistently enforce Clerk + role checks and schema validation (zod) for writes.
- Repro: Crafted requests to `/api/messages` or `/api/upload` may bypass intended RBAC.
- Fix Plan: Add `authenticateUser` + role checks in all admin‑mutating API routes; validate bodies with zod; return canonical error shapes.

4) No idempotency/versioning for CMS writes
- Root cause: `service_pages` upserts overwrite JSON; no revision history or audit.
- Repro: Concurrent edits cause lost updates; no rollbacks.
- Fix Plan: Add `service_page_revisions` table and write‑ahead log; include `updated_at` precondition; expose revision list in admin.

5) SEO/content routing gaps for articles
- Root cause: Domain pages list posts but per‑article routes (`/d/<domain>/<slug>`) not yet present; canonical tags exist but no detail page.
- Repro: Clicking into an article lacks a detail view; weak internal linking.
- Fix Plan: Add article detail route and renderer with sanitized rich content and code blocks; wire from admin posts.

6) Observability gaps
- Root cause: Limited structured logging and no request IDs/audit log for admin actions.
- Fix Plan: Add pino logs in Workers, correlate with request IDs; append admin audit records on writes.


## Consolidation execution plan (precise, minimal risk)

Do not modify any `/dashboard/*` (user) routes or components.

1) Bridge legacy editors to active router (status: Done)
  - In `src/features/router.tsx`, add routes:
    - `/admin/services` → `@/admin/pages/content/ServicesPage`.
    - `/admin/services/edit/:service/experience` → `@/admin/pages/content/ServiceExperienceEditor`.
  - Import `Navigate` for index redirect (already added).

2) Migrate files to features namespace (next PR)
  - Create `src/features/content/ServicesPage.tsx` by moving the legacy file; adjust imports to use `databaseService` instead of `cloudflareDb`.
  - Create `src/features/content/ServiceExperienceEditor.tsx` and move `service-experience/*` folder.
  - Update active router imports to use `@/features/content/*`.

3) Standardize data access (next PR)
  - Replace `cloudflareDb` direct SQL with `databaseService` methods (D1 + mock) and add validation on write paths.

4) Retire duplicate routers (final PR in sequence)
  - Remove unused imports/exports of `src/admin/Routes.tsx`, `src/pages/admin/router.tsx`, `src/app/admin/router.tsx`.
  - Keep archived copies for reference.

5) Server-side RBAC and validation (parallel)
  - Enforce Clerk admin checks and zod validation in any admin-mutating Workers route.


## Appendix: Types referenced

- `ServicePageRecord`, `ServiceCategoryRecord`: see `src/services/servicePage.types.ts`
- `ServicePost`: see `src/services/serviceContentService.ts`
- Auth: `useAuth()` and `hasAdminRole()` utilities via Clerk


---

This intel will guide consolidation (single admin router), data layer standardization, and security/observability hardening with minimal behavioral change.
