-- D1 content schema for public domains/posts, media, comments, reactions, votes
PRAGMA foreign_keys = ON;

-- Domains
CREATE TABLE IF NOT EXISTS domains (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT DEFAULT '',
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  updated_at INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);

-- Posts
CREATE TABLE IF NOT EXISTS posts_public (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  domain_id INTEGER NOT NULL REFERENCES domains(id) ON DELETE CASCADE,
  slug TEXT NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT DEFAULT '',
  cover_url TEXT DEFAULT '',
  author_id TEXT NOT NULL,
  author_name TEXT DEFAULT '',
  reading_time_min INTEGER DEFAULT 0,
  tags TEXT DEFAULT '[]',              -- JSON array of strings
  status TEXT NOT NULL DEFAULT 'draft',-- 'draft' | 'published'
  canonical_url TEXT DEFAULT '',
  mdx TEXT NOT NULL,                   -- raw MD/MDX
  html TEXT DEFAULT '',                -- cached rendered HTML
  toc TEXT DEFAULT '[]',               -- JSON array (stored as TEXT)
  published_at INTEGER,                -- seconds
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  updated_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  UNIQUE(domain_id, slug)
);

-- Media (R2-backed)
CREATE TABLE IF NOT EXISTS media (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  key TEXT UNIQUE NOT NULL,
  url TEXT NOT NULL,
  size_bytes INTEGER DEFAULT 0,
  content_type TEXT DEFAULT '',
  uploader_id TEXT NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);

-- Comments
CREATE TABLE IF NOT EXISTS comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  post_id INTEGER NOT NULL REFERENCES posts_public(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL,
  user_handle TEXT DEFAULT '',
  body TEXT NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  status TEXT NOT NULL DEFAULT 'visible' -- 'visible' | 'hidden' | 'pending'
);

-- Reactions (like/bookmark)
CREATE TABLE IF NOT EXISTS reactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  post_id INTEGER NOT NULL REFERENCES posts_public(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL,
  kind TEXT NOT NULL,                  -- 'like' | 'bookmark'
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  UNIQUE(post_id, user_id, kind)
);

-- Votes (+1/-1)
CREATE TABLE IF NOT EXISTS votes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  post_id INTEGER NOT NULL REFERENCES posts_public(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL,
  value INTEGER NOT NULL,              -- +1 or -1
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  UNIQUE(post_id, user_id)
);

-- Helpful indexes
CREATE INDEX IF NOT EXISTS idx_posts_pub_domain_status ON posts_public(domain_id, status);
CREATE INDEX IF NOT EXISTS idx_posts_pub_slug ON posts_public(slug);
CREATE INDEX IF NOT EXISTS idx_comments_post ON comments(post_id, created_at);
CREATE INDEX IF NOT EXISTS idx_reactions_post ON reactions(post_id);
CREATE INDEX IF NOT EXISTS idx_votes_post ON votes(post_id);

-- Seed core domains if missing
INSERT OR IGNORE INTO domains (slug, name, description) VALUES
('ai','AI','Research & practice in modern AI'),
('crypto','Crypto','Protocols & products'),
('health','Health','Evidence-based health content'),
('social-work','Social Work','Policy and practice'),
('dev','Dev','Engineering & developer experience');
