module.exports = {
  layout: "layouts/testimonial.liquid",
  tags: ["testimonials"],
  eleventyComputed: {
    permalink: data => `/testimonials/${data.city.toLowerCase()}-${data.year}/index.html`,
    title: data => `Testimonios de ${data.city}, ${data.year}`,
    video: data => data.video ? `/videos/testimonials/${data.city.toLowerCase()}-${data.year}.mp4` : null
  }
};
