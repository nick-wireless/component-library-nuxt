/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    screens: {
      'xs': '425px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
