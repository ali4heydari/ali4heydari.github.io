const withPlugins = require("next-compose-plugins");
const { withContentlayer } = require("next-contentlayer");
/** @type { import("next").NextConfig } */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withPlugins([[withContentlayer]], nextConfig);
