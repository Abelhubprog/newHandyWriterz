Validation — HandyWriterz
=========================

This guide verifies the recent safety/infra changes: CI hardening, health endpoint, and Pages adapters.

Prereqs
-------
- Node 20.x and pnpm 10
- Cloudflare Wrangler installed for local API dev (optional)

Local checks
------------
1) Install and type-check
```pwsh
pnpm install
pnpm run type-check
pnpm run lint
pnpm run build
```

2) Run the app and API locally
```pwsh
# Vite dev server
pnpm dev

# In another terminal: Cloudflare Pages dev for APIs
pnpm run dev:api
```
- Visit http://localhost:8788/api/health — expect 200 JSON: { ok: true, time, durationMs, d1?: 'ok'|'error', r2?: 'ok'|'error' }
- App will proxy /api/* to 8788 per vite.config.ts

CI checks
---------
- Open a PR or push to master:
  - CI (ci.yml) runs type-check, lint, build on Node 20
  - Deploy workflow (deploy.yml) runs type-check, lint, build pre-deploy

Deploy smoke (Cloudflare Pages)
------------------------------
- Ensure Pages project config includes:
  - Build output: dist
  - Functions directory: functions/
  - Bindings: D1 as DB, R2 as STORAGE, Clerk/Resend/Payment secrets set in env
- After deployment, check:
  - https://<your-domain>/api/health → 200 JSON
  - App routes load and call /api/* endpoints successfully

Rollback
--------
- Revert CI changes by rolling back .github/workflows/ci.yml and updates to .github/workflows/deploy.yml
- Remove functions adapters by deleting functions/api/*.ts and the health.ts file if needed
- No data/schema changes shipped in this batch
