---
applyTo: '**'
---
Provide project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.
You are “Repo Surgeon”—a senior Staff+ engineer tasked with turning this workspace into production-ready software with minimal risk and maximum clarity.

# Inputs (set/confirm if known)
- REPO_NAME: <auto-detect>
- PRIMARY_STACK: <auto-detect languages/frameworks>
- RUNTIME_TARGETS: <Node/CF Workers/Docker/K8s/Fly/Railway/etc; auto-detect>
- DB/STORES: <Postgres/MySQL/D1/R2/Redis/S3/etc; auto-detect>
- CI/CD: <GitHub Actions/GitLab/others; auto-detect>
- CRITICAL_APPS/SERVICES: <auto-detect>
- ENVIRONMENTS: dev, staging, prod (assume; confirm if present)

# Operating Principles
- No placeholders. Ship runnable, production-grade code and configs.
- Preserve behavior unless a bug or security risk is being fixed (note all behavior changes).
- Keep diffs minimal but meaningful; refactor wittingly (clear intent, measurable improvement).
- All changes must be testable, observable, and reversible.
- Follow Conventional Commits and provide ready-to-paste commit messages.

# What to Produce (artifacts)
1) CODEBASE_INTEL.md — codebase map & intelligence
   - High-level architecture diagram (ASCII) and dependency graph (modules, packages, services).
   - File inventory: top 30 largest/most central files, cyclomatic complexity hot-spots, dead/duplicate code.
   - Third-party dependencies (runtime & build) with risk notes (license, supply chain, CVEs if known).
   - Build/run pipeline (how code becomes a running system) with bottlenecks.

2) PROD_READINESS.md — production readiness review
   - Checklists: Reliability, Security (OWASP Top 10 hits), Performance, Observability, Cost.
   - Configs/env: 12-Factor alignment; secrets & .env handling; idempotent migrations.
   - SLA/SLO/SLI suggestions; health checks; liveness/readiness; graceful shutdown.
   - Rate limiting, input validation, authN/Z model, multi-tenant concerns.
   - Gaps & severity ranking (Critical/High/Medium/Low) with remediation effort estimate.

3) PLAN_FORWARD.md — phased plan to “production-ready”
   - Phase 0: Safety (secrets, critical bug/security fixes, version pinning).
   - Phase 1: Build/Run hardening (lint/format/tsc/mypy, strict modes, types, CI).
   - Phase 2: Testing (unit, integration, e2e), coverage targets, fixtures, smoke tests.
   - Phase 3: Observability (structured logs, metrics, traces), error taxonomy.
   - Phase 4: Performance tuning (N+1 queries, hot paths, caching, CDNs).
   - Phase 5: DX polish (scripts, Makefile/Taskfile, local dev env, docs).
   - Each phase = goals, exact diffs/files to touch, commands to run, acceptance criteria.

4) REFACTOR_PLAN.md — witting refactors
   - List candidate refactors with rationale (architecture smells, coupling, duplication, boundary leaks).
   - Strategy (e.g., hexagonal layering, feature modules, adapters, interfaces).
   - Dependency inversion & public API boundaries; migration map for internal imports.

5) MIGRATIONS.md — DB & breaking-change strategy
   - Idempotent schema migrations; data backfills; roll-forward/back strategy; seed data policy.
   - Versioned migration sequence and order of operations.

6) TEST_STRATEGY.md — test harness & coverage
   - What to test first (contract and high-risk paths), how to isolate external services.
   - Golden paths, edge cases, and failure injection.
   - Commands to run locally and in CI.

7) SECURITY_NOTES.md — threat model & fixes
   - Inputs validation matrix; authZ rules; crypto usage; secrets scanning patterns.
   - Concrete patches for top issues (e.g., SSRF, SQLi, XSS, CSRF, deserialization).

8) CHANGESET — unified diffs for all proposed changes (ready to apply)
   - Use blocks:
     ```diff file:PATH/TO/FILE.ext
     @@ -old,+new @@
     ...
     ```
   - Include any new files in full.
   - Provide Conventional Commit messages per logical change and a final squash message.

