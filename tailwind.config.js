/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'et-teal' : '#63a0ad',
        'et-light-gray' : '#f3f3f3',
        'et-beige' : '#ad9d8f',
        'white' : 'white',
        'black' : 'black',
        'et-secondary' : '#f8f8f8',
        'et-dark-gray' : '#878787',
        'et-clay': '#EAEEF7'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out'
      }
    },
  },
  plugins: [],
}