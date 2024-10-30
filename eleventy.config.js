const eleventyPostcss = require("@jgarber/eleventy-plugin-postcss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyPostcss);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.setServerOptions({
        showAllHosts: true,
    });
    return {
        dir: {
            input: "src",
            output: "_site",
            data: "_data",
        },
    };
};
