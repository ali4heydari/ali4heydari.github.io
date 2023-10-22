module.exports = {
  semi: true,
  endOfLine: "lf",
  tailwindConfig: "./tailwind.config.js",
  plugins: [import("prettier-plugin-tailwindcss")],
};
