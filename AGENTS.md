Use this single source of truth plus @platform_design_specs.pdf to implement the 5 content domains pages and the admin dashboard inside the existing React + Vite + TypeScript + Tailwind/ShadCN app with Clerk auth, Cloudflare D1 (DB) and R2 (storage).
 This context distills and operationalizes the uploaded specification and turns it into unambiguous tasks, designs, APIs, acceptance criteria, and validation steps.
 
## 0) Non-Negotiables (read first)

* **Public** domain pages; **authenticated** engagement (comments, reactions, bookmarks) and **admin-only** CMS, messaging, file library.
* **Mobile-first** layouts, responsive at `sm`, `md`, `lg`, `xl`. Prioritize one-hand reach actions.&#x20;
* **Content authoring in MDX** (long-form text, code with syntax highlighting, images, audio, video).
* **Storage**: all binaries in **R2**, all metadata in **D1**; use presigned upload; keep DB and storage in sync.
* **Design system**: Tailwind + ShadCN primitives; no ad-hoc CSS.
* **Security**: Role-based access (Admin/Editor/Contributor/User), MDX sanitation, rate limiting, object-level auth on R2 assets.
* **Done = shipped**: Type-checks clean, schema migrations applied, e2e flows pass, Web Vitals good, lighthouse ≥ 90 (PWA optional).

---

## 1) Information Architecture

### 1.1 Domains & Routes

* **Domains**: `adult-health`, `mental-health`, `child-nursing`, `social-work`, `technology` (AI/Crypto).&#x20;
* **Public routes**

  * `/d/:domain` – domain landing (hero + feed + sidebar)
  * `/p/:slug` – post page (MDX, media, engagement)
  * `/search` – global search (domain filter, tag filter)
* **User (auth)**

  * `/me` – bookmarks, history, messages inbox
* **Admin**

  * `/admin` – dashboard
  * `/admin/posts` (list/create/edit)
  * `/admin/files` (library/upload)
  * `/admin/messages` (inbox/thread)
  * `/admin/users` (list/detail)
  * `/admin/comments` (moderation)
  * `/admin/settings` (general/roles/integrations)&#x20;

### 1.2 Content Types (short definitions)

* **Post**: `title`, `slug`, `domain_id`, `type` (`text|code|video|audio|image`), `summary`, `content(MDX)`, `status`, `published_at`, `author_id`.
* **Attachment**: R2 object linked to `post_id` or `message_id`.
* **Comment**: threaded; markdown allowed; code fences rendered.
* **Reaction**: one per (user, target, type).
* **Message**: admin ↔ user, optional attachments.
* **Notification**: event → user (comment reply, message, etc.).&#x20;

---

## 2) Design System (explicit)

### 2.1 Tokens (Tailwind)

* **Color**: `zinc` for UI chrome, `slate` for text, **accent**: `indigo` (Technology), `emerald` (Adult), `sky` (Child), `violet` (Mental), `amber` (Social). Accent used for hero gradient, links, active states.
* **Type**: Inter (body), Space Grotesk (display). Base 16px; post body 18px on `md+`.
* **Spacing**: 4/8/12/16/24/32; max line length \~66–75ch on post body.
* **Elevation**: only for interactive surfaces (cards, menus).
* **Breakpoints**:

  * Mobile (“primary”): sticky bottom bar shows Like/Bookmark/Share on post pages.
  * Desktop: sticky right sidebar for TOC/related.

### 2.2 Components (ShadCN primitives)

* **Core**: `Button`, `Input`, `Textarea`, `Badge`, `Avatar`, `Card`, `Dialog`, `DropdownMenu`, `Tabs`, `Toggle`, `Tooltip`, `Progress`, `Skeleton`, `ScrollArea`.
* **Custom**:

  * `HeroSection` (domain icon, tagline, CTA)
  * `PostCard` (media chips, reading time)
  * `MDXRenderer` (Shiki/Prism, copy-button, callouts)
  * `MediaPlayer` (video/audio with scrubber)
  * `CommentThread` (virtualized, nested)
  * `ReactionBar` (optimistic UI)
  * `UploadDropzone` (R2 presigned)
  * `DataTable` (admin lists w/ filters)
  * `ChartPanel` (views/engagement)
  * `RoleGuard` (conditional render by role)

