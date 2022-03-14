const globalStyles = require("./content/data/styles.json");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: globalStyles.primaryColor,
      },
    },
  },
  plugins: [],
};
