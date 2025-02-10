import { initTheme } from "./modules/theme.js";
import { initVideoPlayers } from "./modules/video.js";
import { initSidebar } from "./modules/sidebar.js";
import { initMainSlider } from "./modules/slider.js";

document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initVideoPlayers();
    initSidebar();
    initMainSlider();
});
