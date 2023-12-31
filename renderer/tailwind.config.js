const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'base': '#333333',
        'text': '#9D8062',
        'highlight': '#ebd4ae'
      },

    },
  },
  plugins: [],
}
