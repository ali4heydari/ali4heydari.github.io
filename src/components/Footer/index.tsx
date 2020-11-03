import Container from "components/ui/Container";

import * as Styled from "./styles";
import React from "react";
import MainNav from "./MainNav";
import SiteConfigs from "../../../SiteConfigs";
import FacebookIcon from "mdi-react/FacebookIcon";
import TwitterIcon from "mdi-react/TwitterIcon";
import InstagramIcon from "mdi-react/InstagramIcon";
import LinkedinIcon from "mdi-react/LinkedinIcon";
import GithubIcon from "mdi-react/GithubIcon";
import GitlabIcon from "mdi-react/GitlabIcon";
import EmailIcon from "mdi-react/EmailIcon";
import PhoneIcon from "mdi-react/PhoneIcon";
import StackOverflowIcon from "mdi-react/StackOverflowIcon";
import tw from "twin.macro";
import styled from "styled-components";

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

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container maxWidth="lg">
      <Styled.Links>
        {socialMedias.map((media) => {
          const Icon = styled(media.icon)`
            ${tw`w-5 h-5`}
          `;

          return (
            <Styled.Link
              key={media.link}
              href={media.link}
              aria-label={`link to authors'${media.name} account`}
            >
              <Icon />
            </Styled.Link>
          );
        })}
      </Styled.Links>
      <Styled.Separator center />
      <MainNav />
    </Container>
  </Styled.Footer>
);

export default Footer;
