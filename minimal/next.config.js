/**
 * @type {import('next').NextConfig}
 */
const glob = require("fast-glob");
const path = require("path");
const chokidar = require("chokidar");
const fs = require("fs");
const prettier = require("prettier");

// Content directory references
const pagesDir = path.join(process.cwd(), "content", "pages");
const pagesPattern = path.join(pagesDir, "**/*.json");
const indexFilePath = path.join(pagesDir, "index.js");

/**
 * Rebuilds the index manifest file in the content/pages directory.
 */
function rebuildIndex() {
  // Get all pages in the directory, following the pattern above.
  // Note: This does not support nested pages.
  const pageFiles = glob.sync(pagesPattern);
  // Add metadata to the page objects.
  const pageData = pageFiles.map((file) => {
    // Clear the require cache so we bring in new content.
    if (require.cache[require.resolve(file)]) {
      delete require.cache[require.resolve(file)];
    }
    // Load the page content.
    const page = require(file);
    // Build the rich page object.
    return {
      ...page,
      __metadata: {
        id: file.replace(process.cwd(), "").slice(1),
        urlPath: file
          .replace(pagesDir, "")
          .replace(".json", "")
          .replace("/index", "/"),
        name: file
          .replace(pagesDir, "")
          .slice(1)
          .replace(".json", "")
          .replace("/", "__")
          .replace(/[^a-zA-Z0-9]/gi, "_"),
      },
    };
  });
  // Generate individual page objects and add to the content ref.
  //
  // Note: fileContent is the content ref used to build up the index file's raw
  // content.
  let fileContent = pageData
    .map((page) => {
      const varName = page.__metadata.name;
      return `export const ${varName} = ${JSON.stringify(page)}`;
    })
    .join(";");
  // Add allPages export as an array of all pages.
  fileContent += `;export const allPages = [${pageData
    .map((page) => page.__metadata.name)
    .join(",")}]`;

  // Format the index file content (currently on a single line).
  const formattedFileContent = prettier.format(fileContent, {
    semi: false,
    parser: "babel",
  });
  // Write to file.
  fs.writeFileSync(indexFilePath, formattedFileContent);
}

// Watch for file changes when not in production.
if (process.env.NODE_ENV !== "production") {
  const watcher = chokidar.watch(pagesDir, {
    ignored: [(str) => str.endsWith(".js")],
  });
  watcher.on("all", rebuildIndex);
}

module.exports = {};
