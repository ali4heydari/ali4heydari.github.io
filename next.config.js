const withPlugins = require("next-compose-plugins");
const { withContentlayer } = require("next-contentlayer");
/** @type { import("next").NextConfig } */
const nextConfig = {};

module.exports = withPlugins([[withContentlayer]], nextConfig);
