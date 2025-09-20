import type { OrganizationMembershipResource, UserResource } from '@clerk/types';

const ADMIN_ROLE_VALUES = new Set([
  'admin',
  'administrator',
  'super_admin',
  'superadmin',
  'owner',
  'founder',
  'moderator',
  'manager',
  'staff_admin',
]);

const ROLE_KEYS = ['role', 'roles', 'adminRole', 'admin_role', 'accessLevel', 'access_level'];
const ADMIN_FLAG_KEYS = ['isAdmin', 'is_admin', 'admin', 'isStaffAdmin'];

type MetadataRecord = Record<string, unknown> | null | undefined;

const normalizeRole = (value: unknown): string | null => {
  if (typeof value === 'string') {
    return value.trim().toLowerCase();
  }
  return null;
};

const extractRoles = (value: unknown): string[] => {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value
      .map((entry) => normalizeRole(entry))
      .filter((entry): entry is string => Boolean(entry));
  }

  const normalized = normalizeRole(value);
  return normalized ? [normalized] : [];
};

const metadataHasAdminRole = (metadata: MetadataRecord): boolean => {
  if (!metadata || typeof metadata !== 'object') {
    return false;
  }

  const record = metadata as Record<string, unknown>;

  for (const key of ROLE_KEYS) {
    if (record[key] !== undefined) {
      const roles = extractRoles(record[key]);
      if (roles.some((role) => ADMIN_ROLE_VALUES.has(role))) {
        return true;
      }
    }
  }

  for (const key of ADMIN_FLAG_KEYS) {
    const value = record[key];
    if (typeof value === 'boolean' && value) {
      return true;
    }
  }

  return false;
};

const membershipHasAdminRole = (
  membership: OrganizationMembershipResource | { role?: string } | undefined,
): boolean => {
  if (!membership) return false;
  const roleValue = normalizeRole(membership.role);
  return Boolean(roleValue && ADMIN_ROLE_VALUES.has(roleValue));
};

export const hasAdminRole = (user?: UserResource | null): boolean => {
  if (!user) return false;

  if (metadataHasAdminRole((user as any).publicMetadata)) return true;
  if (metadataHasAdminRole((user as any).privateMetadata as MetadataRecord)) return true;
  if (metadataHasAdminRole((user as any).unsafeMetadata as MetadataRecord)) return true;

  if (Array.isArray(user.organizationMemberships)) {
    if (user.organizationMemberships.some((membership) => membershipHasAdminRole(membership))) {
      return true;
    }
  }

  return false;
};

export const deriveUserRole = (user?: UserResource | null): 'admin' | 'user' => {
  return hasAdminRole(user) ? 'admin' : 'user';
};

export const getAdminRoleLabel = (user?: UserResource | null): string | null => {
  if (!user) return null;

  const sources: MetadataRecord[] = [
  (user as any).publicMetadata,
  (user as any).privateMetadata as MetadataRecord,
  (user as any).unsafeMetadata as MetadataRecord,
  ];

  for (const metadata of sources) {
    if (!metadata || typeof metadata !== 'object') continue;
    const record = metadata as Record<string, unknown>;

    for (const key of ROLE_KEYS) {
      const value = record[key];
      const roles = extractRoles(value);
      const adminRole = roles.find((role) => ADMIN_ROLE_VALUES.has(role));
      if (adminRole) {
        return adminRole;
      }
    }
  }

  if (Array.isArray(user.organizationMemberships)) {
    const membership = user.organizationMemberships.find((entry) => membershipHasAdminRole(entry));
    if (membership?.role) {
      return normalizeRole(membership.role);
    }
  }

  return null;
};
