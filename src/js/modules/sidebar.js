const SELECTORS = {
    menuToggle: ".hamburger",
    sidebar: ".sidebar",
    overlay: ".overlay",
    parent: ".parent",
    toggleButton: ".title button",
    childrenActive: ".children .active",
};

const BREAKPOINT = 820;

class SidebarManager {
    constructor() {
        this.menuToggle = document.querySelector(SELECTORS.menuToggle);
        this.sidebar = document.querySelector(SELECTORS.sidebar);
        this.overlay = document.querySelector(SELECTORS.overlay);
        this.body = document.body;
        this.scrollPosition = 0;
        this.parentElements = document.querySelectorAll(SELECTORS.parent);

        this.init();
    }

    init() {
        // Prevenir transiciones durante la carga
        this.body.classList.add("no-transition");

        this.setupEventListeners();

        // Remover la clase no-transition después de un breve retraso
        setTimeout(() => {
            this.body.classList.remove("no-transition");
        }, 20);
    }

    setupEventListeners() {
        // Menu toggle events
        this.menuToggle?.addEventListener("click", () => this.toggleMenu());
        this.overlay?.addEventListener("click", () => this.toggleMenu());

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
            const toggleButton = parentElement.querySelector(SELECTORS.toggleButton);
            toggleButton?.addEventListener("click", (e) => {
                e.preventDefault();

                // Obtener el padre más cercano (si existe)
                const isNested = parentElement.classList.contains("nested-parent");
                const parentParent = isNested
                    ? parentElement.closest(".parent:not(.nested-parent)")
                    : null;

                // Si es un elemento anidado, solo contraer otros elementos anidados del mismo nivel
                if (isNested) {
                    const siblings =
                        parentParent?.querySelectorAll(".nested-parent") || [];
                    siblings.forEach((sibling) => {
                        if (sibling !== parentElement) {
                            sibling.classList.remove("expanded");
                        }
                    });
                } else {
                    // Si es un elemento padre principal, contraer otros elementos principales
                    this.parentElements.forEach((p) => {
                        if (
                            p !== parentElement &&
                            !p.classList.contains("nested-parent")
                        ) {
                            p.classList.remove("expanded");
                        }
                    });
                }

                // Alternar el estado del elemento actual
                parentElement.classList.toggle("expanded");
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
        this.menuToggle.classList.toggle("is-active");

        if (this.sidebar?.classList.contains("active")) {
            this.disableScroll();
        } else {
            this.enableScroll();
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
        document.documentElement.style.scrollBehavior = "auto";

        this.body.style.removeProperty("overflow");
        this.body.style.removeProperty("position");
        this.body.style.removeProperty("top");
        this.body.style.removeProperty("width");
        window.scrollTo(0, this.scrollPosition);

        setTimeout(() => {
            document.documentElement.style.scrollBehavior = "smooth";
        }, 0);
    }
}

function initSidebar() {
    new SidebarManager();
}

export { initSidebar };
