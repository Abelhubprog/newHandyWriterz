import databaseService from './databaseService';
import type { Post, Category } from '../types/content';

export interface ServicePost extends Post {
  serviceType: string;
  isFeatured: boolean;
  status: 'draft' | 'published' | 'archived';
  publishedAt?: string;
  updatedAt: string;
  createdAt: string;
  authorId: string;
  viewCount: number;
  shareCount: number;
  seoTitle?: string;
  seoDescription?: string;
  featuredImage?: string;
  categorySlug?: string;
  categoryLabel?: string;
}

export interface ServiceContentStats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalViews: number;
  totalLikes: number;
  totalComments: number;
  topCategories: Array<{ name: string; count: number }>;
  recentActivity: Array<{
    type: 'post_created' | 'post_published' | 'comment_added';
    timestamp: string;
    title: string;
    author: string;
  }>;
}

const FALLBACK_IMAGE = '/images/placeholders/article-cover.jpg';

const parseTagList = (value: unknown): string[] => {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value.map((entry) => String(entry)).filter(Boolean);
  }

  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) {
        return parsed.map((entry) => String(entry)).filter(Boolean);
      }
    } catch {
      // fallthrough to comma separated parsing
    }

    return value
      .split(',')
      .map((entry) => entry.trim())
      .filter(Boolean);
  }

  return [];
};

const computeReadTime = (content: string | undefined): number => {
  if (!content) return 5;
  const words = content
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
  return Math.max(2, Math.round(words.length / 200));
};

const toBoolean = (value: unknown): boolean => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'number') return value !== 0;
  if (typeof value === 'string') return value.toLowerCase() === 'true' || value === '1';
  return false;
};

const getCategoryLookup = async () => {
  const categories = await databaseService.getCategories();
  const lookup = new Map<string, Category>();

  (categories || []).forEach((category: any) => {
    const key = category.id || category.slug;
    if (key) {
      lookup.set(String(key), {
        id: String(category.id || category.slug || key),
        name: category.name || category.title || 'General',
        slug: category.slug || String(key).toLowerCase(),
        count: category.count || 0,
        description: category.description,
        color: category.color,
      });
    }
  });

  return lookup;
};

const resolveServiceRecord = async (serviceSlug: string) => {
  const services = await databaseService.getServices();
  return (services || []).find((service: any) => service.slug === serviceSlug) || null;
};

const resolveServiceSlugById = async (serviceId: string | undefined | null) => {
  if (!serviceId) return null;
  const services = await databaseService.getServices();
  const match = (services || []).find((service: any) => String(service.id) === String(serviceId));
  return match?.slug || null;
};

const mapPostRecord = (
  record: any,
  serviceSlug: string,
  categories: Map<string, Category>
): ServicePost => {
  const categoryId = record.category_id || record.category || record.categoryId;
  const categoryInfo = (categoryId && categories.get(String(categoryId))) || null;
  const categoryLabel = categoryInfo?.name || record.category || 'Adult Health';
  const categorySlug = categoryInfo?.slug || (typeof record.category === 'string' ? record.category : 'general');

  return {
    id: String(record.id),
    title: record.title || 'Untitled article',
    slug: record.slug || `post-${record.id}`,
    excerpt: record.excerpt || '',
    content: record.content || '',
    author: {
      id: record.author_id || 'admin',
      name: record.author_name || 'HandyWriterz Editorial',
      avatarUrl: record.author_avatar || undefined,
    },
    authorId: record.author_id || 'admin',
    category: categoryLabel,
    categorySlug,
    categoryLabel,
    tags: parseTagList(record.tags),
    status: (record.status as ServicePost['status']) || 'draft',
    publishedAt: record.published_at || record.created_at || undefined,
    readTime: computeReadTime(record.content),
    featuredImage: record.featured_image || FALLBACK_IMAGE,
    likes: Number(record.likes || record.likes_count || 0),
    comments: Number(record.comments || record.comments_count || 0),
    userHasLiked: false,
    serviceType: serviceSlug,
    isFeatured: toBoolean(record.is_featured || record.featured),
    viewCount: Number(record.view_count || 0),
    shareCount: Number(record.share_count || 0),
    createdAt: record.created_at || new Date().toISOString(),
    updatedAt: record.updated_at || record.created_at || new Date().toISOString(),
    seoTitle: record.seo_title || record.title,
    seoDescription: record.seo_description || record.excerpt,
  };
};

const applySearchFilter = (records: any[], query?: string) => {
  if (!query) return records;
  const normalized = query.toLowerCase();
  return records.filter((record) => {
    const inTitle = (record.title || '').toLowerCase().includes(normalized);
    const inContent = (record.content || '').toLowerCase().includes(normalized);
    const inTags = parseTagList(record.tags).some((tag) => tag.toLowerCase().includes(normalized));
    return inTitle || inContent || inTags;
  });
};