### 2.3 Page Layouts (acceptance bullets)

**Domain Page**

* Hero banner (illustration + domain color)
* Filter row: *Latest | Trending | Featured*; media type chips
* Infinite feed (3-up grid `lg`, 1-up mobile)
* Sidebar: Trending (top 5), Featured (curated), tags cloud

**Post Page**

* Title + meta (author avatar, date, domain badge, read-time)
* Reading progress bar (top)
* MDX body with: headings anchor links, code copy, image lightbox, video player, audio waveform
* Right rail: TOC on `lg+`; Related posts
* Bottom: Reaction bar (like, bookmark, share), Comments (auth-gated), Report/Flag button

**Admin**

* Left rail nav + topbar (search, user menu)
* Posts list: status/domain/tag filters; bulk actions; column prefs
* Editor: split view (MDX + preview), schedule picker, SEO meta, hero image, domain selector
* Files: grid + details pane; search by `type/date/usedBy`
* Messages: Inbox (left), Thread (center), User profile (right)
* Comments: moderation queue with quick actions
* Settings: roles/claims mapping, domains config, integrations keys

---

## 3) Data & Validation

### 3.1 Drizzle (D1) schema (TS sketch)

```ts
// drizzle/schema.ts
export const domains = sqliteTable('domains', {
  id: integer('id').primaryKey(),
  slug: text('slug').unique().notNull(),
  name: text('name').notNull(),
  description: text('description'),
  createdAt: integer('created_at').notNull(),
  updatedAt: integer('updated_at').notNull(),
});

export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey(),
  domainId: integer('domain_id').references(() => domains.id).notNull(),
  authorId: integer('author_id').references(() => users.id).notNull(),
  type: text('type').notNull(), // text|code|video|audio|image
  title: text('title').notNull(),
  slug: text('slug').unique().notNull(),
  summary: text('summary'),
  content: text('content'), // MDX
  status: text('status').notNull(), // draft|review|published|scheduled
  publishedAt: integer('published_at'),
  createdAt: integer('created_at').notNull(),
  updatedAt: integer('updated_at').notNull(),
});
```

### 3.2 Zod input guards (author-side, server)

* `CreatePost`: require `title(≤120)`, `slug(kebab)`, `domainId`, `type ∈ set`, `status`, `content (MDX ≤ 250kB)`, `summary(≤300)`.
* `CreateComment`: length ≤ 5k, markdown fenced code allowed.
* `UploadAttachment`: `type ∈ {image,video,audio,doc}`, `size ≤ 200MB` (video), `≤ 20MB` (image/audio/doc).

### 3.3 MDX safety

* `remark-gfm` + `rehype-sanitize` (allow code, links, images; disallow script/iframe except whitelisted providers if later needed).
* Image proxy/resizer for external URLs.
* Link policy: `rel="noopener noreferrer"`, `target="_blank"` optional.

---

## 4) API Surface (tRPC or REST)

> Use tRPC routers if available; otherwise mirror as REST. All protected routes require Clerk JWT; enforce **role claims**.

**Posts**

* `post.list({domain, tag, mediaType, sort, cursor})` – feed, paginated
* `post.get({slug})` – full post + related
* `post.create({…})` `post.update({id,…})` `post.publish({id, when?})`
* `post.delete({id})`

**Comments**

* `comment.list({postId, cursor})`
* `comment.create({postId, parentId?, content})`
* `comment.moderate({id, action})` (admin)

**Reactions**

* `reaction.toggle({targetId, targetType, kind})`

**Bookmarks**

* `bookmark.toggle({postId})`
* `bookmark.list()`

**Search**

* `search.query({q, domain?, tag?, media?})`

**Files (R2)**

* `file.presignUpload({contentType, size, scope:'post'|'message'})` → `{url, fields}`
* `file.complete({objectKey, linkTo:{postId?|messageId?}})`
* `file.list({type?, q?, page})`, `file.delete({id})`

**Messaging**

* `msg.inbox()`, `msg.thread({userId})`, `msg.send({to, content, attachments?})` (admin)
* WebSocket channel: `wss://.../messages/:userId`

**Users/Settings (admin)**

* `user.list({role?, q?})` `user.detail({id})` `user.role.set({id, role})`
* `settings.get()` `settings.update({…})`

