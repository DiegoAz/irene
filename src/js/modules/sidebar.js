const SELECTORS = {
    menuToggle: ".hamburger",
    sidebar: ".sidebar",
    overlay: ".overlay",
    parent: ".parent",
    toggleButton: ".title button",
    childrenActive: ".children .active",
};

const STORAGE_KEY = "menuState";
const BREAKPOINT = 820;

function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

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
        this.menuToggle.classList.toggle('is-active');

        if (this.sidebar?.classList.contains("active")) {
            this.disableScroll();
        } else {
            this.enableScroll();
        }
    }


    disableScroll() {
        this.scrollPosition = window.scrollY;
        if (isMobileDevice()) {
            this.body.style.position = "fixed";
            this.body.style.top = `-${this.scrollPosition}px`;
            this.body.style.width = "100%";
            this.body.style.overflow = "hidden";
        } else { 
            this.sidebar.style.overflowY = "auto"; 
        }
    }

    enableScroll() {
        if (isMobileDevice()) { 
            document.documentElement.style.scrollBehavior = 'auto';
            this.body.style.removeProperty("position");
            this.body.style.removeProperty("top");
            this.body.style.removeProperty("width");
            this.body.style.removeProperty("overflow");
            window.scrollTo(0, this.scrollPosition);
        } else { 
            this.sidebar.style.overflowY = "";
        }
        window.scrollTo(0, this.scrollPosition);

        setTimeout(() => {
            document.documentElement.style.scrollBehavior = 'smooth';
        }, 0);
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
