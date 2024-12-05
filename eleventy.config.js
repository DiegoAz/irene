const eleventyPostcss = require("@jgarber/eleventy-plugin-postcss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
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
    eleventyConfig.amendLibrary("md", (mdLib) =>
        mdLib.use(markdownItFancyLists).use(markdownItAttrs),
    );
    eleventyConfig.addShortcode("morePhotosSection", function (paragraphText) {
        return `
      <section class="more-photos">
        <div class="separator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"/>
            <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"/>
          </svg>
          <div class="dash"></div>
        </div>
        <p>${paragraphText}</p>
      </section>
    `;
    });
    eleventyConfig.addShortcode("guideFirstImage", function (text) {
        return `<p><img src="${guide.images.one.src}"
                           alt="${guide.images.one.alt[this.page.lang]}"
                           class="${guide.images.one.classes.join(" ")}"
                           id="${guide.images.one.id}">${text}</p>`;
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
