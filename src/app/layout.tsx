import type { ReactNode } from "react";
import "src/styles/global.css";
import GoogleAnalytics from "../components/molecules/GoogleAnalytics/GoogleAnalytics";
import Hotjar from "../components/molecules/Hotjar/Hotjar";
import Meta from "../components/molecules/Meta";
import MainLayout from "../layouts/MainLayout";
import Providers from "../providers";
import { getStaticMetadata } from "../utils/metadata";
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

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Meta />
      </head>
      <body>
        {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
        {process.env.NODE_ENV === "production" && <Hotjar />}
        <GoogleAnalytics />
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
