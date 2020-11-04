import tw from "twin.macro";
import React from "react";
import FacebookIcon from "mdi-react/FacebookIcon";
import TwitterIcon from "mdi-react/TwitterIcon";
import InstagramIcon from "mdi-react/InstagramIcon";
import LinkedinIcon from "mdi-react/LinkedinIcon";
import GithubIcon from "mdi-react/GithubIcon";
import GitlabIcon from "mdi-react/GitlabIcon";
import EmailIcon from "mdi-react/EmailIcon";
import PhoneIcon from "mdi-react/PhoneIcon";
import StackOverflowIcon from "mdi-react/StackOverflowIcon";
import SiteConfigs from "../../SiteConfigs";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export function SocialMedias({ isGray }: { isGray?: boolean }) {
  const socialMedias = [
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
  ]
    .filter((socialMedia) => socialMedia.id !== "")
    .map((socialMedia) => ({
      ...socialMedia,
      link: `${socialMedia.link}${socialMedia.id}`,
    }));

  return (
    <div css={tw`mt-10 flex flex-wrap justify-center`}>
      {socialMedias.map((media) => {
        const Icon = tw(media.icon)`w-5 h-5`;

        return (
          <OutboundLink
            key={media.link}
            css={[
              tw`cursor-pointer inline-block transition duration-300 mx-4`,
              isGray
                ? tw`text-gray-100 hover:text-gray-500`
                : tw`text-primary-100 hover:text-primary-500 `,
            ]}
            href={media.link}
            aria-label={`link to authors'${media.name} account`}
          >
            <Icon />
          </OutboundLink>
        );
      })}
    </div>
  );
}