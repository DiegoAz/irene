const eleventyPostcss = require("@jgarber/eleventy-plugin-postcss");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyPostcss);
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.setServerOptions({
        showAllHosts: true,
    });
    return {
        dir: {
            input: "src",
            output: "_site",
        },
    };
};
