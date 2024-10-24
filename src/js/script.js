document.addEventListener("DOMContentLoaded", function () {
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
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.parent .title button');
    const parentElement = document.querySelector('.parent');

    toggleButton.addEventListener('click', function () {
        parentElement.classList.toggle('expanded');
    });
});
