const { withSentryConfig } = require("@sentry/nextjs");
const million = require("million/compiler");

const appHeaders = require("./config/next/headers");
const redirects = require("./config/next/redirects");

/** @type { import("next").NextConfig } */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { hostname: "i.scdn.co" },
      { hostname: "spotify.com" },
      {
        hostname: "a.ltrbxd.com",
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  redirects() {
    return redirects;
  },
};

const millionConfig = {
  auto: { rsc: true },
  rsc: true,
};

const sentryWebpackPluginOptions = {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  // Suppresses source map uploading logs during build
  silent: false,
  org: "ali4heydari",
  project: "ali4heydari-dot-tech",
  dryRun: process.env.SENTRY_IS_DRY_RUN === "true",
};

const sentryOptions = {
  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
  tunnelRoute: "/monitoring",

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,
};

// https://github.com/cyrilwanner/next-compose-plugins/issues/59#issuecomment-1341060113
module.exports = (phase, defaultConfig) => {
  const plugins = [
    (cfg) => million.next(cfg, millionConfig),
    (cfg) => withSentryConfig(cfg, sentryWebpackPluginOptions, sentryOptions),
  ];

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
