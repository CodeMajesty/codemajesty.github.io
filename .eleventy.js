module.exports = function (eleventyConfig) {
  // copy to '_site'
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');

  // trigger a build after change
  eleventyConfig.addWatchTarget('./src/assets/');

  eleventyConfig.addShortcode('getCurrentYear', () => new Date().getFullYear());

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: '_layouts',
      data: '	_data',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};
