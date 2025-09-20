
# HandyWriterz – AI Coding Agent Instructions

This repo is a React 18 + TypeScript SPA (Vite) with Cloudflare Workers APIs, Cloudflare D1 (DB), R2 (object storage), Clerk auth, and Tailwind UI. Follow these conventions for immediate productivity:

## Architecture Overview
- **Frontend**: Entry at `src/main.tsx` (ClerkProvider, React Query, Theme, Helmet). Path alias `@` → `src/` (see `vite.config.ts`).
- **Routing**: `src/router.tsx` uses lazy() + Suspense + ErrorBoundary HOC (`withSuspenseAndError`). Auth guards: `components/auth/AuthGuard`, `AdminGuard`. Admin routes from `features/router`.
- **API (Workers)**: `api/*.ts` export `{ fetch(req, env) }`. Endpoints: `upload.ts` (R2), `payments.ts` (D1/webhooks), `messages.ts` (D1/Resend). CORS per-file.
- **Config/Infra**: `wrangler.toml` (D1/R2/KV bindings), `vite.config.ts` (dev server + `/api` proxy), `package.json` (scripts). SQL migrations in `migrations/*.sql`.
- **Specs/Patterns**: See `AGENTS.md` for domain pages, admin surfaces, roles, and MDX/content rules.

## Developer Workflows
- **Run app**: `pnpm dev` (Vite on 5173, HMR)
- **Run API**: `pnpm run dev:api` (Wrangler Workers on 8788)
- **Typecheck**: `pnpm run type-check`
- **Lint**: `pnpm run lint`
- **DB migrations**: `wrangler d1 execute <db-name> --file ./migrations/000_initial_setup.sql` (apply in order)
- **Dev proxy**: Vite proxies `/api/*` → `http://localhost:8788/api/*` (see `vite.config.ts`)

## Project-Specific Conventions
- Use Tailwind utility classes and ShadCN primitives; avoid ad-hoc CSS. Components in `src/components/**`, features in `src/features/**`.
- Add pages as lazy routes via HOC in `src/router.tsx`. Example:
   ```ts
   const MyPage = lazy(() => import('./pages/MyPage'));
   { path: 'my-page', element: withSuspenseAndError(MyPage)() }
   ```
- Data fetching: React Query defaults from `src/main.tsx` (staleTime 5m, no refetch on focus). Call Workers via `/api/*`, return JSON.
- AuthZ: Gate protected UI with `AuthGuard`/`AdminGuard`. Server-side, use Clerk in Workers (`functions/api/auth.ts`) or validate session tokens.

## Integration Points
- **R2 uploads** (`api/upload.ts`):
   - Presign: `POST /api/upload/presigned-url` `{ key, contentType }` → `{ uploadUrl, key }`
   - Direct: `POST /api/upload` multipart `file`, `key` (50MB cap; PDF/DOC/IMG)
- **Payments** (`api/payments.ts`):
   - Create: `POST /api/payments` `{ id, amount, ... }` → D1
   - Webhooks: `POST /api/payments/coinbase-webhook`, `POST /api/payments/stablelink-webhook`
- **Messaging** (`api/messages.ts`):
   - Send: `POST /api/messages` `{ userId, content, ... }` (admin→user triggers email)
   - Fetch: `GET /api/messages/:userId`, `GET /api/messages/conversations`

## Environment & Bindings
- Client envs: prefix `VITE_` (e.g., `VITE_CLERK_PUBLISHABLE_KEY`). Secrets in Worker envs via `wrangler.toml` (e.g., `env.DATABASE`).
- R2 bucket: `env.R2_BUCKET` in `upload.ts`. Ensure prod/preview bindings match handler expectations.

## Feature Addition Patterns
- **New Worker route**: Create `api/<name>.ts` exporting `fetch`, add CORS, explicit 404s; route by `URL.pathname`.
- **New domain page**: Add `pages/domains/<Domain>.tsx`, register under `d/<slug>` using lazy + HOC.
- **DB changes**: Add SQL in `migrations/NNN_*.sql`, apply with Wrangler. Use prepared statements in API handlers.

## Key References
- `src/main.tsx`, `src/router.tsx`, `vite.config.ts`, `wrangler.toml`, `api/upload.ts`, `api/payments.ts`, `api/messages.ts`, `AGENTS.md`

---
For further details, see `AGENTS.md` and `CODEBASE_INTEL.md`. If any section is unclear or missing, request clarification or examples.

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
