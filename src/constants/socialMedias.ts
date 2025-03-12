import {
  FaDiscord as DiscordIcon,
  FaEnvelope as EmailIcon,
  FaFacebook as FacebookIcon,
  FaGithub as GithubIcon,
  FaGitlab as GitlabIcon,
  FaInstagram as InstagramIcon,
  FaLinkedin as LinkedinIcon,
  FaPhoneSquare as PhoneIcon,
  FaSkype as SkypeIcon,
  FaSpotify as SpotifyIcon,
  FaStackOverflow as StackOverflowIcon,
  FaTwitch as TwitchIcon,
  FaTwitter as TwitterIcon,
} from "react-icons/fa";
import { RiSlideshow2Fill as SlideIcon } from "react-icons/ri";
import { SiCalendly as CalendarIcon } from "react-icons/si";
import ids from "config/ids.json";

export const socialMedias = [
  {
    baseUrl: `mailto:`,
    icon: EmailIcon,
    id: ids.CONTACT_EMAIL,
    name: "email",
  },
  {
    baseUrl: `tel:`,
    icon: PhoneIcon,
    id: ids.CONTACT_PHONE,
    name: "telephone",
  },
  {
    baseUrl: `https://facebook.com/`,
    icon: FacebookIcon,
    id: ids.FACEBOOK_ID,
    name: "facebook",
  },
  {
    baseUrl: `https://twitter.com/`,
    icon: TwitterIcon,
    id: ids.TWITTER_ID,
    name: "twitter",
  },
  {
    baseUrl: `https://instagram.com/`,
    icon: InstagramIcon,
    id: ids.INSTAGRAM_ID,
    name: "instagram",
  },
  {
    baseUrl: `https://www.twitch.tv/`,
    icon: TwitchIcon,
    id: ids.TWITCH_ID,
    name: "twitch",
  },
  {
    baseUrl: `https://open.spotify.com/user/`,
    icon: SpotifyIcon,
    id: ids.SPOTIFY_ID,
    name: "spotify.com",
  },
  {
    baseUrl: `https://linkedin.com/in/`,
    icon: LinkedinIcon,
    id: ids.LINKEDIN_ID,
    name: "linkedin",
  },
  {
    baseUrl: `https://github.com/`,
    icon: GithubIcon,
    id: ids.GITHUB_ID,
    name: "github",
  },
  {
    baseUrl: `https://gitlab.com/`,
    icon: GitlabIcon,
    id: ids.GITLAB_ID,
    name: "gitlab",
  },
  {
    baseUrl: `https://stackoverflow.com/users/`,
    icon: StackOverflowIcon,
    id: ids.STACK_OVER_FLOW_ID,
    name: "stackoverflow",
  },
  {
    baseUrl: `https://join.skype.com/invite/`,
    icon: SkypeIcon,
    id: ids.SKYPE_INVITE_ID,
    name: "skype",
  },
  {
    baseUrl: `https://discord.gg/`,
    icon: DiscordIcon,
    id: ids.DISCORD_SERVER_ID,
    name: "discord",
  },
  {
    baseUrl: `https://calendly.com/`,
    icon: CalendarIcon,
    id: ids.CALENDLY_ID,
    name: "calendly",
  },
  {
    baseUrl: `https://slides.com/`,
    icon: SlideIcon,
    id: ids.SLIDES_ID,
    name: "slides.com",
  },
]
  .filter((socialMedia) => socialMedia.id !== "")
  .map((socialMedia) => ({
    ...socialMedia,
    href: `${socialMedia.baseUrl}${socialMedia.id}`,
  }));
