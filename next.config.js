const { withContentlayer } = require("next-contentlayer");
/** @type { import("next").NextConfig } */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{ hostname: "i.scdn.co" }, { hostname: "spotify.com" }],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

// https://github.com/cyrilwanner/next-compose-plugins/issues/59#issuecomment-1341060113
module.exports = (phase, defaultConfig) => {
  const plugins = [withContentlayer];

  return plugins.reduce(
    (acc, plugin) => {
      const update = plugin(acc);
      return typeof update === "function"
        ? update(phase, defaultConfig)
        : update;
    },
    { ...nextConfig },
  );
};
