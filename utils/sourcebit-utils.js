import dataCache from "../.sourcebit-nextjs-cache.json";

export const allDocuments = dataCache.objects;

/**
 * Extract objects from the data cache by matching the "type" property in
 * frontmatter.
 */
export function documentsByType(type) {
  return allDocuments.filter((doc) => doc?.frontmatter?.type === type);
}
