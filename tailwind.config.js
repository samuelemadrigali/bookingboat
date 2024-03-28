import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    darkMode: "class", // or false
    theme: {
        extend: {
            colors: {
                gray: {
                    50: "#f8f7ff",
                    100: "#f6f5ff",
                    200: "#eff0fe",
                    300: "#e0e0fc",
                    400: "#98A5C0",
                    500: "#84848f",
                    600: "#595983",
                    700: "#1e1f48",
                    800: "#0f103b",
                    900: "#000000",
                },
            },
        },
        fontFamily: {
            sans: ["Nunito", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
    },
    variants: {
        extend: {
            backgroundOpacity: ["dark"],
        },
    },
    plugins: [forms],
};