const applyCategoryFilter = (records: any[], categorySlug?: string) => {
  if (!categorySlug || categorySlug === 'all') return records;
  const target = categorySlug.toLowerCase();
  return records.filter((record) => {
    const rawCategory = String(record.category || record.category_slug || '').toLowerCase();
    const rawCategoryId = String(record.category_id || '').toLowerCase();
    const tags = parseTagList(record.tags).map((tag) => tag.toLowerCase());
    return rawCategory === target || rawCategoryId === target || tags.includes(target);
  });
};

const sliceForPagination = (records: any[], limit?: number, offset?: number) => {
  if (typeof limit !== 'number') {
    return records;
  }
  const start = Math.max(0, offset || 0);
  return records.slice(start, start + limit);
};

export class ServiceContentService {
  static async getServicePosts(
    serviceSlug: string,
    options: {
      status?: 'all' | 'published' | 'draft' | 'archived';
      category?: string;
      featured?: boolean;
      limit?: number;
      offset?: number;
      search?: string;
    } = {}
  ): Promise<{ posts: ServicePost[]; total: number }> {
    const serviceRecord = await resolveServiceRecord(serviceSlug);
    const categoriesLookup = await getCategoryLookup();

    let records = await databaseService.getPosts({
      serviceSlug,
      status: options.status && options.status !== 'all' ? options.status : undefined,
    });

    records = Array.isArray(records) ? records : [];

    if (options.featured) {
      records = records.filter((record) => toBoolean(record.is_featured || record.featured));
    }

    records = applyCategoryFilter(records, options.category);
    records = applySearchFilter(records, options.search);

    const total = records.length;

    if (options.limit) {
      records = sliceForPagination(records, options.limit, options.offset);
    }

    const posts = records.map((record) =>
      mapPostRecord(
        {
          ...record,
          service_id: record.service_id || serviceRecord?.id || serviceSlug,
        },
        serviceSlug,
        categoriesLookup
      )
    );

    return { posts, total };
  }

  static async getFeaturedPosts(serviceSlug: string, limit = 3): Promise<ServicePost[]> {
    const { posts } = await this.getServicePosts(serviceSlug, {
      status: 'published',
    });

    const featured = posts
      .filter((post) => post.isFeatured || (post.tags || []).includes('featured'))
      .slice(0, limit);

    if (featured.length >= limit) {
      return featured;
    }

    const supplemental = posts
      .filter((post) => !featured.includes(post))
      .slice(0, limit - featured.length);

    return [...featured, ...supplemental].slice(0, limit);
  }

  static async createServicePost(
    serviceSlug: string,
    postData: Omit<ServicePost, 'id' | 'createdAt' | 'updatedAt' | 'viewCount' | 'shareCount'>
  ): Promise<ServicePost | null> {
    const serviceRecord = await resolveServiceRecord(serviceSlug);
    const categoriesLookup = await getCategoryLookup();

    const payload = {
      title: postData.title,
      content: postData.content,
      excerpt: postData.excerpt || '',
      slug: postData.slug,
      status: postData.status || 'draft',
      featured_image: postData.featuredImage,
      author_id: postData.authorId,
      service_id: serviceRecord?.id || serviceSlug,
      category_id: postData.categorySlug || postData.category || undefined,
      seo_title: postData.seoTitle,
      seo_description: postData.seoDescription,
      tags: JSON.stringify(postData.tags || []),
    };

    const created = await databaseService.createPost(payload as any);
    if (!created) return null;

    return mapPostRecord(created, serviceSlug, categoriesLookup);
  }

  static async updateServicePost(
    postId: string,
    updates: Partial<ServicePost>
  ): Promise<ServicePost | null> {
    const categoriesLookup = await getCategoryLookup();

    const payload: Record<string, any> = {};
    if (updates.title !== undefined) payload.title = updates.title;
    if (updates.content !== undefined) payload.content = updates.content;
    if (updates.excerpt !== undefined) payload.excerpt = updates.excerpt;
    if (updates.status) payload.status = updates.status;
    if (updates.featuredImage !== undefined) payload.featured_image = updates.featuredImage;
    if (updates.seoTitle !== undefined) payload.seo_title = updates.seoTitle;
    if (updates.seoDescription !== undefined) payload.seo_description = updates.seoDescription;
    if (updates.tags !== undefined) payload.tags = JSON.stringify(updates.tags);
    if (updates.categorySlug || updates.category) {
      payload.category_id = updates.categorySlug || updates.category;
    }

    const updated = await databaseService.updatePost(postId, payload);
    if (!updated) return null;

    const derivedSlug = (
      updates.serviceType ||
      updated.service_type ||
      (await resolveServiceSlugById(updated.service_id)) ||
      'adult-health-nursing'
    );

    return mapPostRecord(updated, derivedSlug, categoriesLookup);
  }

  static async deleteServicePost(postId: string): Promise<boolean> {
    return databaseService.delete('posts', postId);
  }

