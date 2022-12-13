module.exports = function (eleventyConfig) {
  // copy to '_site'
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');

  // trigger a build after change
  eleventyConfig.addWatchTarget('./src/assets/');

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
