import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    GALLERY_DATABASE_ID: z.string(),
    NOTION_TOKEN: z.string(),
    SENTRY_AUTH_TOKEN: z.string(),
    SENTRY_ORG: z.string(),
    SENTRY_PROJECT: z.string(),
    SPOTIFY_CLIENT_ID: z.string(),
    SPOTIFY_CLIENT_SECRET: z.string(),
    SPOTIFY_REFRESH_TOKEN: z.string(),
    STEAM_API_KEY: z.string(),
    STEAM_ID: z.string(),
    VERCEL_GIT_COMMIT_SHA: z.string(),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_DISCUSS_SHORTNAME: z.string(),
    NEXT_PUBLIC_GA_TRACKING_ID: z.string(),
    NEXT_PUBLIC_HOTJAR_ID: z.number(),
    NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION: z.number(),
    NEXT_PUBLIC_SENTRY_DSN: z.string().url(),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    GALLERY_DATABASE_ID: process.env.GALLERY_DATABASE_ID,
    NEXT_PUBLIC_DISCUSS_SHORTNAME:
      process.env.NEXT_PUBLIC_DISCUSS_SHORTNAME ?? "",
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID ?? "",
    NEXT_PUBLIC_HOTJAR_ID: Number(process.env.NEXT_PUBLIC_HOTJAR_ID),
    NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION: Number(
      process.env.NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION,
    ),
    NEXT_PUBLIC_SENTRY_DSN:
      "https://ed90590a991690c3ba11bada4ffd9aa7@o1022684.ingest.sentry.io/4506293730082816",
    NOTION_TOKEN: process.env.NOTION_TOKEN,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    SENTRY_ORG: process.env.SENTRY_ORG,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN ?? "",
    STEAM_API_KEY: process.env.STEAM_API_KEY,
    STEAM_ID: process.env.STEAM_ID,
    VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
  },
});
