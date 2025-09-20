# Deployment & Ops

## Environments
- Dev (mock-enabled), Preview, Production

## Pipelines
- Build: type-check, lint, test → build → deploy (Vercel/Netlify/CF Pages per repo config)

## Config
- Env vars: Clerk, Cloudflare D1, file storage, webhooks
- Feature flags for new template/admin routes

## Observability
- Console + remote log hook; error boundaries; uptime pings

## Backups/Recovery
- DB backups (D1 export) and attachment storage lifecycle
