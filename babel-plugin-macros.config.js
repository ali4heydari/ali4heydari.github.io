module.exports = {
  twin: {
    config: "./tailwind.config.js",
    preset: "styled-components",
    autoCssProp: false,
    hasSuggestions: true,
    debug: process.env.NODE_ENV !== "production",
  },
};
