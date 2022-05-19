import { sourcebitDataClient } from 'sourcebit-target-next';

async function allDocuments() {
  return (await sourcebitDataClient.getData()).objects;
}

/**
 * Extract objects from the data cache by matching the "layout" property in
 * frontmatter.
 *
 * @param {string} type Name of the model
 * @returns {array} Sourcebit data objects
 */
export async function pagesByLayout(layout) {
  return (await allDocuments()).filter((doc) => doc?.frontmatter?.layout === layout);
}

/**
 * Find a single data object from the data cache by matching the "type"
 * property. Returns only the first match.
 *
 * @param {string} type Name of the model
 * @returns {object} First matching object
 */
export async function dataByType(type) {
  return (await allDocuments()).find((obj) => obj?.type === type);
}
