/**
 * Build a url path for a page object coming from the data cache.
 *
 * @param {object} page raw page object from data cache
 * @returns url path string for that page
 */
export function pageUrlPath(page) {
  const {
    __metadata: { relSourcePath },
  } = page;

  return relSourcePath
    .replace(/^pages\//, "/") // removes pages directory prefix
    .replace(/\.md$/, "") // removes file extension
    .replace(/^\/index$/, "/") // replaces home page with /
    .replace(/\/index$/, ""); // removes trailing slash from other index pages
}
