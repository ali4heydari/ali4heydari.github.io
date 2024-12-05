// @ts-check
import redirects from "./config/next/redirects.mjs";
import { withSentryConfig } from "@sentry/nextjs";
import million from "million/compiler";

/** @type { import("next").NextConfig } */
const nextConfig = {
  images: {
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { hostname: "i.scdn.co" },
      { hostname: "spotify.com" },
      { hostname: "*.ibb.co" }, // for gallery images
      {
        hostname: "a.ltrbxd.com",
      },
    ],
  },
  reactStrictMode: true,
  async redirects() {
    return redirects;
  },
  swcMinify: true,
};

const millionConfig = {
  auto: { rsc: true },
  rsc: true,
};

const sentryBuildOptions = {
  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
  disableLogger: true,
  hideSourceMaps: true,
  org: "ali4heydari",
  project: "ali4heydari-dot-tech",
  sourcemaps: {
    disable: process.env.SENTRY_IS_DRY_RUN === "true",
  },
  tunnelRoute: "/monitoring",
  widenClientFileUpload: true,
};

// https://github.com/cyrilwanner/next-compose-plugins/issues/59#issuecomment-1341060113
export default (
  /** @type {any} */ phase,
  /** @type {import("next").NextConfig} */ defaultConfig,
) => {
  const plugins = [
    (cfg) => million.next(cfg, millionConfig),
    (cfg) => withSentryConfig(cfg, sentryBuildOptions),
  ];

  return plugins.reduce(
    (acc, plugin) => {
      const update = plugin(acc);
      return typeof update === "function"
        ? // @ts-ignore
          update(phase, defaultConfig)
        : update;
    },
    { ...nextConfig },
  );
};
