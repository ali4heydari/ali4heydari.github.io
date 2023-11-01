import {
  HomeIcon,
  UserCircleIcon,
  DocumentTextIcon,
  BriefcaseIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  RssIcon,
  MusicalNoteIcon,
  FilmIcon,
} from "@heroicons/react/24/solid";
import { socialMedias } from "./socialMedias";

export const navigation = {
  primary: [
    {
      name: "Home",
      href: "/",
      svgIcon: HomeIcon,
      emojiIcon: "🏠",
    },
    {
      name: "About",
      href: "/about",
      svgIcon: UserCircleIcon,
      emojiIcon: "👨🏻‍💻",
    },
    {
      name: "Blog",
      href: "/blog",
      svgIcon: DocumentTextIcon,
      emojiIcon: "📝",
    },
    {
      name: "Projects",
      href: "/projects",
      svgIcon: BriefcaseIcon,
      emojiIcon: "💼",
    },
  ],
  secondary: [
    {
      name: "Uses",
      href: "/uses",
      svgIcon: ComputerDesktopIcon,
      emojiIcon: "💻",
    },
    {
      name: "Source",
      href: "https://github.com/ali4heydari/ali4heydari.github.io",
      svgIcon: CodeBracketIcon,
      emojiIcon: "🥚",
    },
    {
      name: "RSS",
      href: "/feed.xml",
      svgIcon: RssIcon,
      emojiIcon: "🔄",
    },
  ],
  tertiary: [
    {
      name: "Music taste",
      href: "/music-taste",
      svgIcon: MusicalNoteIcon,
      emojiIcon: "🎵",
    },
    {
      name: "Movie taste",
      href: "/movie-taste",
      svgIcon: FilmIcon,
      emojiIcon: "🎬",
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
