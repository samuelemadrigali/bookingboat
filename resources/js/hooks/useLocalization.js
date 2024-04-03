import { usePage } from "@inertiajs/react";

/**
 * Use localization.
 * @returns {object} The localization.
 * @property {function} t The translation function.
 * @property {string} locale The current locale.
 * @property {array} locales The available locales.
 * @property {function} changeLocale The function to change the locale.
 */
export default function useLocalization() {
    const { locale, locales, translations } = usePage().props;

    /**
     * Translate the given key.
     * @param {string} key The key to translate.
     * @param {object} replace The replacements to make.
     * @returns {string} The translated string.
     */
    function t(key, replace = {}) {
        let translation = translations[key] || key;

        Object.keys(replace).forEach((key) => {
            translation = translation.replace(`:${key}`, replace[key]);
        });

        return translation;
    }

    /**
     * Change the current locale.
     * @param {string} locale The locale to change to.
     * @returns {void}
     */
    function changeLocale(locale) {
        window.location = route("switch-locale", { locale });
    }

    return { t, locale, locales, changeLocale };
}
