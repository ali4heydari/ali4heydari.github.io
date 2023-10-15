import Providers from "../providers";
import "tailwindcss/tailwind.css";
// Required: Pick a PrismJS theme
import "prismjs/themes/prism-tomorrow.css";
// Optional: Add line numbering
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
// Optional: Add shell prompt
import "prismjs/plugins/command-line/prism-command-line.css";
import "src/styles/global.css";
import { Metadata } from "next";
import MainLayout from "../layouts/MainLayout";
import { getStaticMetadata } from "../utils/metadata";
import { Meta } from "./meta";
import GoogleAnalytics from "./GoogleAnalytics";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Meta />
      </head>
      <body>
        {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
        <GoogleAnalytics />
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
