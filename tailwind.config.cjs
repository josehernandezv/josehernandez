const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Space Mono", ...defaultTheme.fontFamily.sans],
        // display: ["Space Mono", ...defaultTheme.fontFamily.sans],
        display: ["ClashDisplay-Variable", ...defaultTheme.fontFamily.sans],
        sans: ["Bitter Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontFamily: theme("fontFamily.display") },
        h2: { fontFamily: theme("fontFamily.display") },
        h3: { fontFamily: theme("fontFamily.display") },
      });
    }),
  ],
};
