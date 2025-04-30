const eleventyPostcss = require("@jgarber/eleventy-plugin-postcss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const htmlmin = require("html-minifier-terser");
const markdownItFancyLists =
    require("markdown-it-fancy-lists").markdownItFancyListPlugin;
const markdownItAttrs = require("markdown-it-attrs");
const guide = require("./src/_data/guide.js");

module.exports = async function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyPostcss);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/videos");
    eleventyConfig.addPassthroughCopy("src/assets");
    const { EleventyRenderPlugin } = await import("@11ty/eleventy");
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    eleventyConfig.addPlugin(sitemap, {
        sitemap: {
            hostname: "https://proyectoirene.pages.dev",
        },
    });
    eleventyConfig.amendLibrary("md", (mdLib) =>
        mdLib.use(markdownItFancyLists).use(markdownItAttrs),
    );
    eleventyConfig.addShortcode("morePhotosSection", function (paragraphText) {
        return `
      <hr class="solid">
      <section class="more-photos">
        <p>${paragraphText}</p>
      </section>
    `;
    });
    eleventyConfig.addShortcode("guideImage", function (imageKey, text) {
        // Verificar que la imagen existe en el objeto guide.images
        if (!guide.images[imageKey]) {
            console.warn(
                `Warning: Image key "${imageKey}" not found in guide.images`,
            );
            return "";
        }

        const image = guide.images[imageKey];
        return `<p class="block"><img src="${image.src}"
                           alt="${image.alt[this.page.lang]}"
                           class="${image.classes.join(" ")}"
                           id="${image.id}">${text}</p>`;
    });

    eleventyConfig.setServerOptions({
        showAllHosts: true,
    });
    eleventyConfig.addTransform("htmlmin", function (content) {
        if ((this.page.outputPath || "").endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
                minifyJS: true,
                minifyCSS: true,
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
