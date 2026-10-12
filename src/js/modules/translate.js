export function initTranslate() {
    // 1. Evitar duplicados
    if (document.querySelector('script[src*="translate_a/element.js"]')) return;

    // 2. Cargar el script
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js';
    script.async = true;
    document.body.appendChild(script);

    // 3. Sondeo ultra-estricto
    const checkAndInit = () => {
        const element = document.getElementById('google_translate_element');

        // Verificamos específicamente que TranslateElement sea una función (constructor)
        if (
            window.google &&
            window.google.translate &&
            typeof window.google.translate.TranslateElement === 'function' &&
            element
        ) {
            try {
                new google.translate.TranslateElement(
                    {
                        pageLanguage: 'es',
                        includedLanguages: 'es,en',
                        // layout: google.translate.TranslateElement.InlineLayout.SIMPLE

                    },
                    'google_translate_element'
                );
                console.log("Google Translate: Widget initialized successfully");
            } catch (e) {
                console.error("Google Translate: Constructor error, retrying...", e);
                setTimeout(checkAndInit, 500);
            }
        } else {
            // Si el constructor aún es undefined, esperamos un poco más
            setTimeout(checkAndInit, 200);
        }
    };

    checkAndInit();
}
