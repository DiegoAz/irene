// Declarar las variables globales primero
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Función para establecer el tema
function setTheme(theme) {
  // Si no hay tema específico, usar la preferencia del sistema
  if (!theme) {
    const systemTheme = prefersDarkScheme.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('color-scheme', systemTheme);
  } else {
    // Si hay tema específico (light o dark), usarlo directamente
    document.documentElement.setAttribute('color-scheme', theme);
  }
  
  // Actualizar botones del tooltip y el botón móvil
  const themeButtons = document.querySelectorAll('.theme-options-tooltip .theme-option');
  const mobileButton = document.querySelector('.theme-toggle.mobile-only');
  const themeSelector = document.querySelector('.theme-selector');
  
  if (themeButtons && mobileButton && themeSelector) {
    // Actualizar el estado activo de los botones
    themeButtons.forEach(button => {
      button.classList.toggle('active', button.dataset.theme === (theme || 'auto'));
    });

    // Actualizar el icono del botón móvil
    const mobileButtonSvg = mobileButton.querySelector('svg');
    let iconToUse;

    if (!theme) {
      // Si estamos en modo auto, usar el icono de auto
      iconToUse = themeSelector.querySelector('.theme-option[data-theme="auto"] svg');
    } else {
      // Si tenemos un tema específico, usar su icono correspondiente
      iconToUse = themeSelector.querySelector(`.theme-option[data-theme="${theme}"] svg`);
    }

    if (iconToUse) {
      const newSvg = iconToUse.cloneNode(true);
      mobileButtonSvg.replaceWith(newSvg);
    }
  }
  
  // Guardar o eliminar el tema en localStorage
  if (theme) {
    localStorage.setItem('theme', theme);
  } else {
    localStorage.removeItem('theme');
  }
}

// Agregar el event listener para cambios en la preferencia del sistema
prefersDarkScheme.addEventListener('change', () => {
  const savedTheme = localStorage.getItem('theme');
  if (!savedTheme) {
    setTheme(); // Actualizar solo si estamos en modo auto
  }
});

// Inicializar el tema al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  setTheme(savedTheme);
});

// Manejar el selector de tema
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

    const parentElements = document.querySelectorAll('.parent');
    
    // Añadir clase para prevenir transiciones durante la carga
    document.body.classList.add('no-transition');

    // Función para guardar el estado en localStorage
    function saveMenuState() {
        const state = {};
        parentElements.forEach(parent => {
            const key = parent.querySelector('.title button span').textContent.trim();
            state[key] = parent.classList.contains('expanded');
        });
        localStorage.setItem('menuState', JSON.stringify(state));
    }

    // Función para cargar el estado desde localStorage
    function loadMenuState() {
        const state = JSON.parse(localStorage.getItem('menuState')) || {};
        parentElements.forEach(parent => {
            const key = parent.querySelector('.title button span').textContent.trim();
            if (state[key]) {
                parent.classList.add('expanded');
            }
        });
    }

    parentElements.forEach(function (parentElement) {
        const toggleButton = parentElement.querySelector('.title button');

        toggleButton.addEventListener('click', function (e) {
            e.preventDefault();
            parentElement.classList.toggle('expanded');
            saveMenuState();
        });
    });

    // Cargar el estado del menú al cargar la página
    loadMenuState();

    // Si el elemento padre tiene un hijo activo, mantenlo expandido
    parentElements.forEach(function (parentElement) {
        if (parentElement.querySelector('.children .active')) {
            parentElement.classList.add('expanded');
            saveMenuState();
        }
    });

    // Remover la clase de no-transition después de un breve retraso
    setTimeout(() => {
        document.body.classList.remove('no-transition');
    }, 20);

    // DARK MODE - LIGHT MODE
    const themeSelector = document.querySelector('.theme-selector');
    if (themeSelector) {
        const mobileButton = themeSelector.querySelector('.theme-toggle.mobile-only');
        const tooltip = themeSelector.querySelector('.theme-options-tooltip');
        const themeButtons = themeSelector.querySelectorAll('.theme-option');

        // Cargar tema guardado o usar preferencia del sistema
        const savedTheme = localStorage.getItem('theme');
        setTheme(savedTheme);

        // Toggle tooltip en móvil
        if (mobileButton) {
            mobileButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                tooltip.classList.toggle('active');
                console.log('Click en botón móvil:', tooltip.classList.contains('active'));
            });
        }

        // Cerrar tooltip al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!themeSelector.contains(e.target)) {
                tooltip.classList.remove('active');
                mobileButton?.setAttribute('aria-expanded', 'false');
                console.log('Cerrar tooltip por clic fuera');
            }
        });

        // Manejar cambios de tema
        themeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const clickedTheme = button.dataset.theme;
                const currentTheme = localStorage.getItem('theme');
                
                if (clickedTheme === 'auto') {
                    setTheme(); // Sin argumento para volver a automático
                } else if (clickedTheme === currentTheme) {
                    setTheme(); // Sin argumento para volver a automático
                } else {
                    setTheme(clickedTheme);
                }
                
                tooltip.classList.remove('active');
                mobileButton?.setAttribute('aria-expanded', 'false');
            });
        });

        // Cambiar tema cuando cambia la preferencia del sistema
        prefersDarkScheme.addEventListener('change', () => {
            const savedTheme = localStorage.getItem('theme');
            if (!savedTheme) {
                setTheme(); // Esto actualizará el tema basado en la nueva preferencia del sistema
            }
        });
    }
});

// Manejar la transición entre páginas
document.addEventListener('turbo:load', function() {
  setInitialTheme();
  setTimeout(() => {
    document.body.classList.remove('no-transition');
  }, 20);
});

// Agregar event listeners para los botones del selector de tema
document.addEventListener('DOMContentLoaded', () => {
  const themeButtons = document.querySelectorAll('.theme-option');
  themeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const theme = button.dataset.theme;
      if (theme === 'auto') {
        setTheme(); // Llamar sin argumento para modo auto
      } else {
        setTheme(theme);
      }
    });
  });
});
