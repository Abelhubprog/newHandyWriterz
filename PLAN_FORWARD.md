---
Title: HandyWriterz — Plan to Production-Ready
Date: 2025-09-19
---

Purpose: phased, low-risk roadmap with concrete diffs, commands, and acceptance criteria.

Goals
- Preserve current behavior while fixing critical risks
- Harden CI/builds, secure APIs, align D1 schema, add observability
- Keep diffs small and reversible; test critical surfaces

Phase 0 — Safety (secrets, CI Node version, routing clarity)
Scope (1–2 days)
- Fix CI Node version and pnpm alignment (Node 20 LTS; pnpm 10 per package.json)
- Add a lean CI workflow for typecheck/lint/test/build
- Document envs and keep secrets out of repo
- Confirm API routing model without breaking local dev

Changes
- Update .github/workflows/deploy.yml
  - node-version: 20.x
  - pnpm/action-setup: v4 with version: 10
  - Add steps: pnpm run type-check and pnpm run lint before build
- Add .github/workflows/ci.yml (lint + typecheck + test + build)
- Add .env.example (client VITE_* keys only) and notes in README for Workers secrets via Wrangler/CF dashboard

Commands (PowerShell)
```pwsh
pnpm install
pnpm run type-check
pnpm run lint
pnpm run build
```

Acceptance criteria
- CI runs on Node 20 + pnpm 10, passes typecheck/lint/build on master
- No secrets present in repo; .env.example committed; README explains secrets

Phase 1 — Build/Run hardening (types, lint rules, Workers adapters)
Scope (1–2 days)
- Strengthen TS config and ESLint with minimal churn
- Provide Cloudflare Pages Functions adapters that call existing Workers handlers to unblock deploys

Changes
- tsconfig.json
  - Set noImplicitAny: true, strictNullChecks: true, exactOptionalPropertyTypes: true
  - Keep skipLibCheck: true initially
- ESLint
  - Ensure .eslintrc.* enforces react-hooks and basic import/no-unused-vars
- Pages Functions adapters (no behavior changes)
  - Create functions/api/health.ts — simple readiness/health with 200 JSON
  - Create adapters under functions/api/ delegating to ../../api/*.ts modules:
    - functions/api/upload.ts
    - functions/api/payments.ts
    - functions/api/messages.ts
    - functions/api/clerk-webhook.ts

Commands
```pwsh
pnpm run dev     # vite
pnpm run dev:api # wrangler pages dev; verify /api/* via adapters
```

Acceptance criteria
- Typecheck remains green (or specific files deferred to Phase 2)
- /api/* works locally via wrangler pages dev using adapters
- /api/health returns { ok: true, time: <iso> } with 200

Phase 2 — Testing (contracts first)
Scope (1–2 days)
- Add a minimal but useful test harness for critical contracts

Changes
- Add Vitest and coverage
  - Tests for health endpoint and simple utility contracts
- Configure coverage thresholds (>= 60–70%)
- Add pnpm test script

Commands
```pwsh
pnpm add -D vitest @vitest/coverage-v8
pnpm test
```

Acceptance criteria
- CI runs tests and enforces coverage >= 60%
- Health endpoint test green

Phase 3 — Observability & Security (auth middleware, validation, logs)
Scope (2–3 days)
- Server-side auth checks (Clerk verification)
- Input validation at API boundaries with zod
- Basic structured logs and request IDs
- Health/readiness deeper checks (D1/R2)

Changes
- Add api/_lib/auth.ts with Clerk verification helpers
  - requireAuth(req, env), requireAdmin(req, env)
- Add api/_lib/validate.ts (zod helpers) for upload, payments, messages
- Update handlers to enforce auth/validation
  - api/payments.ts: protect user queries; verify coinbase signature fully; keep StableLink HMAC; add idempotency
  - api/messages.ts: require auth; conversations admin-only
  - api/upload.ts: require auth; enforce allowed content types
- Add api/_lib/log.ts for structured logs (requestId, path, status, duration)
- Health: functions/api/health.ts checks D1 and R2 bindings

Acceptance criteria
- Authenticated endpoints reject unauthenticated requests (401) and enforce admin (403)
- Invalid inputs return 400 with schema errors consistently
- Logs include a requestId and basic fields

Phase 4 — Data layer (D1 migrations & idempotency)
Scope (1–2 days)
- Provide D1-compatible schema and idempotent migrations for used tables

Changes
- Add migrations/d1/001_init.sql (SQLite/D1) with:
  - payments, messages, user_profiles, webhook_events
- Webhooks store processed event ids (provider + event_id unique) and skip duplicates
- README section with Wrangler D1 apply instructions per environment

Commands
```pwsh
wrangler d1 execute <db-name> --file ./migrations/d1/001_init.sql
```

Acceptance criteria
- D1 schema applies cleanly in dev/preview/prod
- Replayed webhook events are deduplicated

Phase 5 — Deployments (Workers + SPA)
Scope (0.5–1 day)
- Automate deployment of SPA and Workers

Changes
- Extend .github/workflows/deploy.yml:
  - After build, run wrangler pages deploy dist if CF Pages is target
  - Ensure Pages Functions (functions/) included for APIs or add Workers deploy via wrangler deploy

Acceptance criteria
- Push to master triggers build and deploys SPA + APIs to preview/prod
- /api/health succeeds on the deployed environment

Phase 6 — Performance & DX polish
Scope (1–2 days)
- Bundle hygiene and developer experience improvements

Changes
- Reduce UI library overlap (prefer Tailwind + Radix primitives; phase out Chakra/MUI gradually)
- Add route-level bundle analysis and document hotspots
- Add pnpm dev:full to start app + API locally; update README

Acceptance criteria
- Bundle size reduced on key routes or documented with actions
- Single command to start both app and API locally

Files to touch (summary)
- .github/workflows/ci.yml — new: lint/typecheck/test/build on Node 20
- .github/workflows/deploy.yml — update Node/pnpm; add type/lint hooks; optionally wrangler deploy
- .env.example — new (client-only VITE_* keys)
- tsconfig.json — enable noImplicitAny, strictNullChecks, exactOptionalPropertyTypes
- functions/api/health.ts — new health/readiness
- functions/api/*.ts — adapters delegating to existing api/*.ts
- api/_lib/{auth,validate,log}.ts — new utilities
- migrations/d1/001_init.sql — D1 schema for used tables
- README.md — local dev, migrations, deployment steps

Green gates
- Build passes locally and in CI (Node 20)
- Lint/Typecheck pass in CI
- Tests pass; coverage >= 60%
- /api/health returns 200 and checks bindings
- Auth and validation in place on sensitive endpoints; webhooks idempotent
- CI deploys SPA + APIs; smoke checks pass

Notes & assumptions
- Keep current model (Vite SPA + CF Pages Functions adapters) to avoid large rewrites.
- If preferring a single Worker deployment, we can switch later with minimal changes.
- D1 schema targets only tables used by code today; expand iteratively.
