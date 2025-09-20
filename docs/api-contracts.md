# API Contracts (proposed)

Note: current app uses a DB service abstraction; these contracts formalize HTTP endpoints for future server routes.

## Service Pages
GET /api/services/:slug/page
- 200 { id, slug, title, summary, heroImage, sections[], faq[], pricing[], seo{}, isPublished }

GET /api/services/:slug/category
- 200 { id, slug, stats[], heroSummary }

## Posts
GET /api/services/:slug/posts?status=published&category=cat&tag=foo&search=bar&limit=10&offset=0
- 200 { posts: Post[], total }

POST /api/services/:slug/posts
- body: { title, slug, content, excerpt, status, featuredImage, authorId, categorySlug, tags[], seoTitle, seoDescription }
- 201 Post

PATCH /api/posts/:id
- body: partial Post
- 200 Post

POST /api/posts/:id/publish
- 200 Post

DELETE /api/posts/:id
- 204

## Messaging
GET /api/messages?userId=&status=&limit=&offset=
POST /api/messages (create thread)
POST /api/messages/:threadId/reply
POST /api/attachments (multipart)

## Errors
- 400 validation, 401 unauthorized, 403 forbidden, 404 not found, 409 conflict, 429 rate limit, 5xx server

## Common
- Pagination: limit/offset
- Sorting: sort, order
- Idempotency-Key support for POST/PATCH
