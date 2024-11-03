module.exports = {
  layout: "layouts/testimonial.liquid",
  tags: ["testimonios"],
  eleventyComputed: {
    permalink: data => `/testimonios/${data.city.toLowerCase()}-${data.year}/index.html`,
    title: data => `Testimonios de ${data.city}, ${data.year}`,
    videos: data => {
      if (!data.videos) return null;
      return data.videos.map(video => {
        if (typeof video === 'string') {
          return {
            url: video,
            orientation: 'horizontal' // default orientation
          };
        }
        return video;
      });
    }
  }
};
