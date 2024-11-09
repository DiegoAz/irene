const SELECTORS = {
    menuToggle: ".menu-toggle",
    sidebar: ".sidebar",
    overlay: ".overlay",
    parent: ".parent",
    toggleButton: ".title button",
    childrenActive: ".children .active",
};

const STORAGE_KEY = "menuState";
const BREAKPOINT = 820;

class SidebarManager {
    constructor() {
        this.menuToggle = document.querySelector(
            SELECTORS.menuToggle,
        );
        this.sidebar = document.querySelector(SELECTORS.sidebar);
        this.overlay = document.querySelector(SELECTORS.overlay);
        this.body = document.body;
        this.scrollPosition = 0;
        this.parentElements = document.querySelectorAll(
            SELECTORS.parent,
        );

        this.init();
    }

    init() {
        // Prevenir transiciones durante la carga
        this.body.classList.add("no-transition");

        this.setupEventListeners();
        this.loadMenuState();
        this.setupActiveParents();

        // Remover la clase no-transition después de un breve retraso
        setTimeout(() => {
            this.body.classList.remove("no-transition");
        }, 20);
    }

    setupEventListeners() {
        // Menu toggle events
        this.menuToggle?.addEventListener("click", () =>
            this.toggleMenu(),
        );
        this.overlay?.addEventListener("click", () =>
            this.toggleMenu(),
        );

        // Resize event
        window.addEventListener("resize", () => {
            if (
                window.innerWidth > BREAKPOINT &&
                this.sidebar?.classList.contains("active")
            ) {
                this.toggleMenu();
            }
        });

        // Prevent scroll on sidebar touch
        this.sidebar?.addEventListener(
            "touchmove",
            (e) => {
                e.stopPropagation();
            },
            { passive: false },
        );

        // Parent elements click events
        this.parentElements.forEach((parentElement) => {
            const toggleButton = parentElement.querySelector(
                SELECTORS.toggleButton,
            );
            toggleButton?.addEventListener("click", (e) => {
                e.preventDefault();
                parentElement.classList.toggle("expanded");
                this.saveMenuState();
            });
        });
    }

    toggleMenu() {
        this.sidebar?.classList.toggle("active");
        this.overlay?.classList.toggle("active");
        this.menuToggle?.setAttribute(
            "aria-expanded",
            this.sidebar?.classList.contains("active"),
        );

        if (this.sidebar?.classList.contains("active")) {
            this.disableScroll();
        } else {
            this.enableScroll();
        }

        this.animateIcon();
    }

    animateIcon() {
        const path = this.menuToggle?.querySelector("path");
        if (!path) return;

        path.dispatchEvent(new Event("click"));
        if (!this.sidebar?.classList.contains("active")) {
            setTimeout(() => {
                document.getElementById("reverse")?.beginElement();
            }, 50);
        }
    }

    disableScroll() {
        this.scrollPosition = window.scrollY;
        this.body.style.overflow = "hidden";
        this.body.style.position = "fixed";
        this.body.style.top = `-${this.scrollPosition}px`;
        this.body.style.width = "100%";
    }

    enableScroll() {
        this.body.style.removeProperty("overflow");
        this.body.style.removeProperty("position");
        this.body.style.removeProperty("top");
        this.body.style.removeProperty("width");
        window.scrollTo(0, this.scrollPosition);
    }

    saveMenuState() {
        const state = {};
        this.parentElements.forEach((parent) => {
            const key = parent
                .querySelector(`${SELECTORS.toggleButton} span`)
                ?.textContent.trim();
            if (key) {
                state[key] = parent.classList.contains("expanded");
            }
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    loadMenuState() {
        try {
            const state =
                JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
            this.parentElements.forEach((parent) => {
                const key = parent
                    .querySelector(`${SELECTORS.toggleButton} span`)
                    ?.textContent.trim();
                if (key && state[key]) {
                    parent.classList.add("expanded");
                }
            });
        } catch (error) {
            console.error("Error loading menu state:", error);
        }
    }

    setupActiveParents() {
        this.parentElements.forEach((parentElement) => {
            if (
                parentElement.querySelector(SELECTORS.childrenActive)
            ) {
                parentElement.classList.add("expanded");
                this.saveMenuState();
            }
        });
    }
}

function initSidebar() {
    new SidebarManager();
}

export { initSidebar };
