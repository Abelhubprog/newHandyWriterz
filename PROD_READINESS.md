---
title: HandyWriterz — Production Readiness Review
description: Reliability, Security, Performance, Observability, and Cost checklists with gaps and remediation plan
date: 2025-09-19
---
# PROD_READINESS — HandyWriterz

Production-readiness review of the current repo based on visible code/configs. Items are prioritized by severity with fixes proposed.

## Reliability

- Client-only assumptions in some flows (uploads, admin notify, payments) without server validation.
- Workers routes present (`api/*`) but some client code directly manipulates DB abstractions instead of calling Workers HTTP APIs consistently.
- Large components (e.g., user dashboard) increase bug surface; recommend decomposition and targeted tests.

Checklist
- [ ] All critical flows (auth, upload, payments, messaging) pass through Workers with validation.
- [ ] Graceful error UI on client; retries where idempotent.
- [ ] Idempotent endpoints for webhooks (`payments`), document submissions.
- [ ] Timeout and backoff strategies for external calls (email/webhooks) in Workers.

## Security

OWASP Top 10 alignment (selected):
- Broken Access Control: Admin checks happen client-side in several places. Ensure server-side AuthZ for admin endpoints.
- Cryptographic Failures: No custom crypto observed client-side; Clerk handles auth. Ensure HTTPS only. Do not embed secrets in client.
- Injection: SQL is constructed in code (e.g., dynamic UPDATE set list) — ensure parameterization; prefer prepared statements.
- Insecure Design: Supabase remnants and mixed clients increase risk of bypass. Centralize data access server-side.
- Security Misconfig: `wrangler.toml` includes placeholder secrets; ensure real secrets set in env and not committed. CSP not configured at client level; recommend strict CSP via meta or headers.
- Vulnerable deps: No CVE scan wired; add CI scanning.

Checklist
- [ ] Server-side authorization checks for all privileged routes.
- [ ] Input validation with zod/valibot at Workers boundaries; sanitize HTML/markdown on render.
- [ ] Sensitive values only in env (Workers vars), never in client code.
- [ ] CSP/Helmet headers for SPA hosting (Netlify/Vercel/Pages) and sanitized markdown rendering.

## Performance

- TanStack Query caching configured; ensure request-level caching/ETags if APIs are read-heavy.
- Heavy components doing a lot of work on the client; code-splitting already in place via lazy.
- DB: Joins and aggregations in admin dashboard done directly via D1 prepare; ensure appropriate indexes (check migrations).

Checklist
- [ ] Add indexes for posts(service_type, created_at), comments(post_id, created_at), analytics(service_type), etc.
- [ ] Use HTTP caching headers and conditional requests for read endpoints.
- [ ] Defer non-critical fetches; prefetch important ones.

## Observability

- Client: Minimal structured logging; `pino` exists but not wired. Toasts are used for UX feedback.
- Workers: No centralized logger or request ID propagation noted.

Checklist
- [ ] Standard log format (JSON) in Workers with requestId, userId, route, duration, status.
- [ ] Error taxonomy and centralized error handler in Workers.
- [ ] Basic metrics counters (requests, errors) and histograms (latency) via Workers Analytics Engine or external service.

## Cost

- Cloudflare free tiers for Pages/Workers/D1/R2 are budget-friendly; watch for R2 egress and email provider costs.
- Avoid unnecessary large payload uploads; enforce 50MB cap already noted.

Checklist
- [ ] Size limits server-enforced; chunked uploads if needed.
- [ ] Lifecycle rules for R2 (cold storage/expiration) for old uploads.

## Configs & Environments

- 12-Factor: Client env must use VITE_ prefix; server secrets via Wrangler env bindings.
- `wrangler.toml` includes prod/preview D1/R2/KV; ensure local dev matches expected bindings.
- Clerk publishable key required in client; secret key must be in Workers only.

Checklist
- [ ] .env.example for client-side variables (publishable, titles) and docs for server envs.
- [ ] Strict schema for envs in Workers (zod) to fail fast on startup if missing.

## SLA/SLO/SLI

- Suggested:
  - SLO: 99.9% uptime for Workers API and SPA availability.
  - SLI: p95 latency < 300ms for API reads; < 1s for uploads (excluding transfer time).
  - Error rate < 1% for 5xx.

Health checks
- Add `/api/health` and `/api/ready` endpoints and expose build version.

## Rate limiting, input validation, multi-tenant

- Add per-IP rate limits (token bucket in KV) to sensitive endpoints (auth, uploads).
- Validate all inputs at Workers boundary with zod; use parameterized SQL only.
- Multi-tenant: Not explicitly in scope, but Clerk orgs can be introduced later.

## Gaps & Severity

Critical
- Supabase remnants and missing data-layer module (`d1Client`). Fix by adopting one approach and removing dead imports. Effort: Medium.
- ClerkProvider lacks router integration props; AuthProvider uses a non-existent `session.sync()`. Effort: Low.

High
- Content service depends on unsupported client APIs; reconcile with Workers or provide a real client. Effort: Medium.
- Admin/user dashboards perform DB-like operations client-side; ensure those go through Workers in production. Effort: Medium.

Medium
- React Query v5 option mismatches (`keepPreviousData`). Effort: Low.
- Form/toast imports and usage inconsistencies. Effort: Low.

Low
- Logging, metrics, health checks not standardized. Effort: Low.
- Tests not wired. Effort: Low to Medium.

---
This review is a snapshot. See PLAN_FORWARD.md for a prescriptive phased plan and acceptance criteria.

