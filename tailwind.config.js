/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Noto Sans, sans-serif;']
    },
    extend: {
      backgroundImage: {
        'my' : "url('/src/img/mosaic.png')"
      }
    },
  },
  plugins: [],
}

