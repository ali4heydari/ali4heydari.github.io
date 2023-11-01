import CalendarIcon from "mdi-react/CalendarIcon";
import DiscordIcon from "mdi-react/DiscordIcon";
import EmailIcon from "mdi-react/EmailIcon";
import FacebookIcon from "mdi-react/FacebookIcon";
import GithubIcon from "mdi-react/GithubIcon";
import GitlabIcon from "mdi-react/GitlabIcon";
import InstagramIcon from "mdi-react/InstagramIcon";
import LetterIBoxIcon from "mdi-react/LetterIBoxIcon";
import LinkedinIcon from "mdi-react/LinkedinIcon";
import PhoneIcon from "mdi-react/PhoneIcon";
import SkypeIcon from "mdi-react/SkypeIcon";
import SlideIcon from "mdi-react/SlideshowIcon";
import SpotifyIcon from "mdi-react/SpotifyIcon";
import StackOverflowIcon from "mdi-react/StackOverflowIcon";
import TwitchIcon from "mdi-react/TwitchIcon";
import TwitterIcon from "mdi-react/TwitterIcon";
import siteConfig from "site.config";

export const socialMedias = [
  {
    id: siteConfig.CONTACT_EMAIL,
    link: `mailto:`,
    name: "email",
    icon: EmailIcon,
  },
  {
    id: siteConfig.CONTACT_PHONE,
    name: "telephone",
    link: `tel:`,
    icon: PhoneIcon,
  },
  {
    id: siteConfig.FACEBOOK_ID,
    link: `https://facebook.com/`,
    name: "facebook",
    icon: FacebookIcon,
  },
  {
    id: siteConfig.TWITTER_ID,
    link: `https://twitter.com/`,
    name: "twitter",
    icon: TwitterIcon,
  },
  {
    id: siteConfig.INSTAGRAM_ID,
    link: `https://instagram.com/`,
    name: "instagram",
    icon: InstagramIcon,
  },
  {
    id: siteConfig.TWITCH_ID,
    link: `https://www.twitch.tv/`,
    name: "twitch",
    icon: TwitchIcon,
  },
  {
    id: siteConfig.SPOTIFY_ID,
    link: `https://open.spotify.com/user/`,
    icon: SpotifyIcon,
    name: "spotify.com",
  },
  {
    id: siteConfig.LINKEDIN_ID,
    link: `https://linkedin.com/in/`,
    name: "linkedin",
    icon: LinkedinIcon,
  },
  {
    id: siteConfig.GITHUB_ID,
    link: `https://github.com/`,
    name: "github",
    icon: GithubIcon,
  },
  {
    id: siteConfig.GITLAB_ID,
    link: `https://gitlab.com/`,
    icon: GitlabIcon,
    name: "gitlab",
  },
  {
    id: siteConfig.STACK_OVER_FLOW_ID,
    link: `https://stackoverflow.com/users/`,
    icon: StackOverflowIcon,
    name: "stackoverflow",
  },
  {
    id: siteConfig.SKYPE_INVITE_ID,
    link: `https://join.skype.com/invite/`,
    icon: SkypeIcon,
    name: "skype",
  },
  {
    id: siteConfig.DISCORD_SERVER_ID,
    link: `https://discord.gg/`,
    icon: DiscordIcon,
    name: "discord",
  },
  {
    id: siteConfig.CALENDLY_ID,
    link: `https://calendly.com/`,
    icon: CalendarIcon,
    name: "calendly",
  },
  {
    id: siteConfig.SLIDES_ID,
    link: `https://slides.com/`,
    icon: SlideIcon,
    name: "slides.com",
  },
]
  .filter((socialMedia) => socialMedia.id !== "")
  .map((socialMedia) => ({
    ...socialMedia,
    link: `${socialMedia.link}${socialMedia.id}`,
  }));
