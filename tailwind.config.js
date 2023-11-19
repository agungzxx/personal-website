/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}", 
    "./node_modules/flowbite/**/*.js"
],
  theme: {
  
    fontFamily: {
      'sans': ['Noto Sans, sans-serif;']
    },
    extend: {
      backgroundImage: {
        'dark' : "url('/src/img/mosaic.png')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

