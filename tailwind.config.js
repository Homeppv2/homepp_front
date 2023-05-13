/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        maxWidth: {
            "320px": "320px"
        },
        minWidth: {
            "320px": "320px"
        },
        borderRadius: {
            "default": "1rem",
            "round": "50%"
        },
        extend: {
            colors: {
                "green": "#08AC83",
                "red": "#F00B34",
                "dark_text": "#C0BFBD",
                "light_text": "#2C2E2F",
                "dark_light_bg": "#323638",
                "dark_main_bg": "#242627",
                "dark_dark_bg": "#232525",
                "dark_dark_special": "#202223",
                "dark_light_special": "#313638",
                "dark_dark_bg_special": "#262829",
                "dark_blue_special": "#161C22"
            },
            width: {
                "320px": "320px",
            },
            height: {
                "650px": "650px",
            },
            fontSize: {
                "h1": "3rem",
                "h2": "2.5rem",
                "gigant": "2rem",
                "big": "1.6rem",
                "middle": "1.4rem",
                "default": "1.2rem",
                "small": "1.1rem",
            },
            dropShadow: {
                "default": "0px 0px 15px rgba(0, 0, 0, 0.1)"
            },
            boxShadow: {
                "default": "0px 4px 30px rgba(0, 0, 0, 0.2);"
            }
        },
    },
    plugins: [],
}