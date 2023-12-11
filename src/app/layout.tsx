import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import type { ReactNode } from "react";
import GoogleAnalytics from "src/components/molecules/GoogleAnalytics/GoogleAnalytics";
import Hotjar from "src/components/molecules/Hotjar/Hotjar";
import Meta from "src/components/molecules/Meta";
import MainLayout from "src/layouts/MainLayout";
import Providers from "src/providers";
import "src/styles/global.css";
import { getStaticMetadata } from "src/utils/metadata";
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
            <GoogleAnalytics />
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
