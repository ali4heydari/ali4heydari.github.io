// @ts-check
import redirects from "./config/next/redirects.mjs";
import { withSentryConfig } from "@sentry/nextjs";

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

const sentryBuildOptions = {
  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
  disableLogger: true,
  org: "ali4heydari",
  project: "ali4heydari-dot-tech",
  tunnelRoute: "/monitoring",
  widenClientFileUpload: true,
};

// https://github.com/cyrilwanner/next-compose-plugins/issues/59#issuecomment-1341060113
export default (
  /** @type {any} */ phase,
  /** @type {import("next").NextConfig} */ defaultConfig,
) => {
  const plugins = [(cfg) => withSentryConfig(cfg, sentryBuildOptions)];

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
