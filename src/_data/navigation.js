module.exports = {
    es: [
        {
            title: "Inicio",
            url: "/",
            key: "home",
        },
        {
            title: "Sobre el proyecto",
            url: "/acerca-de/",
            key: "about",
            children: [
                {
                    title: "Introducción",
                    url: "/acerca-de/introduccion/",
                    activePattern: "/acerca-de/introduccion/",
                },
                {
                    title: "Objetivos",
                    url: "/acerca-de/objetivos/",
                    activePattern: "/acerca-de/objetivos/",
                },
                {
                    title: "Equipo",
                    url: "/acerca-de/equipo/",
                    activePattern: "/acerca-de/equipo/",
                },
                {
                    title: "Instituciones asociadas",
                    url: "/acerca-de/instituciones-asociadas/",
                    activePattern:
                        "/acerca-de/instituciones-asociadas/",
                },
            ],
        },
        {
            title: "Currículo",
            url: "/curriculo/",
            key: "curriculum",
        },
        {
            title: "Recursos didácticos",
            url: "/recursos-didacticos/",
            key: "resources",
            children: [
                {
                    title: "Guía socrática",
                    url: "/recursos-didacticos/guia-socratica/",
                    activePattern:
                        "/recursos-didacticos/guia-socratica/",
                    children: [
                        {
                            title: "Português",
                            url: "/recursos-didacticos/guia-socratica/portugues/",
                            activePattern:
                                "/recursos-didacticos/guia-socratica/portugues/",
                        },
                        {
                            title: "Inglés",
                            url: "/recursos-didacticos/guia-socratica/ingles/",
                            activePattern:
                                "/recursos-didacticos/guia-socratica/ingles/",
                        },
                    ],
                },
            ],
        },
        {
            title: "Testimonios",
            key: "testimonials",
            children: [
                {
                    title: "Fortaleza, 2024",
                    url: "/testimonios/fortaleza-2024/",
                    activePattern: "/testimonios/fortaleza-2024/",
                },
                // {
                //   title: "Tunja, 2023",
                //   url: "/testimonials/tunja-2023/",
                //   activePattern: "/testimonials/tunja-2023/"
                // },
                // ... más testimonios ...
            ],
        },
        {
            title: "Investigación",
            url: "/investigacion/",
            key: "research",
        },
        {
            title: "Colaboradores",
            url: "/colaboradores/",
            key: "partners",
        },
        {
            title: "Contacto",
            url: "/contacto/",
            key: "contact",
        },
        {
            title: "Noticias",
            url: "/noticias/",
            key: "news",
        },
        {
            title: "Apoya el proyecto",
            url: "/apoyo/",
            key: "support",
        },
    ],
    // Puedes agregar más idiomas aquí en el futuro
};
