/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#0A0A0A",
                "background-light": "#FFFFFF",
                "background-dark": "#0A0A0A",
                "neutral-gray": "#F5F5F5",
            },
            fontFamily: {
                "display": ["Bebas Neue", "sans-serif"],
                "body": ["Manrope", "sans-serif"],
                "serif": ["Playfair Display", "serif"]
            },
            borderRadius: {
                "DEFAULT": "0px",
                "lg": "0px",
                "xl": "0px",
                "full": "9999px"
            },
        },
    },
    plugins: [],
}
