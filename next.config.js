module.exports = {
  webpack: (config, { dev }) => {
    // Makes webpack not trigger recompiling when files in the content folder are updated.
    config.watchOptions.ignored.push('**/content/**');
    return config;
  },
};
