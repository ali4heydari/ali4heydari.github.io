import AccountCircleIcon from "mdi-react/AccountCircleIcon";
import BriefcaseIcon from "mdi-react/BriefcaseIcon";
import FilmIcon from "mdi-react/FilmIcon";
import HomeIcon from "mdi-react/HomeIcon";
import MonitorIcon from "mdi-react/MonitorIcon";
import MusicIcon from "mdi-react/MusicIcon";
import NoteTextIcon from "mdi-react/NoteTextIcon";
import PhotographyIcon from "mdi-react/PhotographyIcon";
import RssIcon from "mdi-react/RssIcon";
import SourceRepositoriesIcon from "mdi-react/SourceRepositoriesIcon";
import { socialMedias } from "./socialMedias";

export const navigation = {
  primary: [
    {
      emojiIcon: "🏠",
      href: "/",
      name: "Home",
      svgIcon: HomeIcon,
    },
    {
      emojiIcon: "👨🏻‍💻",
      href: "/about",
      name: "About",
      svgIcon: AccountCircleIcon,
    },
    {
      emojiIcon: "📝",
      href: "/blog",
      name: "Blog",
      svgIcon: NoteTextIcon,
    },
    {
      emojiIcon: "💼",
      href: "/projects",
      name: "Projects",
      svgIcon: BriefcaseIcon,
    },
  ],
  secondary: [
    {
      emojiIcon: "💻",
      href: "/uses",
      name: "Uses",
      svgIcon: MonitorIcon,
    },
    {
      emojiIcon: "🥚",
      href: "https://github.com/ali4heydari/ali4heydari.github.io",
      name: "Source",
      svgIcon: SourceRepositoriesIcon,
    },
    {
      emojiIcon: "🔄",
      href: "/feed.xml",
      name: "RSS",
      svgIcon: RssIcon,
    },
  ],
  socialMedias,
  tertiary: [
    {
      emojiIcon: "🎵",
      href: "/music-taste",
      name: "Music taste",
      svgIcon: MusicIcon,
    },
    {
      emojiIcon: "🎬",
      href: "/movie-taste",
      name: "Movie taste",
      svgIcon: FilmIcon,
    },
    {
      emojiIcon: "📷",
      href: "/gallery",
      name: "Gallery",
      svgIcon: PhotographyIcon,
    },
  ],
};

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.VERCEL_ENV === "preview"
      ? process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "https://ali4heydari.tech"
      : "https://ali4heydari.tech";
