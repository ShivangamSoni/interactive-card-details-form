/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                grayishViolet: {
                    50: "hsl(270, 3%, 87%)",
                    300: "hsl(279, 6%, 55%)",
                    700: "hsl(278, 68%, 11%)",
                },
                purple: "hsl(278, 94%, 30%)",
                violet: "hsl(249, 99%, 64%)",
                error: "hsl(0, 100%, 66%)",
            },
            fontFamily: {
                primary: ["Space Grotesk", "sans-serif"],
            },
        },
    },
    plugins: [],
};
