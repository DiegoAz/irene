import { initTheme } from "./modules/theme.js";

document.addEventListener("DOMContentLoaded", function () {
    // Inicializar tema
    initTheme();

    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");
    const body = document.body;
    let scrollPosition = 0;

    function disableScroll() {
        scrollPosition = window.scrollY;
        body.style.overflow = "hidden";
        body.style.position = "fixed";
        body.style.top = `-${scrollPosition}px`;
        body.style.width = "100%";
    }

    function enableScroll() {
        body.style.removeProperty("overflow");
        body.style.removeProperty("position");
        body.style.removeProperty("top");
        body.style.removeProperty("width");
        window.scrollTo(0, scrollPosition);
    }

    function toggleMenu() {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
        menuToggle.setAttribute(
            "aria-expanded",
            sidebar.classList.contains("active"),
        );

        if (sidebar.classList.contains("active")) {
            disableScroll();
        } else {
            enableScroll();
        }

        // Anima el ícono
        const path = menuToggle.querySelector("path");
        if (sidebar.classList.contains("active")) {
            path.dispatchEvent(new Event("click"));
        } else {
            path.dispatchEvent(new Event("click"));
            setTimeout(() => {
                document.getElementById("reverse").beginElement();
            }, 50);
        }
    }

    menuToggle.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);

    // Cierra el menú al cambiar el tamaño de la ventana
    window.addEventListener("resize", function () {
        if (
            window.innerWidth > 820 &&
            sidebar.classList.contains("active")
        ) {
            toggleMenu();
        }
    });

    // Prevenir scroll en el contenido principal cuando el menú está abierto
    sidebar.addEventListener(
        "touchmove",
        function (e) {
            e.stopPropagation();
        },
        { passive: false },
    );

    const parentElements = document.querySelectorAll(".parent");

    // Añadir clase para prevenir transiciones durante la carga
    document.body.classList.add("no-transition");

    // Función para guardar el estado en localStorage
    function saveMenuState() {
        const state = {};
        parentElements.forEach((parent) => {
            const key = parent
                .querySelector(".title button span")
                .textContent.trim();
            state[key] = parent.classList.contains("expanded");
        });
        localStorage.setItem("menuState", JSON.stringify(state));
    }

    // Función para cargar el estado desde localStorage
    function loadMenuState() {
        const state =
            JSON.parse(localStorage.getItem("menuState")) || {};
        parentElements.forEach((parent) => {
            const key = parent
                .querySelector(".title button span")
                .textContent.trim();
            if (state[key]) {
                parent.classList.add("expanded");
            }
        });
    }

    parentElements.forEach(function (parentElement) {
        const toggleButton =
            parentElement.querySelector(".title button");

        toggleButton.addEventListener("click", function (e) {
            e.preventDefault();
            parentElement.classList.toggle("expanded");
            saveMenuState();
        });
    });

    // Cargar el estado del menú al cargar la página
    loadMenuState();

    // Si el elemento padre tiene un hijo activo, mantenlo expandido
    parentElements.forEach(function (parentElement) {
        if (parentElement.querySelector(".children .active")) {
            parentElement.classList.add("expanded");
            saveMenuState();
        }
    });

    // Remover la clase de no-transition después de un breve retraso
    setTimeout(() => {
        document.body.classList.remove("no-transition");
    }, 20);

    // Inicializar reproductor de video
    const players = document.querySelectorAll(".plyr-video");
    if (players.length) {
        players.forEach((player) => {
            const plyrInstance = new Plyr(player, {
                controls: [
                    "play-large",
                    "play",
                    "progress",
                    "current-time",
                    "mute",
                    "volume",
                    "fullscreen",
                ],
                fullscreen: {
                    enabled: true,
                    fallback: true,
                    iosNative: true,
                },
                hideControls: true,
                autoHide: true,
                hideControlsTimeout: 2000,
                clickToPlay: true,
                ratio: "16:9",
            });

            // Ocultar controles inicialmente excepto el botón central
            const controls = plyrInstance.elements.controls;
            if (controls) {
                controls.style.opacity = "0";
                controls.style.transition = "opacity 0.3s ease";
            }

            // Mostrar controles al iniciar reproducción o al hacer hover
            plyrInstance.on("play", () => {
                if (controls) controls.style.opacity = "1";
            });

            player.addEventListener("mouseenter", () => {
                if (controls) controls.style.opacity = "1";
            });

            // Ocultar controles al pausar o quitar el hover
            plyrInstance.on("pause", () => {
                if (!player.matches(":hover") && controls) {
                    controls.style.opacity = "0";
                }
            });

            player.addEventListener("mouseleave", () => {
                if (plyrInstance.paused && controls) {
                    controls.style.opacity = "0";
                }
            });

            // Eventos de fullscreen
            plyrInstance.on("enterfullscreen", () => {
                document.documentElement.style.overflow = "hidden";
                document.body.style.overflow = "hidden";
                if (document.fullscreenElement) {
                    screen.orientation.lock("portrait").catch(() => {
                        // Silenciosamente fallar si no es soportado
                    });
                }
            });

            plyrInstance.on("exitfullscreen", () => {
                document.documentElement.style.overflow = "";
                document.body.style.overflow = "";
                screen.orientation.unlock().catch(() => {
                    // Silenciosamente fallar si no es soportado
                });
            });
        });
    }
});
