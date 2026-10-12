export function initTranslate() {
    // 1. Evitar cargar el script más de una vez
    if (document.querySelector('script[src*="translate_a/element.js"]')) {
        return;
    }

    // 2. Cargar el script sin el parámetro 'cb' (evitamos el callback inestable)
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js';
    script.async = true;
    document.body.appendChild(script);

    // 3. Sistema de sondeo (Polling)
    const checkAndInit = () => {
        const element = document.getElementById('google_translate_element');

        // Verificamos que:
        // - El objeto global 'google' exista
        // - 'google.translate' esté disponible
        // - El div del widget esté en el DOM
        if (window.google && window.google.translate && element) {
            try {
                new google.translate.TranslateElement(
                    {
                        pageLanguage: 'es',
                        includedLanguages: 'en,es'
                    },
                    'google_translate_element'
                );
                console.log("Google Translate initialized successfully");
            } catch (e) {
                console.error("Error initializing Google Translate:", e);
                setTimeout(checkAndInit, 500); // Reintentar en caso de error
            }
        } else {
            // Si no está listo, reintentamos en 200ms
            setTimeout(checkAndInit, 200);
        }
    };

    checkAndInit();
}
