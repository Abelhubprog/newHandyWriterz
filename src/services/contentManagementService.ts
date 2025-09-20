import databaseService from '@/services/databaseService';

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    role: string;
  };
  category: string;
  tags: string[];
  status: 'published' | 'draft' | 'scheduled';
  publishedAt: string;
  readTime: number;
  featuredImage: string;
  likes: number;
  comments: number;
  userHasLiked: boolean;
  views: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface Comment {
  id: string;
  postId: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
  createdAt: string;
  likes: number;
  userHasLiked: boolean;
}

export class ContentManagementService {

  // Fetch posts for a specific service
  async getPostsByService(serviceType: string, limit: number = 10, offset: number = 0, category?: string): Promise<Post[]> {
    try {
      const filters: any = { status: 'published', limit: limit + offset };
      if (serviceType) filters.serviceSlug = serviceType;
      const rows = await databaseService.getPosts(filters);

      const sliced = rows.slice(offset, offset + limit);

      const postsWithAuthors = sliced.map((post: any) => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt || '',
        content: post.content,
        author: {
          id: post.author_id || 'unknown',
          name: post.author_name || 'Unknown Author',
          avatar: post.author_avatar || '/placeholder-avatar.png',
          role: post.author_role || 'user'
        },
        category: post.category || post.category_name || '',
        tags: Array.isArray(post.tags) ? post.tags : JSON.parse(post.tags || '[]'),
        status: post.status,
        publishedAt: post.published_at || post.created_at,
        readTime: Math.ceil((post.content || '').split(' ').length / 200),
        featuredImage: post.featured_image || '/placeholder-image.jpg',
        likes: post.likes_count || 0,
        comments: post.comments_count || 0,
        userHasLiked: false, // Client-side, can be updated via local state
        views: post.view_count || post.views_count || 0
      }));

      return postsWithAuthors;
    } catch (error) {
      console.error('Error fetching posts by service:', error);
      return []; // Fallback to empty or mocks if needed
    }
  }

  // Fetch featured posts for a service
  async getFeaturedPosts(serviceType: string, limit: number = 3): Promise<Post[]> {
    try {
      const rows = await databaseService.getPosts({ serviceSlug: serviceType, status: 'published', limit: 100 });
      const featured = rows.filter((p: any) => p.featured === true).slice(0, limit);

      const postsWithAuthors = featured.map((post: any) => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt || '',
        content: post.content,
        author: {
          id: post.author_id || 'unknown',
          name: post.author_name || 'Unknown Author',
          avatar: post.author_avatar || '/placeholder-avatar.png',
          role: post.author_role || 'user'
        },
        category: post.category || post.category_name || '',
        tags: Array.isArray(post.tags) ? post.tags : JSON.parse(post.tags || '[]'),
        status: post.status,
        publishedAt: post.published_at || post.created_at,
        readTime: Math.ceil((post.content || '').split(' ').length / 200),
        featuredImage: post.featured_image || '/placeholder-image.jpg',
        likes: post.likes_count || 0,
        comments: post.comments_count || 0,
        userHasLiked: false,
        views: post.view_count || post.views_count || 0
      }));

      return postsWithAuthors;
    } catch (error) {
      console.error('Error fetching featured posts:', error);
      return [];
    }
  }

  // Fetch categories for a service
  async getCategories(serviceType: string): Promise<Category[]> {
    try {
      const rows = await databaseService.getPosts({ serviceSlug: serviceType, status: 'published', limit: 500 });
      const counts = new Map<string, number>();
      rows.forEach((p: any) => {
        const cat = (p.category || p.category_name || 'General').toString();
        counts.set(cat, (counts.get(cat) || 0) + 1);
      });
      return Array.from(counts.entries()).map(([name, count]) => ({
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name,
        slug: name.toLowerCase().replace(/\s+/g, '-'),
        count
      })).sort((a,b)=>b.count-a.count);
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }

  // Get popular tags for a service
  async getPopularTags(serviceType: string): Promise<string[]> {
    try {
      const rows = await databaseService.getPosts({ serviceSlug: serviceType, status: 'published', limit: 500 });
      const freq = new Map<string, number>();
      rows.forEach((p: any) => {
        const tags: string[] = Array.isArray(p.tags) ? p.tags : JSON.parse(p.tags || '[]');
        tags.forEach((t) => freq.set(t, (freq.get(t) || 0) + 1));
      });
      return Array.from(freq.entries()).sort((a,b)=>b[1]-a[1]).slice(0,10).map(([t])=>t);
    } catch (error) {
      console.error('Error fetching popular tags:', error);
      return [];
    }
  }

  // Fetch comments for a post
  async getCommentsByPost(postId: string): Promise<Comment[]> {
    try {
      const results = await databaseService.list('comments', { post_id: postId });
      const commentsWithAuthors = await Promise.all(results.map(async (comment: any) => {
        const authors = await databaseService.list('authors', { id: comment.author_id });
        const author = authors[0] || { id: 'unknown', name: 'Anonymous', avatar: '/placeholder-avatar.png', role: 'user' };
        return {
          id: comment.id,
          postId: comment.post_id,
          author,
          content: comment.content,
          createdAt: comment.created_at,
          likes: comment.likes_count || 0,
          userHasLiked: false
        };
      }));
      return commentsWithAuthors;
    } catch (error) {
      console.error('Error fetching comments:', error);
      return [];
    }
  }

  // Create a new comment
  async createComment(postId: string, content: string, authorId: string): Promise<Comment> {
    try {
      const created = await databaseService.create('comments' as any, {
        post_id: postId,
        author_id: authorId,
        content,
        created_at: new Date().toISOString(),
      });
      const authors = await databaseService.list('authors', { id: created.author_id });
      const author = authors[0] || { id: 'unknown', name: 'Anonymous', avatar: '/placeholder-avatar.png', role: 'user' };
      return {
        id: created.id,
        postId: created.post_id,
        author,
        content: created.content,
        createdAt: created.created_at,
        likes: 0,
        userHasLiked: false,
      };
    } catch (error) {
      console.error('Error creating comment:', error);
      throw error;
    }
  }

  // Update post (for likes, views, etc.)
  async updatePost(id: string, updates: Partial<Post>): Promise<void> {
    try {
      const updateData: any = {
        updated_at: new Date().toISOString()
      };

      if (updates.likes !== undefined) updateData.likes_count = updates.likes;
      if (updates.views !== undefined) updateData.views_count = updates.views;
      await databaseService.update('posts', id, updateData);
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  }

  // Delete post
  async deletePost(id: string): Promise<void> {
    try {
      const ok = await databaseService.delete('posts', id);
      if (!ok) throw new Error('Failed to delete post');
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  }
}

export const contentManagementService = new ContentManagementService();
