import dataCache from "../.sourcebit-nextjs-cache.json";

export const allDocuments = dataCache.objects;

/**
 * Extract objects from the data cache by matching the "layout" property in
 * frontmatter.
 *
 * @param {string} type Name of the model
 * @returns {array} Sourcebit data objects
 */
export function pagesByLayout(layout) {
  return allDocuments.filter((doc) => doc?.frontmatter?.layout === layout);
}

/**
 * Find a single data object from the data cache by matching the "type"
 * property. Returns only the first match.
 *
 * @param {string} type Name of the model
 * @returns {object} First matching object
 */
export function dataByType(type) {
  return allDocuments.find((obj) => obj?.type === type);
}
