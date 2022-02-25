import dataCache from "../.sourcebit-nextjs-cache.json";

export default function Page({ page }) {
  return (
    <div data-sb-object-id={page?.__metadata?.id}>
      <h1 data-sb-field-path="title">{page.frontmatter.title}</h1>
      {page.frontmatter.body && (
        <p data-sb-field-path="body">{page.frontmatter.body}</p>
      )}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const pagePath = "/" + (params?.slug?.join("/") ?? "");
  const page = getPageByPagePath(pagePath, dataCache?.objects);
  return { props: { page } };
}

export async function getStaticPaths() {
  return {
    paths: allPagePaths(dataCache?.objects),
    fallback: false,
  };
}

/**
 * Filter page objects from data cache.
 *
 * @param {array} allDocuments array of all documents from sourcebit data cache
 * @returns array of page objects
 */
function allPages(allDocuments = []) {
  return allDocuments.filter((doc) => doc?.frontmatter?.type === "Page");
}

/**
 * Build an array of page paths from data cache.
 *
 * @param {array} allDocuments Array of all documents from sourcebit data cache
 * @returns string of all possible page paths
 */
function allPagePaths(allDocuments = []) {
  return allPages(allDocuments).map((page) => pageUrlPath(page));
}

/**
 * Retrieve the page object for the current path.
 *
 * @param {string} pagePath url path of the current page
 * @param {array} allDocuments array of all documents from sourcebit data cache
 * @returns page object (or undefined)
 */
function getPageByPagePath(pagePath, allDocuments = []) {
  return allPages(allDocuments).find((page) => pageUrlPath(page) === pagePath);
}

/**
 * Build a url path for a page object coming from the data cache.
 *
 * @param {object} page raw page object from data cache
 * @returns url path string for that page
 */
function pageUrlPath(page) {
  const {
    __metadata: { relSourcePath },
  } = page;

  return relSourcePath
    .replace(/^pages\//, "/") // removes pages directory prefix
    .replace(/\.md$/, "") // removes file extension
    .replace(/^\/index$/, "/") // replaces home page with /
    .replace(/\/index$/, ""); // removes trailing slash from other index pages
}
