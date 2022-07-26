/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const globalStyles = require('./content/data/styles.json');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{json,md}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: globalStyles.primaryColor,
      secondary: globalStyles.secondaryColor,
      white: '#ffffff',
      black: '#02001d',
      gray: {
        100: '#f3f4f6',
        500: '#75747d',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
