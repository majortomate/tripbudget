/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'knowhere-dark-blue': '#051D40',
        'tripbudget-yellow': '#FFDE5A',
      },
      backgroundImage: {
        'logo-dark': 'https://res.cloudinary.com/knowhere/image/upload/v1663393976/static/logo-tripbudget-dark_i6st3n.svg',
        'logo-light': 'https://res.cloudinary.com/knowhere/image/upload/v1663341395/static/logo-tripbudget-white_qidvnk.svg',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
};
