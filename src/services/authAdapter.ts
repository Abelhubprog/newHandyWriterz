import { useAuth } from '@/hooks/useAuth';
import database from '@/lib/d1Client';
import type { User } from '@/types/user';

/**
 * Auth Adapter
 * Bridges the gap between the authentication provider (Clerk) and the application's database (D1).
 * This ensures that user data is consistent across both systems.
 */
export const authAdapter = {
  /**
   * Get the current user from the auth provider and sync with the database.
   * @returns The current user, or null if not authenticated.
   */
  async getCurrentUser(): Promise<User | null> {
    const { user: authUser } = useAuth();

    if (!authUser) {
      return null;
    }

    try {
      // Check if user exists in the database
      let { data: dbUser, error } = await database
        .from('users')
        .select('*')
        .eq('id', authUser.id)
        .single();

      // If user doesn't exist, create a new record
      if (!dbUser || error) {
        const newUser = {
          id: authUser.id,
          email: authUser.email,
          display_name: authUser.displayName,
          role: 'user', // Default role
        };

        const { data, error: insertError } = await database
          .from('users')
          .insert([newUser])
          .single();

        if (insertError) {
          throw new Error('Failed to create user in database');
        }
        dbUser = data;
      }

      return {
        id: dbUser.id,
        email: dbUser.email,
        displayName: dbUser.display_name,
        role: dbUser.role,
      };
    } catch (error) {
      console.error('Error syncing user with database:', error);
      return null;
    }
  },

  /**
   * Sign out the current user.
   */
  async signOut(): Promise<void> {
    const { signOut } = useAuth();
    await signOut();
  },

  /**
   * Check if the current user has a specific role.
   * @param role - The role to check for.
   * @returns True if the user has the role, false otherwise.
   */
  async hasRole(role: string): Promise<boolean> {
    const user = await this.getCurrentUser();
    return user?.role === role;
  },

  /**
   * Get the user's profile from the database.
   * @param userId - The ID of the user.
   * @returns The user's profile, or null if not found.
   */
  async getUserProfile(userId: string): Promise<any | null> {
    try {
      const { data, error } = await database
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) {
        return null;
      }
      return data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  },
};

export default authAdapter;
