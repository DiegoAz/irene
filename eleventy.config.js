const eleventyPostcss = require("@jgarber/eleventy-plugin-postcss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const htmlmin = require("html-minifier-terser");
const markdownItFancyLists =
    require("markdown-it-fancy-lists").markdownItFancyListPlugin;

module.exports = async function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyPostcss);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/videos");
    eleventyConfig.addPassthroughCopy("src/assets");
    const { EleventyRenderPlugin } = await import("@11ty/eleventy");
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItFancyLists));
    eleventyConfig.setServerOptions({
        showAllHosts: true,
    });
    eleventyConfig.addTransform("htmlmin", function (content) {
        if ((this.page.outputPath || "").endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });

            return minified;
        }

        // If not an HTML output, return content as-is
        return content;
    });
    return {
        dir: {
            input: "src",
            output: "_site",
            data: "_data",
        },
    };
};
