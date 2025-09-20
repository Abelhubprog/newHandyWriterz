-- Service CMS tables for service-specific public pages and admin experience builder
-- Tables: service_pages, service_page_summaries, service_categories

PRAGMA foreign_keys=ON;

CREATE TABLE IF NOT EXISTS service_pages (
  id TEXT PRIMARY KEY,
  service_slug TEXT NOT NULL,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  summary TEXT,
  content TEXT,
  hero_image TEXT,
  sections TEXT, -- JSON array
  stats TEXT, -- JSON array of {label,value}
  faq TEXT, -- JSON array of {question,answer}
  pricing TEXT, -- JSON object with tiers
  seo TEXT, -- JSON {title,description,keywords:[]}
  is_published INTEGER DEFAULT 0,
  published_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_service_pages_slug_per_service
ON service_pages(service_slug, slug);

CREATE INDEX IF NOT EXISTS idx_service_pages_service_slug
ON service_pages(service_slug);

CREATE TABLE IF NOT EXISTS service_page_summaries (
  id TEXT PRIMARY KEY,
  service_slug TEXT NOT NULL,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  summary TEXT,
  hero_image TEXT,
  is_published INTEGER DEFAULT 0,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_service_page_summaries_slug_per_service
ON service_page_summaries(service_slug, slug);

CREATE INDEX IF NOT EXISTS idx_service_page_summaries_service_slug
ON service_page_summaries(service_slug);

CREATE TABLE IF NOT EXISTS service_categories (
  id TEXT PRIMARY KEY,
  service_slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  short_description TEXT,
  hero_summary TEXT,
  hero_image TEXT,
  stats TEXT, -- JSON array of {label,value}
  featured_posts TEXT, -- JSON array of post slugs/ids
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_service_categories_slug
ON service_categories(slug);
