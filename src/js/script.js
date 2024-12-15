import { initTheme } from "./modules/theme.js";
import { initVideoPlayers } from "./modules/video.js";
import { initSidebar } from "./modules/sidebar.js";

document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initVideoPlayers();
    initSidebar();
});
// Inicializar carruseles anidados
const nestedSwipers = new Swiper(".nested-swiper", {
    effect: "cards",
    grabCursor: true,
    // loop: true,
    // nested: true,
    cardsEffect: {
        slideShadows: false, // Esto desactivará las sombras
        // perSlideOffset: 8, // Ajusta el espaciado entre cards
        // perSlideRotate: 2, // Ajusta la rotación de las cards
    },
});

// Inicializar carrusel principal
const mainSwiper = new Swiper(".main-swiper", {
    spaceBetween: 30,
    allowTouchMove: false,
    navigation: {
        nextEl: ".next-button",
        prevEl: ".prev-button",
    },
    on: {
        init: function () {
            updateFraction(this);
        },
        slideChange: function () {
            updateFraction(this);
        },
    },
});

function updateFraction(swiper) {
    const fraction = document.querySelector(".fraction");
    fraction.textContent = `${swiper.realIndex + 1} / ${swiper.slides.length}`;
}

// document.querySelector(".next-button").addEventListener("click", (e) => {
//     e.preventDefault();
//     mainSwiper.slideNext();
// });
// document.querySelector(".prev-button").addEventListener("click", (e) => {
//     e.preventDefault();
//     mainSwiper.slidePrev();
// });
// document.querySelector(".next-button").addEventListener("mousedown", (e) => {
//     e.preventDefault();
// });
// document.querySelector(".prev-button").addEventListener("mousedown", (e) => {
//     e.preventDefault();
// });
