import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import type { ReactNode } from "react";
import Hotjar from "src/components/molecules/Hotjar/Hotjar";
import Meta from "src/components/molecules/Meta";
import MainLayout from "src/layouts/MainLayout";
import Providers from "src/providers";
import "src/styles/global.css";
import * as gtag from "src/utils/gtag";
import { getStaticMetadata } from "src/utils/metadata";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "tailwindcss/tailwind.css";

export const metadata = {
  ...getStaticMetadata({
    title: "Ali Heydari – Front-end Software Engineer",
    description:
      "I'm Front-end Software Engineer. Visit my website to learn more about me and my projects",
    keywords: [
      "Ali Heydari",
      "ali",
      "heydari",
      "open-source",
      "software engineer",
      "bio",
      "developer",
      "portfolio",
      "development",
      "web",
    ],
  }),
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Meta />
      </head>
      <body>
        {process.env.NODE_ENV === "production" && (
          <>
            <GoogleAnalytics gaId={gtag.GA_TRACKING_ID} />
            <Hotjar />
            <VercelAnalytics />
            <SpeedInsights />
          </>
        )}
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
