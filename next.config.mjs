// @ts-check
import million from "million/compiler";
import { withSentryConfig } from "@sentry/nextjs";
import redirects from "./config/next/redirects.mjs";


/** @type { import("next").NextConfig } */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { hostname: "i.scdn.co" },
      { hostname: "spotify.com" },
      { hostname: "*.ibb.co" }, // for gallery images
      {
        hostname: "a.ltrbxd.com"
      }
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  async redirects() {
    return redirects;
  }
};

const millionConfig = {
  auto: { rsc: true },
  rsc: true
};


/**
 * @type {import("@sentry/nextjs/build/types/config/types").SentryBuildOptions}
 */
const sentryBuildOptions = {
  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
  org: "ali4heydari",
  project: "ali4heydari-dot-tech",
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
  sourcemaps: {
    disable: process.env.SENTRY_IS_DRY_RUN === "true"
  }
};


// https://github.com/cyrilwanner/next-compose-plugins/issues/59#issuecomment-1341060113
export default (/** @type {any} */ phase, /** @type {import("next").NextConfig} */ defaultConfig) => {
  const plugins = [
    (cfg) => million.next(cfg, millionConfig),
    (cfg) => withSentryConfig(cfg, sentryBuildOptions)
  ];

  return plugins.reduce(
    (acc, plugin) => {
      const update = plugin(acc);
      return typeof update === "function"
        ? update(phase, defaultConfig)
        : update;
    },
    { ...nextConfig }
  );
};
