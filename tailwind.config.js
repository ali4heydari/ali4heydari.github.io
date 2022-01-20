/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    typography: (theme) => ({}),
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-rtl")],
};