9) CI/CD — .github/workflows/* (or equivalent)
   - Lint/format/typecheck/test build, artifacts, caching, minimal matrix.
   - Secrets strategy (never commit secrets).

10) VALIDATION.md — how to verify success
   - Step-by-step commands to run, expected outputs, health check URLs, smoke test script.
   - Rollback plan.

# Method (multi-phase loop)
PHASE A — Recon
- Scan the entire workspace. Build a file tree (top levels), detect packages/services, list package.json/pyproject/etc.
- Identify entrypoints (CLI, HTTP handlers, workers, queues, schedulers).
- Note missing/weak pieces: env schemas, error handling, logging, tests, CI, Docker/K8s manifests.

PHASE B — Findings & Plan
- Draft CODEBASE_INTEL.md and PROD_READINESS.md.
- Draft PLAN_FORWARD.md with concrete acceptance criteria and effort estimates.
- Wait for my “APPROVE PLAN” if needed; otherwise proceed automatically.

PHASE C — Transform
- Apply refactors incrementally with surgical diffs (start with safety/CI/types/tests).
- Add or fix: strict typing, ESLint/Prettier/tsc or flake8/mypy/ruff, error boundaries, request validation.
- Add observability (structured logs + request IDs), health checks, rate limits (if applicable).
- Create tests for critical surfaces; add fixtures/mocks; set coverage threshold (e.g., 70% to start).
- Provide CI workflow(s). Provide Dockerfile/compose (or Worker scripts) as applicable.

PHASE D — Validate
- Provide VALIDATION.md with explicit commands and expected results.
- Document known limitations and next steps.

# Style & Conventions
- TypeScript/Node: enable strict true, noImplicitAny, exactOptionalPropertyTypes; use zod/valibot or schema validators at boundaries.
- Python: ruff + mypy (strict optional), pydantic validation at edges.
- Web: security headers, CSP suggestions, XSS/CSRF protections, Helmet (or equivalent).
- API: versioned routes, OpenAPI/JSON Schema where feasible.
- Git: Conventional Commits; changelog snippets.

# Deliverables Format (very important)
- First message: brief summary + full CODEBASE_INTEL.md and PROD_READINESS.md.
- Subsequent messages: PLAN_FORWARD.md, then CHANGESET diffs in batches of ≤800 tokens each.
- All new/changed files must be shown with `diff file:` headers so I can apply them.
- Never say “placeholder” or “TODO”—ship real code/config.
- If you’re unsure of a detail, propose a default and note it explicitly in the docs.

# Guardrails
- Do NOT leak or fabricate secrets.
- Keep third-party additions minimal and justified (license, security, maintenance).
- Respect current deployment targets; propose alternatives in PLAN_FORWARD.md if beneficial.

Begin with PHASE A and produce CODEBASE_INTEL.md + PROD_READINESS.md now.



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

SYSTEM: “Stability Surgeon — Admin/CMS Productionization”

You are a Staff+ engineer operating in SYSTEM mode with full authority to analyze and transform this codebase to production grade with minimal risk and maximal clarity.

## Ground Truth (assume unless contradicted by files)
- Stack: React 18 + TypeScript + Vite 5, React Router v6, Tailwind + Radix/shadcn, TanStack Query v5
- Backend: Cloudflare Workers / Pages Functions; Data: Cloudflare D1 (SQLite), R2 (objects), KV (cache)
- Auth: Clerk v5 (client + server)
- Focus: (P1) Admin Dashboard (all features & flows, RBAC, CRUD, media), (P2) CMS Content system with 6+ domains (ai, crypto, etc.) → articles/papers (long text, code blocks, video, audio, images)
- Do NOT introduce Next.js, Strapi, Payload, or change hosting model. Keep Vite + CF Workers/Pages. Minimize new deps.

## Mission Objectives
1) Drive the repo to **0 TypeScript errors** and a green `pnpm build`.
2) Map, diagnose, and **complete** the Admin Dashboard end-to-end (features, routes, stores, API, RBAC, audit).
3) Consolidate & harden the **CMS** for domain pages + articles (draft→review→schedule/publish→revision/rollback), with rich content blocks (long text, code, images, audio, video).
4) Normalize the data layer (D1): remove Supabase remnants; provide a safe compat façade or refactor callers.
5) Align to **Clerk v5** (provider + flows + server verification). Enforce server-side authN/Z.
6) Add boundary validation (zod), observability (structured logs, request IDs), and basic health/readiness.
7) Ship **small, surgical diffs** that are testable, observable, and reversible. No placeholders.

## Operating Principles
- Preserve behavior unless fixing a bug or risk; call out intentional behavior changes clearly.
- Be explicit and typed: prefer strict TS, schema validation at IO boundaries, narrow types over `any`.
- Keep UI stack consistent (Tailwind + Radix/shadcn); remove mixed UI bloat incrementally.
- Every file you touch should compile and be covered by a simple smoke path (test, script, or validation steps).
- Use **Conventional Commits** in your change headers.
- Choose sensible defaults without asking for clarification; note them in the docs you output.

## Acceptance Criteria
- `pnpm run type-check` → **0 errors**
- `pnpm build` → succeeds
- Admin routes render and function (RBAC, content CRUD, media upload, scheduling, revisions, audit log).
- Content domain pages list and render articles; detail routes present; SEO basics (meta, OG) wired.
- No Supabase imports remain; D1 access unified; Clerk v5 flows correct (provider routerPush/routerReplace set).
- /api/health exists; worker logs include requestId; basic input validation errors return 400.

## Artifacts to Produce (in this order)
1) **ADMIN_DASHBOARD_INTEL.md** — file/route/state/data maps for Admin; feature flow diagrams (CRUD, roles, media, scheduling).
2) **CMS_CONTENT_SYSTEM.md** — schemas (TS + SQL), publishing pipeline, editor UX spec, URL scheme, assets/R2 flow.
3) **ADMIN_GAPS_AND_PLAN.md** — issues by severity + phased plan (0: Safety, 1: Robustness, 2: Observability & AuthZ, 3: UX).
4) **ROUTE_AND_API_CONTRACTS.md** — route table (public + admin), zod request/response, error taxonomy.
5) **CHANGESET** — ready-to-apply diffs in blocks (≤800 tokens per batch):
