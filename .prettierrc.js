module.exports = {
  endOfLine: "lf",
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
  printWidth: 80,
  quoteProps: "consistent",
  semi: true,
  tabWidth: 2,
  tailwindConfig: "./tailwind.config.ts",
};
