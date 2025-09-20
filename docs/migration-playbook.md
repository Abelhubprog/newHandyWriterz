# Migration Playbook (Services Substitution)

## Steps
1) Implement `/services/:slug` template behind flag
2) Map data for each service (page + categories + posts)
3) QA against legacy page for parity
4) Enable flag for service; add redirects from old route
5) Monitor metrics; rollback if regression

## Redirects
- Maintain canonical; ensure sitemap updated; avoid duplicate content

## Rollback
- Toggle flags; keep legacy files temporarily
