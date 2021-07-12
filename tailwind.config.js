const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false, // or 'media' or 'class'
  // https://github.com/tailwindlabs/tailwindcss-typography/issues/140#issuecomment-785125064
  //   important: ".page-wrapper",
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        teal: colors.teal,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
