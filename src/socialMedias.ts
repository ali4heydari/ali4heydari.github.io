import SiteConfigs from "../SiteConfigs";
import EmailIcon from "mdi-react/EmailIcon";
import PhoneIcon from "mdi-react/PhoneIcon";
import FacebookIcon from "mdi-react/FacebookIcon";
import TwitterIcon from "mdi-react/TwitterIcon";
import InstagramIcon from "mdi-react/InstagramIcon";
import LinkedinIcon from "mdi-react/LinkedinIcon";
import GithubIcon from "mdi-react/GithubIcon";
import GitlabIcon from "mdi-react/GitlabIcon";
import SkypeIcon from "mdi-react/SkypeIcon";
import CalendarIcon from "mdi-react/CalendarIcon";
import SlideIcon from "mdi-react/SlideshowIcon";
import StackOverflowIcon from "mdi-react/StackOverflowIcon";

export const socialMedias = [
  {
    id: SiteConfigs.CONTACT_EMAIL,
    link: `mailto:`,
    name: "email",
    icon: EmailIcon,
  },
  {
    id: SiteConfigs.CONTACT_PHONE,
    name: "telephone",
    link: `tel:`,
    icon: PhoneIcon,
  },
  {
    id: SiteConfigs.FACEBOOK_ID,
    link: `https://facebook.com/`,
    name: "facebook",
    icon: FacebookIcon,
  },
  {
    id: SiteConfigs.TWITTER_ID,
    link: `https://twitter.com/`,
    name: "twitter",
    icon: TwitterIcon,
  },
  {
    id: SiteConfigs.INSTAGRAM_ID,
    link: `https://instagram.com/`,
    name: "instagram",
    icon: InstagramIcon,
  },
  {
    id: SiteConfigs.LINKEDIN_ID,
    link: `https://linkedin.com/in/`,
    name: "linkedin",
    icon: LinkedinIcon,
  },
  {
    id: SiteConfigs.GITHUB_ID,
    link: `https://github.com/`,
    name: "github",
    icon: GithubIcon,
  },
  {
    id: SiteConfigs.GITLAB_ID,
    link: `https://gitlab.com/`,
    icon: GitlabIcon,
    name: "gitlab",
  },
  {
    id: SiteConfigs.STACK_OVER_FLOW_ID,
    link: `https://stackoverflow.com/users/`,
    icon: StackOverflowIcon,
    name: "stackoverflow",
  },
  {
    id: SiteConfigs.SKYPE_INVITE_ID,
    link: `https://join.skype.com/invite/`,
    icon: SkypeIcon,
    name: "skype",
  },
  {
    id: SiteConfigs.CALENDLY_ID,
    link: `https://calendly.com/`,
    icon: CalendarIcon,
    name: "calendly",
  },
  {
    id: SiteConfigs.SLIDES_ID,
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
