# Admin Dashboard Specification

## Information Architecture
- Overview (KPIs, recent activity)
- Content
  - Service Experience Editor (per service)
  - Posts (list, editor, review queue, scheduling)
  - Categories & Tags
- Messaging
  - Threads with users, internal notes, attachments
- Files
  - Asset library, upload validation, linking to posts/pages
- Analytics
  - Performance by service, trends, top categories, author leaderboard
- Settings
  - Roles & permissions, feature flags, SEO defaults, webhooks/notifications

## Navigation & Layout
- Left sidebar: primary nav + active service selector
- Top bar: search, quick actions, user menu, env badge
- Content area: cards/tables/forms; sticky actions for editors

## Workflows
- Content lifecycle: draft → review → approved → scheduled → published → archived
- Review queue: diff view (versioned), comments, approval, request changes
- Scheduling: timezone-safe datetime, conflict checks, auto-publish
- Featuring: pin to featured carousel by rank

## Messaging & Files
- Thread model: admin ↔ user, subject, status, tags
- Attachments: type/size validation, virus scan hook, previews
- Links to orders/requests where applicable

## Roles & Permissions
- Roles: admin, editor, author, reviewer, support
- Matrix: see roles-permissions-matrix.md
- Route guards via Clerk; server-side checks for mutating actions

## Editors
- Service Experience Editor
  - Hero, highlights, sections (markdown), FAQ, pricing, SEO
  - Autosave, preview, versioning (restore), publish state with robots rules
- Post Editor
  - Title, slug, markdown body, excerpt, featured image, category, tags
  - Embeds (image/video/audio/code), scheduled publish, feature toggle

## Analytics
- KPIs: views, likes, comments, CTR, reading time
- Trends by category, tag, author
- Export CSV

## Non-functional
- A11y, SEO (for previews), performance: optimistic UI, background prefetch
- Security: sanitization, rate limits, audit trail, PII controls
- Observability: console + remote logs, error boundaries

## Open Questions
- Final storage for attachments (R2/S3?)
- Notification channels (email/webhook/in-app)