# Summary

Overall: The SPA is close to deployable; the Workers + D1/R2 surface needs hardening. Ensure CI uses Node ≥18, enforce typecheck/lint/tests, and align D1 migrations to SQLite. Secrets must be bound via Wrangler (no plaintext). Webhook verification exists in parts; complete signature checks and idempotency.

## Reliability

- Hosting
  - SPA: Vercel/Netlify/CF Pages artifacts in place (OK)
  - APIs: Workers present in `api/*.ts`, but no automated deployment (Gap)
- Error handling
  - Frontend: ErrorBoundary + Suspense fallback HOC (Good)
  - Backend: Try/catch with JSON error payloads in each handler (Good)
- Data durability
  - D1 used for payments/messages; migrations in repo are Postgres-flavored and not D1-ready (Critical)
  - R2 uploads validate size/type (Good) but no antivirus/malware scan (Medium)
- Idempotency
  - Webhooks: StableLink/Coinbase update ops not idempotency-keyed (Medium)
- Rate limiting/backoff
  - None at the Workers edge (Medium)

## Security (OWASP Top 10 focus)

- A01 Broken Access Control
  - Workers endpoints don’t verify Clerk session or roles (Critical)
- A02 Cryptographic Failures
  - StableLink HMAC verification is present (Good). Coinbase signature verification appears incomplete (Medium)
  - Secrets must not be committed; `wrangler.toml` shows placeholders (ensure env-bound) (Medium)
- A03 Injection
  - D1 queries use prepared statements (Good)
- A05 Security Misconfiguration
  - Mixed hosting configs; ensure only one origin serves APIs (Medium)
  - CORS set to `*` (development); restrict origins/methods/headers in prod (Medium)
- A07 Identification and Authentication Failures
  - No server-side auth checks, relies on client only (Critical)
- A08 Software and Data Integrity Failures
  - CI Node version mismatch may produce inconsistent builds (High)
- A09 Security Logging and Monitoring Failures
  - No structured logs/metrics/traces (Medium)
- A10 SSRF
  - Limited outbound calls (Resend/StableLink). Validate URLs if adding proxy features (Low)

Other:
- XSS: Frontend uses DOMPurify in some places (isomorphic-dompurify dep). Ensure use wherever rendering user HTML (Medium)
- CSRF: APIs are JSON/Workers; for unsafe endpoints, rely on auth tokens; add CSRF only for cookie-based auth paths (Low)

## Performance

- Frontend bundle
  - Multiple UI libs inflate size (Medium). Prefer Tailwind + shadcn primitives; reduce MUI/Chakra overlap
- Caching
  - SPA assets immutable cached via hosting configs (Good)
  - API cache headers absent; consider per-endpoint caching or KV (Medium)
- DB
  - Queries simple; ensure indexes on hot paths (payments/messages have basic indexes) (OK)

## Observability

- Logging
  - No centralized logger in Workers; add minimal structured logs (request id, path, status, duration) (Medium)
- Metrics/Tracing
  - None; add basic counters and durations via logs or a vendor (Low/Medium)
- Health checks
  - No `/api/health` endpoint (Low)

## Cost

- CF free tiers likely OK initially. Risks: unbounded uploads (50MB cap exists), unbounded email sends, webhook retries. Add quotas and monitoring (Medium)

## Configs/env and 12-Factor

- Client envs via `VITE_*` in CI `.env.production` (OK)
- Worker envs via Wrangler `vars` and bindings (OK) — ensure secrets injected via dashboard/secrets, not committed (Medium)
- Idempotent migrations: Not present for D1 (Critical)

## SLA/SLO/SLI suggestions

- SLOs
  - Availability: 99.9% monthly for SPA and APIs
  - Latency: p95 < 300ms for API endpoints
  - Error rate: < 1% 5xx per day
- SLIs
  - Uptime (HTTP 200/2xx), latency p50/p95/p99, error counts, webhook success rate, storage failures

## Health/Readiness

- Implement `/api/health` returning bindings status and app version
- Readiness can check D1 `SELECT 1`, R2 `head` on a known key

## Rate limiting, input validation, authN/Z

- Rate limiting: Cloudflare Turnstile or simple per-IP KV counters for sensitive endpoints (`/api/upload`, `/api/payments`)
- Validation: Use `zod` schemas at API boundaries; currently hand-rolled checks only
- AuthN/Z: Verify Clerk session/JWT in Workers; enforce role checks for admin routes

## Gaps and severity

- Critical
  - Server-side auth: add Clerk verification middleware for Workers
  - D1 migrations: provide SQLite-compatible schema and migration runner
  - CI Node 16 → 18+: fix matrix to Node 18/20 and pnpm version alignment

- High
  - Workers deployment path: add CF Pages Functions or Wrangler deploy job
  - Secret management: remove any inline sample secrets; document how to set in CF env

- Medium
  - Observability: structured logs, request IDs, `/api/health`
  - Webhook idempotency: dedupe by event id, store processed ids
  - CORS tighten for prod
  - Bundle slimming: consolidate UI libs

- Low
  - Add basic rate limiting
  - Add cache headers for safe GETs

## Remediation effort (est.)

- Server auth middleware + apply across handlers: 1–2 days
- D1 schema + migrations (payments, messages, user_profiles): 1–2 days
- CI Node fix + add typecheck/lint/test: 0.5 day
- Workers deploy workflow (wrangler pages deploy or functions/ layout): 0.5–1 day
- Observability basics: 0.5 day
- Idempotency + CORS tightening: 0.5 day
