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
                            title: "Español",
                            url: "/recursos-didacticos/guia-socratica/es/",
                            activePattern:
                                "/recursos-didacticos/guia-socratica/es/",
                        },
                        {
                            title: "Português",
                            url: "/recursos-didacticos/guia-socratica/pt/",
                            activePattern:
                                "/recursos-didacticos/guia-socratica/pt/",
                        },
                        {
                            title: "Inglés",
                            url: "/recursos-didacticos/guia-socratica/en/",
                            activePattern:
                                "/recursos-didacticos/guia-socratica/en/",
                        },
                        {
                            title: "Francés",
                            url: "/recursos-didacticos/guia-socratica/fr/",
                            activePattern:
                                "/recursos-didacticos/guia-socratica/fr/",
                        },
                    ],
                },
            ],
        },
        {
            title: "Impacto",
            key: "testimonials",
            children: [
                {
                  title: "Tunja, 2024",
                  url: "/impacto/tunja-2024/",
                  activePattern: "/impacto/tunja-2024/"
                },
                {
                    title: "Fortaleza, 2024",
                    url: "/impacto/fortaleza-2024/",
                    activePattern: "/impacto/fortaleza-2024/",
                },
                {
                    title: "Viotá, 2024",
                    url: "/impacto/viota-2024/",
                    activePattern: "/impacto/viota-2024/",
                },
                {
                    title: "Tunja y Bogotá, 2023",
                    url: "/impacto/tunja-bogota-2023/",
                    activePattern: "/impacto/tunja-bogota-2023/",
                },
            ],
        },
        {
            title: "Investigación",
            url: "/investigacion/",
            key: "research",
        },
        // {
        //     title: "Colaboradores",
        //     url: "/colaboradores/",
        //     key: "partners",
        // },
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
