import { initTheme } from "./modules/theme.js";
import { initVideoPlayers } from "./modules/video.js";
import { initSidebar } from "./modules/sidebar.js";

document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initVideoPlayers();
    initSidebar();
});
// const mainSwiper = new Swiper(".main-swiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     loop: true,
//     autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: ".next-button",
//         prevEl: ".prev-button",
//     },
//     on: {
//         init: function () {
//             updateFraction(this);
//         },
//         slideChange: function () {
//             updateFraction(this);
//         },
//     },
// });

// function updateFraction(swiper) {
//     const fraction = document.querySelector(".fraction");
//     // Ajustar el contador para el loop
//     let realIndex = swiper.realIndex + 1;
//     fraction.textContent = `${realIndex} / 10`;
// }

const mainSwiper = new Swiper(".main-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
});

// const mainSwiper = new Swiper(".main-swiper", {
//     grabCursor: true,
//     slidesPerView: 1,
//     loop: true,
//     autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination", // Swiper creará este elemento
//         dynamicBullets: true,
//         clickable: true,
//     },
// });
