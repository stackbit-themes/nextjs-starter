/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{json,md}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#02001d',
      gray: {
        100: '#f3f4f6',
        500: '#75747d',
      },
      blue: '#4c57c5',
      yellow: '#ffde00',
    },
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
