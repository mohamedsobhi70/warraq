/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0 0 0 6px #B6B4FD',
      },
      container: {
        center: true,
        screens: {
          xl: '1290px'
        },
      },
      fontFamily: {
        'IBM': ['IBM Plex Sans Arabic', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}
