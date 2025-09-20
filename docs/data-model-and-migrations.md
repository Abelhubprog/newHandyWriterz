# Data Model & Migrations (Cloudflare D1)

## Tables
- service_pages (id, slug UNIQUE, title, summary, hero_image, sections_json, faq_json, pricing_json, seo_json, status, created_at, updated_at)
- service_categories (id, service_id, slug, name, description, color, sort_order, created_at, updated_at)
- posts (id, service_id, category_id, title, slug, content, excerpt, status, featured_image, author_id, seo_title, seo_description, tags_json, view_count, share_count, is_featured, scheduled_at, published_at, created_at, updated_at)
- content_versions (id, entity_type, entity_id, version, diff_json, author_id, created_at)
- messages (id, thread_id, sender_id, recipient_id, body, metadata_json, created_at)
- threads (id, subject, status, tags_json, created_at, updated_at)
- attachments (id, thread_id, filename, mime_type, size_bytes, url, checksum, created_at)

## Indexes
- posts: (service_id, status, category_id), (slug), (scheduled_at), (is_featured)
- service_pages: (slug)
- threads: (status), attachments: (thread_id)

## Migration order
1) service_pages & service_categories
2) posts alterations (new columns)
3) versions
4) messaging & attachments

## Seed data
- Minimal service_pages per service slug
- Example categories/tags
- Sample posts for each service

## Notes
- Keep mock fallback in databaseService in sync
- Use UTC timestamps; validate JSON columns
