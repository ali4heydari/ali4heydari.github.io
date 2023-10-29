module.exports = {
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  endOfLine: "lf",
  quoteProps: "consistent",
  tailwindConfig: "./tailwind.config.js",
  importOrder: [
    "react",
    "^(?!react)\\w+$",
    "^(?!.*/).*$",
    "^[src/]",
    "^(..)",
    "^(.)",
  ],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-packagejson",
  ],
};
