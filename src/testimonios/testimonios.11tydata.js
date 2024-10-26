module.exports = {
  layout: "layouts/testimonial.liquid",
  tags: ["testimonios"],
  eleventyComputed: {
    permalink: data => `/testimonios/${data.city.toLowerCase()}-${data.year}/index.html`,
    title: data => `Testimonios de ${data.city}, ${data.year}`,
    video: data => data.video ? `/videos/testimonios/${data.city.toLowerCase()}-${data.year}.mp4` : null
  }
};
