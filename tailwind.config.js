const colors = require("tailwindcss/colors");

module.exports = {
  //   mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  // https://github.com/tailwindlabs/tailwindcss-typography/issues/140#issuecomment-785125064
  //   important: ".page-wrapper",
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      orange: colors.orange,
      blue: colors.blue,
      green: colors.green,
      red: colors.red,
      yellow: colors.yellow,
      purple: colors.purple,
      teal: colors.teal,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
