// @ts-check
import million from "million/compiler";
import { withSentryConfig } from "@sentry/nextjs";
import redirects from "./config/next/redirects.mjs";

const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  const { build } = await import("velite");
  await build({ watch: isDev, clean: !isDev });
}


/** @type { import("next").NextConfig } */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { hostname: "i.scdn.co" },
      { hostname: "spotify.com" },
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
 * @type {import("@sentry/nextjs/types/config/types").SentryBuildOptions}
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