  static async publishPost(postId: string): Promise<ServicePost | null> {
    const categoriesLookup = await getCategoryLookup();
    const updated = await databaseService.updatePost(postId, {
      status: 'published',
    });

    if (!updated) return null;

    const derivedSlug = (
      updated.service_type ||
      (await resolveServiceSlugById(updated.service_id)) ||
      'adult-health-nursing'
    );

    return mapPostRecord(updated, derivedSlug, categoriesLookup);
  }

  static async getServiceStats(serviceSlug: string): Promise<ServiceContentStats> {
    const categoriesLookup = await getCategoryLookup();
    const { posts } = await this.getServicePosts(serviceSlug, { status: 'all' });

    const totalPosts = posts.length;
    const publishedPosts = posts.filter((post) => post.status === 'published').length;
    const draftPosts = posts.filter((post) => post.status === 'draft').length;
    const totalViews = posts.reduce((acc, post) => acc + (post.viewCount || 0), 0);
    const totalLikes = posts.reduce((acc, post) => acc + (post.likes || 0), 0);
    const totalComments = posts.reduce((acc, post) => acc + (post.comments || 0), 0);

    const categoryCounts = new Map<string, { name: string; count: number }>();
    posts.forEach((post) => {
      const slug = post.categorySlug || post.category || 'general';
      const categoryInfo = categoriesLookup.get(slug) || categoriesLookup.get(post.category || '') || null;
      const name = categoryInfo?.name || post.category || 'General';
      const current = categoryCounts.get(slug) || { name, count: 0 };
      current.count += 1;
      categoryCounts.set(slug, current);
    });

    const topCategories = Array.from(categoryCounts.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    const recentActivity = posts
      .slice()
      .sort((a, b) => {
        const aTime = new Date(a.updatedAt || a.createdAt || 0).getTime();
        const bTime = new Date(b.updatedAt || b.createdAt || 0).getTime();
        return bTime - aTime;
      })
      .slice(0, 5)
      .map((post) => ({
        type: (post.status === 'published' ? 'post_published' : 'post_created') as 'post_created' | 'post_published',
        timestamp: post.updatedAt || post.createdAt || new Date().toISOString(),
        title: post.title,
        author: post.author?.name || 'HandyWriterz Editorial',
      }));

    return {
      totalPosts,
      publishedPosts,
      draftPosts,
      totalViews,
      totalLikes,
      totalComments,
      topCategories,
      recentActivity,
    };
  }

  static async getServiceCategories(serviceSlug: string): Promise<Category[]> {
    const categoriesLookup = await getCategoryLookup();
    const { posts } = await this.getServicePosts(serviceSlug, { status: 'published' });

    const counts = new Map<string, { entry: Category; count: number }>();

    posts.forEach((post) => {
      const slug = post.categorySlug || post.category || 'general';
      const baseCategory = categoriesLookup.get(slug) || {
        id: slug,
        name: post.category || 'General',
        slug,
        count: 0,
      };

      const current = counts.get(slug) || { entry: baseCategory, count: 0 };
      current.count += 1;
      counts.set(slug, current);
    });

    return Array.from(counts.values())
      .map(({ entry, count }) => ({
        ...entry,
        count,
      }))
      .sort((a, b) => b.count - a.count);
  }

  static async getServiceTags(serviceSlug: string, limit = 20): Promise<string[]> {
    const { posts } = await this.getServicePosts(serviceSlug, { status: 'published' });
    const frequency = new Map<string, number>();

    posts.forEach((post) => {
      (post.tags || []).forEach((tag) => {
        const lower = tag.toLowerCase();
        frequency.set(lower, (frequency.get(lower) || 0) + 1);
      });
    });

    return Array.from(frequency.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([tag]) => tag);
  }

  static async searchPosts(
    query: string,
    serviceSlug?: string,
    options: {
      limit?: number;
      offset?: number;
    } = {}
  ): Promise<{ posts: ServicePost[]; total: number }> {
    const categoriesLookup = await getCategoryLookup();
    const baseRecords = await databaseService.getPosts(serviceSlug ? { serviceSlug } : {});
    const records = Array.isArray(baseRecords) ? baseRecords : [];

    const filtered = applySearchFilter(records, query);
    const total = filtered.length;
    const sliced = sliceForPagination(filtered, options.limit, options.offset);

    const services = await databaseService.getServices();
    const serviceLookup = new Map<string, string>();
    (services || []).forEach((service: any) => {
      if (service?.id) {
        serviceLookup.set(String(service.id), service.slug);
      }
    });

    const posts = sliced.map((record) => {
      const derivedSlug = (
        serviceSlug ||
        record.service_type ||
        serviceLookup.get(String(record.service_id)) ||
        'adult-health-nursing'
      );
      return mapPostRecord(record, derivedSlug, categoriesLookup);
    });

    return { posts, total };
  }

  static async incrementViewCount(postId: string): Promise<void> {
    await databaseService.incrementViewCount(postId);
  }

  static async togglePostLike(postId: string, _userId: string): Promise<boolean> {
    // In mock mode, simply return true to indicate the toggle succeeded.
    // Persistent like state should be handled server-side when available.
    return true;
  }
}
