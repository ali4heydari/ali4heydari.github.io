const withPlugins = require("next-compose-plugins");
const { withContentlayer } = require("next-contentlayer");
/** @type { import("next").NextConfig } */
const nextConfig = {
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

    const rules = config.module.rules.find((r) => !!r.oneOf);
    rules.oneOf.forEach((loaders) => {
      if (Array.isArray(loaders.use)) {
        loaders.use.forEach((l) => {
          if (
            typeof l !== "string" &&
            typeof l.loader === "string" &&
            /(?<!post)css-loader/.test(l.loader)
          ) {
            if (!l.options.modules) return;
            const { getLocalIdent, ...others } = l.options.modules;
            l.options = {
              ...l.options,
              modules: {
                ...others,
                getLocalIdent: (ctx, localIdentName, localName) => {
                  if (localName === "dark") return localName;
                  return getLocalIdent(ctx, localIdentName, localName);
                },
              },
            };
          }
        });
      }
    });

    return config;
  },
};

module.exports = withPlugins([[withContentlayer]], nextConfig);
