/**
 * Global feature flags
 * Toggle risky or optional features without invasive code changes.
 */

export const FLAGS = {
  // Disable public engagement features (comments, reactions, bookmarks)
  engagement: false as boolean,
} as const;

export type Flags = typeof FLAGS;
