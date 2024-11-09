const VIDEO_CONFIG = {
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
};

/**
 * Configura los controles del reproductor
 * @param {HTMLElement} controls - Elemento de controles del reproductor
 */
function setupControls(controls) {
    if (!controls) return;

    controls.style.opacity = "0";
    controls.style.transition = "opacity 0.3s ease";
}

/**
 * Configura los event listeners para un reproductor específico
 * @param {Plyr} plyrInstance - Instancia del reproductor
 * @param {HTMLElement} player - Elemento del reproductor
 */
function setupPlayerListeners(plyrInstance, player) {
    const controls = plyrInstance.elements.controls;

    // Play/Pause events
    plyrInstance.on("play", () => {
        if (controls) controls.style.opacity = "1";
    });

    plyrInstance.on("pause", () => {
        if (!player.matches(":hover") && controls) {
            controls.style.opacity = "0";
        }
    });

    // Mouse events
    player.addEventListener("mouseenter", () => {
        if (controls) controls.style.opacity = "1";
    });

    player.addEventListener("mouseleave", () => {
        if (plyrInstance.paused && controls) {
            controls.style.opacity = "0";
        }
    });

    // Fullscreen events
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
}

/**
 * Inicializa los reproductores de video en la página
 */
function initVideoPlayers() {
    const players = document.querySelectorAll(".plyr-video");
    if (!players.length) return;

    players.forEach((player) => {
        try {
            const plyrInstance = new Plyr(player, VIDEO_CONFIG);
            setupControls(plyrInstance.elements.controls);
            setupPlayerListeners(plyrInstance, player);
        } catch (error) {
            console.error("Error initializing video player:", error);
        }
    });
}

export { initVideoPlayers };
