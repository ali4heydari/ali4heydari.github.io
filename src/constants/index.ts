import {
  FaBriefcase as BriefcaseIcon,
  FaCamera as PhotographyIcon,
  FaRss as RssIcon,
  FaBook as NoteTextIcon,
} from "react-icons/fa";
import {
  FaComputer as MonitorIcon,
  FaCodeBranch as SourceRepositoriesIcon,
} from "react-icons/fa6";
import {
  MdAccountCircle as AccountCircleIcon,
  MdMovie as FilmIcon,
  MdHome as HomeIcon,
  MdOutlineMusicNote as MusicIcon,
} from "react-icons/md";
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
