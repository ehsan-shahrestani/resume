/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {},
        height: {
            '100-dvh': '100dvh'
          }
    },
    plugins: [
        require('tailwindcss-animated')

    ],
}