---

## 5) Upload Flow (R2 exact)

1. Admin selects files → `file.presignUpload`
2. Client uploads via returned `url/fields` (multipart).
3. On success, client calls `file.complete` to:

   * Persist **Attachments** row with `objectKey`, `type`, `size`, `checksum`.
   * Generate thumbnails (image/video poster) via Worker.
4. Editor inserts attachment token into MDX (`<Image src="/cdn/{key}" />` etc.).
5. On post delete → detach & optionally GC unreferenced objects (cron).

---

## 6) Engagement Logic

* **Reactions**: optimistic toggle; constraint: unique (user,target,kind).
* **Comments**: debounced submit, immediate local insert, server confirms id; mention basic spam heuristics (rate limit/user age).
* **Notifications**: server emits DB row + WS event on: reply to my comment, my post commented, admin message received.
* **Bookmarks**: stored in D1; `/me` shows bookmarks with last read position.

---

## 7) Performance & Accessibility

* **Images**: responsive `srcset`, lazy-load, LQIP, cap width.
* **Code**: route-level code splitting; MDX chunks.
* **A11y**: headings hierarchy, landmark roles, focus ring, contrast ≥ 4.5:1, keyboard nav everywhere.
* **Web Vitals**: LCP image preloaded; RUM instrumentation.
* **SEO**: meta/OG/JSON-LD; canonical; sitemap; robots.

---

## 8) Security & Compliance

* Clerk session check on API; `RoleGuard` in UI.
* **MDX sanitize** (see §3.3); **escape** any HTML author input.
* **Rate limits**: per IP+user on posting/commenting/messaging.
* **R2 ACL**: private by default; public-read only for published assets; signed URLs for drafts/private messages.
* **Audit**: write trail for post status changes & moderation actions.
* **Backups**: D1 export nightly; R2 lifecycle rules.
* **PII**: retain only necessary profile fields.

---

## 9) Folder Structure (enforced)

```
src/
  components/ (shared UI)
  features/
    posts/    (hooks, PostCard, MDXRenderer)
    comments/ (CommentThread)
    reactions/
    bookmarks/
    messaging/
    files/
  pages/
    domains/{adult-health|mental-health|child-nursing|social-work|technology}
    posts/[slug].tsx
    admin/{dashboard,posts,files,messages,users,comments,settings}/...
  services/ (trpc/rest clients, r2 helpers)
  server/   (routers/handlers, drizzle, workers bindings)
  styles/   (tailwind.css)
  types/    (dto, zod)
```

---

## 10) Quality TODOs (execution plan)

### Phase 0 — Foundations

