module.exports = {
  // Idioma actual del sitio
  lang: "es",
  
  // Idiomas disponibles
  languages: ["es"],  // En el futuro: ["es", "en", "pt"]
  
  // Información del sitio
  name: "Proyecto Irene",
  description: "Iniciativa educativa interdisciplinaria diseñada para integrar la “Cátedra de la Paz” en las escuelas secundarias de Colombia.",
  url: process.env.ELEVENTY_ENV === "development" || process.env.CF_PAGES_BRANCH === "feat-seo"
    ? "https://feat-seo.proyectoirene.pages.dev"  // Development URL
    : "https://proyectoirene.pages.dev",          // Production URL
  // SEO
  author: "Ronald Forero Álvarez, Martin Dinter, Deisy Amapola Vásquez Guerrero, Juan Gabriel Santamaría Pérez, Jeiviane Justiniano Da Silva, Anni Marcelli Santos de Jesus, Carlos Renato Rosário de Jesús, Rafael Uribe Neira, Lucio Martín Forero Álvarez, Jesús David Girado Sierra, Natalia Valentina Méndez López, Felipe Vargas Cortés",
  keywords: "proyecto irene, educación, literatura clásica, resolución de conflictos, método socrático, paz, convivencia, diálogo",
  meta : {
    twitterCard: "summary",
  },
  // Social media
  social: {
    instagram: "irenepazcol", // Sin el @ inicial
    // facebook: "Irene-Paz-Col",  // Nombre de usuario o ID de página
    tiktok: "irenepazcol"     // Sin el @ inicial
  },

  // Año actual para el copyright
  currentYear: new Date().getFullYear(),
}; 