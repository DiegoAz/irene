// Constants
const THEME_CONSTANTS = {
    AUTO: "auto",
    DARK: "dark",
    LIGHT: "light",
    STORAGE_KEY: "theme",
};

const SELECTORS = {
    themeSelector: ".theme-selector",
    mobileButton: ".theme-toggle.mobile-only",
    tooltip: ".theme-options-tooltip",
    themeOptions: ".theme-option",
};

// Sistema de preferencia de color
const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)",
);

// UI Utilities
const themeUI = {
    updateButtons(theme) {
        const themeButtons = document.querySelectorAll(
            `${SELECTORS.tooltip} ${SELECTORS.themeOptions}`,
        );
        themeButtons?.forEach((button) => {
            button.classList.toggle(
                "active",
                button.dataset.theme ===
                    (theme || THEME_CONSTANTS.AUTO),
            );
        });
    },

    updateMobileIcon(theme, themeSelector) {
        const mobileButton = themeSelector.querySelector(
            SELECTORS.mobileButton,
        );
        const mobileButtonSvg = mobileButton?.querySelector("svg");
        if (!mobileButtonSvg) return;

        const iconToUse = theme
            ? themeSelector.querySelector(
                  `${SELECTORS.themeOptions}[data-theme="${theme}"] svg`,
              )
            : themeSelector.querySelector(
                  `${SELECTORS.themeOptions}[data-theme="${THEME_CONSTANTS.AUTO}"] svg`,
              );

        if (iconToUse) {
            mobileButtonSvg.replaceWith(iconToUse.cloneNode(true));
        }
    },

    toggleTooltip(tooltip, show, mobileButton) {
        tooltip.classList.toggle("active", show);
        mobileButton?.setAttribute("aria-expanded", String(show));
    },
};

/**
 * Establece el tema de la aplicación
 * @param {string} [theme] - Tema a establecer ('light', 'dark', o undefined para auto)
 */
function setTheme(theme) {
    try {
        const systemTheme = prefersDarkScheme.matches
            ? THEME_CONSTANTS.DARK
            : THEME_CONSTANTS.LIGHT;
        const themeToApply = theme || systemTheme;

        document.documentElement.setAttribute(
            "color-scheme",
            themeToApply,
        );

        const themeSelector = document.querySelector(
            SELECTORS.themeSelector,
        );
        if (themeSelector) {
            themeUI.updateButtons(theme);
            themeUI.updateMobileIcon(theme, themeSelector);
        }

        // Persistir preferencia
        theme
            ? localStorage.setItem(THEME_CONSTANTS.STORAGE_KEY, theme)
            : localStorage.removeItem(THEME_CONSTANTS.STORAGE_KEY);
    } catch (error) {
        console.error("Error setting theme:", error);
    }
}

/**
 * Inicializa los selectores de tema y sus event listeners
 */
function initThemeSelectors() {
    const themeSelector = document.querySelector(
        SELECTORS.themeSelector,
    );
    if (!themeSelector) return;

    const mobileButton = themeSelector.querySelector(
        SELECTORS.mobileButton,
    );
    const tooltip = themeSelector.querySelector(SELECTORS.tooltip);
    const themeButtons = themeSelector.querySelectorAll(
        SELECTORS.themeOptions,
    );

    // Mobile tooltip toggle
    mobileButton?.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isActive = tooltip.classList.contains("active");
        themeUI.toggleTooltip(tooltip, !isActive, mobileButton);
    });

    // Close tooltip on outside click
    document.addEventListener("click", (e) => {
        if (!themeSelector.contains(e.target)) {
            themeUI.toggleTooltip(tooltip, false, mobileButton);
        }
    });

    // Theme selection
    themeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const clickedTheme = button.dataset.theme;
            const currentTheme = localStorage.getItem(
                THEME_CONSTANTS.STORAGE_KEY,
            );

            setTheme(
                clickedTheme === THEME_CONSTANTS.AUTO ||
                    clickedTheme === currentTheme
                    ? undefined
                    : clickedTheme,
            );

            themeUI.toggleTooltip(tooltip, false, mobileButton);
        });
    });

    tooltip?.addEventListener("click", (e) => e.stopPropagation());
}

/**
 * Inicializa el sistema de temas
 */
function initTheme() {
    const savedTheme = localStorage.getItem(
        THEME_CONSTANTS.STORAGE_KEY,
    );
    setTheme(savedTheme);

    prefersDarkScheme.addEventListener("change", () => {
        const savedTheme = localStorage.getItem(
            THEME_CONSTANTS.STORAGE_KEY,
        );
        if (!savedTheme) setTheme();
    });

    initThemeSelectors();
}

export { initTheme };
