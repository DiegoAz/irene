module.exports = {
    layout: "layouts/testimonial.liquid",
    tags: ["impacto"],
    usePlyr: true,
    // eleventyComputed: {
    //   permalink: data => `/testimonios/${data.city.toLowerCase()}-${data.year}/index.html`,
    //   videos: data => {
    //     if (!data.videos) return null;
    //     return data.videos.map(video => {
    //       if (typeof video === 'string') {
    //         return {
    //           url: video
    //         };
    //       }
    //       return video;
    //     });
    //   }
    // }
};
