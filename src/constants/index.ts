import { socialMedias } from "./socialMedias";

export const navigation = {
  primary: [
    {
      name: "🏠 Home",
      href: "/",
    },
    {
      name: "👨🏻‍💻 About",
      href: "/about",
    },
    {
      name: "📝 Blog",
      href: "/blog",
    },
    {
      name: "💼 Projects",
      href: "/projects",
    },
  ],
  secondary: [
    {
      name: "💻 Uses",
      href: "/uses",
    },
    {
      name: "🥚 Source",
      href: "https://github.com/ali4heydari/ali4heydari.tech",
    },
    {
      name: "🔄 RSS",
      href: "/rss.xml",
    },
  ],
  tertiary: [
    {
      name: "🎧 Music taste",
      href: "/music-taste",
    },
  ],
  socialMedias,
};

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.VERCEL_ENV === "preview"
    ? process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://ali4heydari.tech"
    : "https://ali4heydari.tech";
