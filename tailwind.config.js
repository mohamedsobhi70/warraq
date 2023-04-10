/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
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
  plugins: [],
}
