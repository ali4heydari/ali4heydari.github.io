// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
import siteConfig from "./site.config";
import { REFERRER_KEY } from "./src/components/atoms/ReferrerTracker";
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: siteConfig.SENTRY_DSN,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 1.0,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  beforeSend(event, hint) {
    if (typeof localStorage !== "undefined") {
      const referrers: Record<string, number> = JSON.parse(
        localStorage?.getItem(REFERRER_KEY) ?? "{}",
      );

      event.contexts = {
        ...event.contexts,
        referrers,
      };
    }
    return event;
  },
});
