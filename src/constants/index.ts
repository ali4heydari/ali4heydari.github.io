import { socialMedias } from "./socialMedias";

export const navigation = {
  primary: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Projects",
      href: "/projects",
    },
  ],
  secondary: [
    {
      name: "Uses",
      href: "/uses",
    },
    {
      name: "Community wall",
      href: "/community-wall",
    },
    {
      name: "Source",
      // TODO: add source code link
      href: "https://github.com/ali4heydari",
    },
    {
      name: "RSS",
      href: "/rss.xml",
    },
  ],
  tertiary: [
    {
      name: "Music taste",
      href: "/music-taste",
    },
    {
      name: "Wish list",
      href: "/wish-list",
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
  ],
  socialMedias,
};
