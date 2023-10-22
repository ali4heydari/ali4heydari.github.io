import Providers from "../providers";
import "tailwindcss/tailwind.css";
import "src/styles/global.css";
import MainLayout from "../layouts/MainLayout";
import { getStaticMetadata } from "../utils/metadata";
import { Meta } from "./meta";
import GoogleAnalytics from "./GoogleAnalytics";
import Hotjar from "./Hotjar";

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
        {process.env.NODE_ENV === "production" && <Hotjar />}
        <GoogleAnalytics />
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
