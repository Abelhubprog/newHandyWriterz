export interface ServiceCategoryRecord {
  id: string;
  serviceSlug: string;
  name: string;
  slug: string;
  shortDescription?: string;
  heroSummary?: string;
  heroImage?: string;
  stats?: Array<{ label: string; value: string }>;
  featuredPosts?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ServicePageRecord {
  id: string;
  serviceSlug: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  heroImage?: string;
  sections?: Array<{
    id: string;
    title: string;
    summary?: string;
    content: string;
    media?: {
      type: 'image' | 'video';
      url: string;
      caption?: string;
    };
  }>;
  stats?: Array<{ label: string; value: string }>;
  faq?: Array<{ question: string; answer: string }>;
  pricing?: {
    tiers: Array<{
      id: string;
      name: string;
      price: string;
      description: string;
      features: string[];
      ctaLabel?: string;
    }>;
  };
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  isPublished: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ServicePageSummary {
  id: string;
  serviceSlug: string;
  title: string;
  slug: string;
  summary: string;
  heroImage?: string;
  isPublished: boolean;
  updatedAt: string;
}
