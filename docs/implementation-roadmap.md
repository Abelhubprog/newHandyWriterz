# Implementation Roadmap

## Milestones
1. Foundation & Data (W1)
   - Confirm/extend D1 schema and migrations
   - Mock parity + seeds; content sanitization policy
   - Shared UI primitives (cards, pills, accordions)
2. Service Template (W2)
   - Parametric `/services/:slug` template
   - Infinite pagination in hook; featured/trending; SEO/JSON-LD
   - Replace adult-health-nursing page (launch gate)
3. Admin Dashboard (W3–W4)
   - Routes, nav, roles guards
   - Service Experience Editor (versioning, preview, publish)
   - Posts (list/editor/review/schedule/feature)
   - Messaging + Files (threads, uploads)
   - Analytics overview
4. Replication & Polish (W5)
   - Swap other service pages
   - A11y/Perf pass, telemetry, docs, handoff

## Timeline (indicative)
- W1: Data + hooks + components scaffold
- W2: Adult page template + SEO + QA
- W3: Admin core (content + posts)
- W4: Messaging + files + analytics; hardening
- W5: Replicate to remaining services + polish

## Dependencies
- Clerk roles configured (admin/editor/author/reviewer/support)
- Cloudflare D1 availability per env; file storage target (R2/S3)

## Release Strategy
- Feature flags per service
- Progressive substitution with redirects
- Rollback: toggle flags; retain legacy page routes

## Acceptance Gates per Milestone
- Type-check/build pass; Lighthouse targets; a11y checks
- E2E: publish → public render; messaging/file exchanges
