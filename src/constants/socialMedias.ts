import CalendarIcon from "mdi-react/CalendarIcon";
import DiscordIcon from "mdi-react/DiscordIcon";
import EmailIcon from "mdi-react/EmailIcon";
import FacebookIcon from "mdi-react/FacebookIcon";
import GithubIcon from "mdi-react/GithubIcon";
import GitlabIcon from "mdi-react/GitlabIcon";
import InstagramIcon from "mdi-react/InstagramIcon";
import LinkedinIcon from "mdi-react/LinkedinIcon";
import PhoneIcon from "mdi-react/PhoneIcon";
import SkypeIcon from "mdi-react/SkypeIcon";
import SlideIcon from "mdi-react/SlideshowIcon";
import SpotifyIcon from "mdi-react/SpotifyIcon";
import StackOverflowIcon from "mdi-react/StackOverflowIcon";
import TwitchIcon from "mdi-react/TwitchIcon";
import TwitterIcon from "mdi-react/TwitterIcon";
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