* [ ] Add envs: `VITE_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `D1_BINDING`, `R2_BUCKET`, `R2_PUBLIC_BASE`, `JWT_ISSUER`.
* [ ] Install deps: `@mdx-js/react`, `rehype-sanitize`, `remark-gfm`, `prism-react-renderer` or `shiki`, `zod`, `drizzle-orm`, `@tanstack/react-query`, WebSocket client, chart lib.
* [ ] Set Tailwind + ShadCN; register color tokens; theme switcher.
* [ ] Drizzle migration: `domains`, `posts`, `attachments`, `comments`, `reactions`, `tags`, `post_tags`, `messages`, `notifications`, `users` (shadow via Clerk).&#x20;
* [ ] Boot `RoleGuard` and Clerk role claims (admin/editor/contributor/user).

### Phase 1 — Public Experience

* [ ] Build `HeroSection`, `PostCard`, `SidebarTrending`, `ReactionBar`, `CommentThread`, `MDXRenderer`.
* [ ] Implement `post.list`, `post.get` routers; domain feed with infinite scroll.
* [ ] Post page: reading progress, TOC, related posts, reactions, comments (auth-gated).
* [ ] Global search w/ filters.

**Acceptance**

* [ ] Mobile domain page: filter row fits on one line; 60fps scrolling; CLS < 0.1.
* [ ] Post code blocks show copy button; images open in lightbox; video plays; audio waveform loads.
* [ ] Anonymous sees content; auth prompt appears when trying to interact.

### Phase 2 — Admin CMS

* [ ] `/admin` shell (nav, topbar, breadcrumb).
* [ ] Posts list (filters, bulk actions), Editor (MDX + preview, schedule), SEO fields.
* [ ] Files: R2 presigned upload, thumbnails, search, attach to post.
* [ ] Comments moderation queue.
* [ ] Roles management & settings.

**Acceptance**

* [ ] Draft → Review → Published workflow; scheduled publish triggers worker.
* [ ] Version history shows diffs; revert works.
* [ ] File delete blocks if still referenced; otherwise GC task marks for purge.
* [ ] Editors restricted to assigned domains.

### Phase 3 — Messaging & Notifications

* [ ] Real-time admin↔user messaging (WS), attachments allowed.
* [ ] Notifications on comment reply/new message; inbox in `/me`.

**Acceptance**

* [ ] WS reconnects after network drop; typing indicator <300ms latency.
* [ ] Message attachment <20MB image/audio, <200MB video; virus-scan hook (stub OK).

### Phase 4 — Perf/Security/SEO/QA

* [ ] Lighthouse ≥ 90 on mobile (home, domain, post).
* [ ] E2E flows (Cypress/Playwright): read feed → open post → like → comment → bookmark.
* [ ] Rate limiting in place; XSS attempt via MDX blocked; content security policy shipped.
* [ ] Analytics events for views, reactions, comments, shares.

---

## 11) Validation & “Definition of Done”

### DoD per Feature

* **UI**: matches layouts; dark mode OK; keyboard navigable; screen reader labels present.
* **Data**: Zod validates inputs; drizzle constraints enforced; no orphan attachments.
* **Security**: role checks on UI+API; MDX sanitized; presigned uploads locked to user.
* **Perf**: LCP < 2.5s on 4G; images properly sized.
* **Tests**: unit (utils), integration (routers), e2e (critical paths).
* **Docs**: README updates + .env.sample + API docs.

### Self-Checks for GPT-5 (run mentally / via scripts)

* [ ] `pnpm typecheck` passes; no `any` in service/types.
* [ ] `drizzle-kit migrate` applied; seed created domains (5) + example posts.
* [ ] Hitting `/d/technology` shows feed; clicking a post shows MDX with highlighted code & media.
* [ ] Attempting to comment while unauthenticated asks to Sign in (Clerk).
* [ ] In admin, create post with R2 image → preview shows image → schedule publish in 5 mins → appears automatically.
* [ ] Delete a post: attachments remain but are marked **unreferenced**; GC job visible.
* [ ] Rate-limit exceeded returns 429 with friendly UI toast.
* [ ] Lighthouse JSON saved; core metrics reported.

---

## 12) Sample Stubs (to align implementation)

**MDX renderer**

```tsx
// components/MDXRenderer.tsx
import { MDXProvider } from '@mdx-js/react';
import { CodeBlock } from './mdx/CodeBlock';
import { Callout } from './mdx/Callout';
import rehypeSanitize from 'rehype-sanitize';
/* wrap your mdx compile step server-side with sanitize; on client just render */

const components = { pre: CodeBlock as any, Callout };
export function MDXRenderer({ code }: { code: string }) {
  // compiled MDX -> React (via server or bundler plugin)
  return <MDXProvider components={components}>{/* render compiled */}</MDXProvider>;
}
```

**Presign upload (server)**

```ts
// server/routers/file.ts
const presignUpload = protectedProcedure
  .input(z.object({ contentType: z.string(), size: z.number().max(200*1024*1024), scope: z.enum(['post','message']) }))
  .mutation(async ({ ctx, input }) => {
    // create key: scope/userId/uuid.ext
    // call R2 to create presigned POST; persist pending attachment row (status='uploading')
    return { url, fields, objectKey };
  });
```

---

## 13) What to Defer (explicitly out of scope now)

* External embeds beyond images/video/audio (e.g., interactive iframes)
* Full i18n content translations (UI strings scaffolding allowed)
* Monetization/paywalls
* Advanced moderation (ML) – keep heuristic rules

---

### Source of Requirements

All requirements, structures, and page behaviors in this context are derived from the uploaded **Platform design and specs** and converted to implementation-ready tasks, designs, and acceptance criteria.&#x20;

---

If you want, I can now translate this into **scaffolded code tasks** (repo tree with empty components/routers, Drizzle schema file, and migration scripts) or generate **Playwright e2e specs** matching the acceptance checks.

