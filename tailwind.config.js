/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'knowhere-dark-blue': '#051D40',
        'tripbudget-yellow': '#FFDE5A',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};