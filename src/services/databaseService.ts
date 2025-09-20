/**
 * Database Service - Unified interface for Cloudflare D1 with fallback to mock data
 *
 * @file src/services/databaseService.ts
 */

import { cloudflare } from '@/lib/cloudflareClient';
// Mock data for development/fallback
const mockData = {
  posts: [
    {
      id: 'post-1',
      title: 'Adult Health Nursing: Comprehensive Care Approaches',
      content: 'Adult health nursing focuses on comprehensive care approaches...',
      excerpt: 'Explore comprehensive care approaches in adult health nursing.',
      slug: 'adult-health-nursing-comprehensive-care',
      status: 'published',
      featured_image: '/images/adult-health-nursing.jpg',
      author_id: 'admin-user-1',
      service_id: 'service-1',
      category_id: 'cat-1',
      seo_title: 'Adult Health Nursing: Comprehensive Care Approaches',
      seo_description: 'Learn about comprehensive care approaches in adult health nursing.',
      tags: '["nursing", "adult health", "patient care"]',
      view_count: 150,
      published_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 'post-2',
      title: 'Child Nursing: Specialized Pediatric Care',
      content: 'Child nursing requires specialized knowledge and skills...',
      excerpt: 'Discover specialized approaches to pediatric nursing care.',
      slug: 'child-nursing-specialized-pediatric-care',
      status: 'published',
      featured_image: '/images/child-nursing.jpg',
      author_id: 'admin-user-1',
      service_id: 'service-2',
      category_id: 'cat-1',
      seo_title: 'Child Nursing: Specialized Pediatric Care',
      seo_description: 'Learn about specialized pediatric care in child nursing.',
      tags: '["nursing", "pediatric", "child care"]',
      view_count: 89,
      published_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 'post-3',
      title: 'Mental Health Nursing: Holistic Patient Support',
      content: 'Mental health nursing provides holistic support...',
      excerpt: 'Understanding holistic approaches in mental health nursing.',
      slug: 'mental-health-nursing-holistic-support',
      status: 'published',
      featured_image: '/images/mental-health-nursing.jpg',
      author_id: 'admin-user-1',
      service_id: 'service-3',
      category_id: 'cat-1',
      seo_title: 'Mental Health Nursing: Holistic Patient Support',
      seo_description: 'Explore holistic approaches in mental health nursing.',
      tags: '["nursing", "mental health", "patient support"]',
      view_count: 234,
      published_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ],
  profiles: [
    {
      id: 'admin-profile-1',
      user_id: 'admin-user-1',
      display_name: 'HandyWriterz Admin',
      full_name: 'Administrator',
      avatar_url: '/images/admin-avatar.jpg',
      role: 'admin',
      status: 'active',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ],
  services: [
    {
      id: 'service-1',
      title: 'Adult Health Nursing',
      description: 'Comprehensive adult health nursing services',
      slug: 'adult-health-nursing',
      icon: '🩺',
      price_range: '$20-100',
      category: 'Healthcare',
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 'service-2',
      title: 'Child Nursing',
      description: 'Specialized pediatric nursing care',
      slug: 'child-nursing',
      icon: '👶',
      price_range: '$25-120',
      category: 'Healthcare',
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 'service-3',
      title: 'Mental Health Nursing',
      description: 'Mental health and psychiatric nursing',
      slug: 'mental-health-nursing',
      icon: '🧠',
      price_range: '$30-150',
      category: 'Healthcare',
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ],
  categories: [
    {
      id: 'cat-1',
      name: 'Healthcare',
      description: 'Healthcare and nursing content',
      slug: 'healthcare',
      parent_id: null,
      sort_order: 1,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ]
};

class DatabaseService {
  private useMockData: boolean;
  private mockTables: Record<string, any[]>;

  constructor() {
    // Use mock data if Cloudflare is not configured
    this.useMockData = !import.meta.env.VITE_CLOUDFLARE_DATABASE_URL;
    this.mockTables = {
      posts: mockData.posts,
      service_pages: [],
      service_page_summaries: [],
      service_categories: [],
    };

    if (this.useMockData && import.meta.env.DEV) {
      // Only show warning once in development
      if (!globalThis.__mockDataWarningShown) {
        globalThis.__mockDataWarningShown = true;
      }
    }
  }

  private getMockTable(table: string): any[] {
    if (!this.mockTables[table]) {
      this.mockTables[table] = [];
    }
    return this.mockTables[table];
  }

  async getPosts(filters: {
    serviceSlug?: string;
    categorySlug?: string;
    status?: string;
    limit?: number;
  } = {}): Promise<any[]> {
    if (this.useMockData) {
      let posts = [...this.getMockTable('posts')];

      if (filters.status) {
        posts = posts.filter(p => p.status === filters.status);
      }

      if (filters.serviceSlug) {
        const service = mockData.services.find(s => s.slug === filters.serviceSlug);
        if (service) {
          posts = posts.filter(p => p.service_id === service.id);
        }
      }

      if (filters.limit) {
        posts = posts.slice(0, filters.limit);
      }

      return posts;
    }

    try {
      // Build SQL query based on filters
      let sql = `
        SELECT p.*, pr.display_name as author_name, pr.avatar_url as author_avatar,
               s.title as service_title, c.name as category_name
        FROM posts p
        LEFT JOIN profiles pr ON p.author_id = pr.user_id
        LEFT JOIN services s ON p.service_id = s.id
        LEFT JOIN categories c ON p.category_id = c.id
        WHERE 1=1
      `;
      const params: any[] = [];

      if (filters.status) {
        sql += ` AND p.status = ?`;
        params.push(filters.status);
      }

      if (filters.serviceSlug) {
        sql += ` AND s.slug = ?`;
        params.push(filters.serviceSlug);
      }

      if (filters.categorySlug) {
        sql += ` AND c.slug = ?`;
        params.push(filters.categorySlug);
      }

      sql += ` ORDER BY p.published_at DESC`;

      if (filters.limit) {
        sql += ` LIMIT ?`;
        params.push(filters.limit);
      }

      // For complex queries with joins, we need a direct DB query
      // Since cloudflare client doesn't support complex joins easily,
      // we'll simplify and get posts directly with basic filtering
      let query = cloudflare.from('posts');

      if (filters.status) {
        query = query.eq('status', filters.status);
      }

      if (filters.limit) {
        query = query.limit(filters.limit);
      }

      query = query.order('published_at', false);

      const result = await query.execute();
      return result.data || [];
    } catch (error) {
      return this.getPosts(filters);
    }
  }

  async getPostBySlug(slug: string): Promise<any | null> {
    if (this.useMockData) {
      const postsTable = this.getMockTable('posts');
      return postsTable.find(p => p.slug === slug) || null;
    }

    try {
      const sql = `
        SELECT p.*, pr.display_name as author_name, pr.avatar_url as author_avatar,
               s.title as service_title, c.name as category_name
        FROM posts p
        LEFT JOIN profiles pr ON p.author_id = pr.user_id
        LEFT JOIN services s ON p.service_id = s.id
        LEFT JOIN categories c ON p.category_id = c.id
        WHERE p.slug = ?
      `;

      const result = await cloudflare.from('posts').eq('slug', slug).single();
      return result.data;
    } catch (error) {
      const postsTable = this.getMockTable('posts');
      return postsTable.find(p => p.slug === slug) || null;
    }
  }

  async createPost(data: {
    title: string;
    content: string;
    excerpt?: string;
    slug: string;
    status?: string;
    featured_image?: string;
    author_id: string;
    service_id?: string;
    category_id?: string;
    seo_title?: string;
    seo_description?: string;
    tags?: string;
  }): Promise<any> {
    if (this.useMockData) {
      const postsTable = this.getMockTable('posts');
      const newPost = {
        id: `post-${Date.now()}`,
        title: data.title,
        content: data.content,
        excerpt: data.excerpt || '',
        slug: data.slug,
        status: data.status || 'draft',
        featured_image: data.featured_image || '',
        author_id: data.author_id,
        service_id: data.service_id || '',
        category_id: data.category_id || '',
        seo_title: data.seo_title || '',
        seo_description: data.seo_description || '',
        tags: data.tags || '[]',
        view_count: 0,
        published_at: data.status === 'published' ? new Date().toISOString() : null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      postsTable.push(newPost);
      return newPost;
    }

    try {
      const postData = {
        id: `post-${Date.now()}`,
        title: data.title,
        content: data.content,
        excerpt: data.excerpt || '',
        slug: data.slug,
        status: data.status || 'draft',
        featured_image: data.featured_image || '',
        author_id: data.author_id,
        service_id: data.service_id || '',
        category_id: data.category_id || '',
        seo_title: data.seo_title || '',
        seo_description: data.seo_description || '',
        tags: data.tags || '[]',
        view_count: 0,
        published_at: data.status === 'published' ? new Date().toISOString() : null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      const result = await cloudflare.insert('posts', postData).execute();
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  async updatePost(id: string, data: Partial<{
    title: string;
    content: string;
    excerpt: string;
    status: string;
    featured_image: string;
    seo_title: string;
    seo_description: string;
    tags: string;
  }>): Promise<any> {
    if (this.useMockData) {
      const postsTable = this.getMockTable('posts');
      const index = postsTable.findIndex(p => p.id === id);
      if (index === -1) throw new Error('Post not found');

      postsTable[index] = {
        ...postsTable[index],
        ...data,
        updated_at: new Date().toISOString()
      };

      return postsTable[index];
    }

    try {
      const updateData = {
        ...data,
        updated_at: new Date().toISOString()
      };

      const result = await cloudflare.from('posts').eq('id', id).update(updateData).execute();
      if (result.error) throw new Error(result.error);
      return updateData;
    } catch (error) {
      throw error;
    }
  }

    // Update order status (admin only)
    async updateOrderStatus(orderId: string, status: string, paymentStatus?: string, isAdmin = false): Promise<any> {
      if (this.useMockData) {
        // no-op in mock mode
        return { order: { id: orderId, status, payment_status: paymentStatus || 'unpaid' }, error: null };
      }

      try {
        const updates: any = { status };
        if (paymentStatus) updates.payment_status = paymentStatus;

  const result = await cloudflare.from('orders').eq('id', orderId).update(updates).execute();
  if ((result as any).error) throw (result as any).error;
  return { order: (result as any).data, error: null };
      } catch (error) {
        return { order: null, error };
      }
    }

    // Update order metadata safely
    async updateOrderMetadata(orderId: string, metadata: Record<string, any>): Promise<any> {
      if (this.useMockData) {
        return { success: true };
      }

      try {
  const result = await cloudflare.from('orders').eq('id', orderId).update({ metadata }).execute();
  if ((result as any).error) throw (result as any).error;
  return { success: true, data: (result as any).data };
      } catch (error) {
        return { success: false, error };
      }
    }

  async getServices(): Promise<any[]> {
    if (this.useMockData) {
      return mockData.services;
    }

    try {
      const result = await cloudflare.from('services').eq('is_active', true).execute();
      return result.data || [];
    } catch (error) {
      return mockData.services;
    }
  }

  async getCategories(): Promise<any[]> {
    if (this.useMockData) {
      return mockData.categories;
    }

    try {
      const result = await cloudflare.from('categories').eq('is_active', true).execute();
      return result.data || [];
    } catch (error) {
      return mockData.categories;
    }
  }

  async incrementViewCount(postId: string): Promise<void> {
    if (this.useMockData) {
      const postsTable = this.getMockTable('posts');
      const post = postsTable.find(p => p.id === postId);
      if (post) {
        post.view_count++;
      }
      return;
    }

    try {
      // For increment operations, we need to get current value first
      const current = await cloudflare.from('posts').eq('id', postId).select('view_count').single();
      if (current.data) {
        await cloudflare.from('posts').eq('id', postId).update({
          view_count: (current.data.view_count || 0) + 1
        }).execute();
      }
    } catch (error) {
    }
  }

  // Legacy methods for backward compatibility
  async list(table: string, filters: Record<string, any> = {}): Promise<any[]> {
    if (this.useMockData) {
      const tableData = [...this.getMockTable(table)];
      const entries = Object.entries(filters).filter(([, value]) => value !== undefined && value !== null);
      if (entries.length === 0) {
        return tableData;
      }
      return tableData.filter((row) => entries.every(([key, value]) => String(row[key]) === String(value)));
    }

    let query = cloudflare.from(table).select('*');
    for (const [key, value] of Object.entries(filters)) {
      if (value !== undefined && value !== null) {
        query = query.eq(key, value);
      }
    }

    const result = await query.execute();
    return result.data || [];
  }

  async getBySlug(table: string, slug: string, slugColumn: string = 'slug', extraFilters: Record<string, any> = {}): Promise<any | null> {
    const filters = { ...extraFilters, [slugColumn]: slug };

    if (this.useMockData) {
      const tableData = this.getMockTable(table);
      return tableData.find((row) =>
        Object.entries(filters).every(([key, value]) => String(row[key]) === String(value))
      ) || null;
    }

    let query = cloudflare.from(table).select('*').eq(slugColumn, slug);
    for (const [key, value] of Object.entries(extraFilters)) {
      if (value !== undefined && value !== null) {
        query = query.eq(key, value);
      }
    }

    const result = await query.single();
    return result.data;
  }

  async upsert(table: string, data: Record<string, any>, conflictColumns: string[] = []): Promise<any> {
    if (this.useMockData) {
      const tableData = this.getMockTable(table);
      let index = -1;

      if (conflictColumns.length > 0) {
        index = tableData.findIndex((row) =>
          conflictColumns.every((column) => String(row[column]) === String(data[column]))
        );
      } else if (data.id) {
        index = tableData.findIndex((row) => String(row.id) === String(data.id));
      }

      if (index >= 0) {
        const merged = { ...tableData[index], ...data, updated_at: data.updated_at || new Date().toISOString() };
        tableData[index] = merged;
        return merged;
      }

      const stored = {
        ...data,
        id: data.id || `${table}-mock-${Date.now()}`,
        created_at: data.created_at || new Date().toISOString(),
        updated_at: data.updated_at || new Date().toISOString(),
      };
      tableData.push(stored);
      return stored;
    }

    const result = await cloudflare.upsert(table, data).execute();
    if (result.error) {
      throw new Error(result.error);
    }

    return result.data;
  }

  async create(table: string, data: any) {
    if (table === 'posts') {
      return this.createPost(data);
    }
    // Add other table handlers as needed
    throw new Error(`Create operation not implemented for table: ${table}`);
  }

  async read(table: string, query: any = {}) {
    if (table === 'posts') {
      return this.getPosts(query);
    }
    // Add other table handlers as needed
    throw new Error(`Read operation not implemented for table: ${table}`);
  }

  async update(table: string, id: string, data: any) {
    if (table === 'posts') {
      return this.updatePost(id, data);
    }
    // Add other table handlers as needed
    throw new Error(`Update operation not implemented for table: ${table}`);
  }

  async delete(table: string, criteria: string | Record<string, any>): Promise<boolean> {
    if (this.useMockData) {
      const tableData = this.getMockTable(table);

      if (typeof criteria === 'string') {
        const index = tableData.findIndex((row) => String(row.id) === String(criteria));
        if (index !== -1) {
          tableData.splice(index, 1);
          return true;
        }
        return false;
      }

      const entries = Object.entries(criteria).filter(([, value]) => value !== undefined && value !== null);
      let removed = false;
      for (let index = tableData.length - 1; index >= 0; index -= 1) {
        const row = tableData[index];
        const matches = entries.every(([key, value]) => String(row[key]) === String(value));
        if (matches) {
          tableData.splice(index, 1);
          removed = true;
        }
      }
      return removed;
    }

    let query = cloudflare.from(table);
    if (typeof criteria === 'string') {
      await query.eq('id', criteria).delete();
      return true;
    }

    for (const [key, value] of Object.entries(criteria)) {
      if (value !== undefined && value !== null) {
        query = query.eq(key, value);
      }
    }

    await query.delete();
    return true;
  }
}


export default new DatabaseService();
