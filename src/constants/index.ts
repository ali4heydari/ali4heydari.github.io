import AccountCircleIcon from "mdi-react/AccountCircleIcon";
import BriefcaseIcon from "mdi-react/BriefcaseIcon";
import FilmIcon from "mdi-react/FilmIcon";
import HomeIcon from "mdi-react/HomeIcon";
import MonitorIcon from "mdi-react/MonitorIcon";
import MusicIcon from "mdi-react/MusicIcon";
import NoteTextIcon from "mdi-react/NoteTextIcon";
import RssIcon from "mdi-react/RssIcon";
import SourceRepositoriesIcon from "mdi-react/SourceRepositoriesIcon";
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
      svgIcon: AccountCircleIcon,
      emojiIcon: "👨🏻‍💻",
    },
    {
      name: "Blog",
      href: "/blog",
      svgIcon: NoteTextIcon,
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
      svgIcon: MonitorIcon,
      emojiIcon: "💻",
    },
    {
      name: "Source",
      href: "https://github.com/ali4heydari/ali4heydari.github.io",
      svgIcon: SourceRepositoriesIcon,
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
      svgIcon: MusicIcon,
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

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.VERCEL_ENV === "preview"
      ? process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "https://ali4heydari.tech"
      : "https://ali4heydari.tech";
