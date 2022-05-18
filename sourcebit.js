const path = require("path");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  plugins: [
    {
      module: require("sourcebit-source-filesystem"),
      options: {
        watch: isDev,
        sources: [{ name: "content", path: path.join(__dirname, "content") }],
      },
    },
    {
      module: require("sourcebit-target-next"),
      options: { 
        flattenAssetUrls: true,
        liveUpdate: isDev
      },
    },
  ],
};
