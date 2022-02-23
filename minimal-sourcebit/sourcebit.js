const path = require("path");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  plugins: [
    {
      module: require("sourcebit-source-filesystem"),
      options: {
        watch: isDev,
        sources: [
          { name: "pages", path: path.join(__dirname, "content/pages") },
          { name: "data", path: path.join(__dirname, "content/data") },
        ],
      },
    },
    {
      module: require("sourcebit-target-next"),
      options: {
        liveUpdate: isDev,
        flattenAssetUrls: true,
        pages: (objects) => {
          const pageObjects = objects.filter(
            (page) => page.__metadata.sourceName === "pages"
          );
          const pages = pageObjects.map((page) => {
            return {
              path: page.__metadata.urlPath,
              ...page,
            };
          });
          return [...pages];
        },
      },
    },
  ],
};
