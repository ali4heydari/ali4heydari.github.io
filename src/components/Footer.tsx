import React from "react";
import tw from "twin.macro";
import FacebookIcon from "mdi-react/FacebookIcon";
import TwitterIcon from "mdi-react/TwitterIcon";
import LinkedinIcon from "mdi-react/LinkedinIcon";
import InstagramIcon from "mdi-react/InstagramIcon";
import StackOverflowIcon from "mdi-react/StackOverflowIcon";
import GithubIcon from "mdi-react/GithubIcon";
import GitlabIcon from "mdi-react/GitlabIcon";
import { Logo } from "./Logo";
import { NavLink } from "./Header";
import { StringKeys } from "../utils/enums";
import { useTranslation } from "react-i18next";

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
export function Footer() {
  const { t } = useTranslation();
  const links = [
    {
      text: "About",
      href: "#about",
    },
    {
      text: "Skills",
      href: "#skills",
    },
    {
      text: "Projects",
      href: "#projects",
    },
    {
      text: "Contact me",
      href: "#contact-me",
    },
    {
      text: "Blog",
      href: "#blog",
    },
  ];

  const socialMedias = [
    {
      link: "https://facebook.com",
      icon: FacebookIcon,
    },
    {
      link: "https://twitter.com",
      icon: TwitterIcon,
    },
    {
      link: "https://instagram.com",
      icon: InstagramIcon,
    },
    {
      link: "https://linkedin.com",
      icon: LinkedinIcon,
    },
    {
      link: "https://github.com",
      icon: GithubIcon,
    },
    {
      link: "https://gitlab.com",
      icon: GitlabIcon,
    },
    {
      link: "https://stackovergflow.com",
      icon: StackOverflowIcon,
    },
  ];

  return (
    <div css={tw`bg-gray-900 text-gray-100 relative`}>
      <div css={tw`max-w-screen-xl mx-auto py-20 lg:py-24`}>
        <div css={tw`flex items-center justify-center flex-col px-8`}>
          <div css={tw`flex items-center justify-center md:justify-start`}>
            {/*<Logo css={tw`w-8`} />*/}
            <h5 css={tw`ml-2 text-2xl font-black tracking-wider`}>
              {/*{"ali4heydari"}*/}
            </h5>
          </div>
          <div
            css={tw`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`}
          >
            {links.map((link) => (
              <a
                css={tw`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`}
                href={link.href}
                key={link.href}
              >
                {link.text}
              </a>
            ))}
          </div>
          <div css={tw`mt-10`}>
            {socialMedias.map((media) => {
              const Icon = tw(media.icon)`w-5 h-5`;

              return (
                <a
                  key={media.link}
                  css={tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
                  href="https://facebook.com"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
          <CopyrightText>
            &copy; Copyright 2020, {t(StringKeys.WEBSITE_NAME)}. All Rights
            Reserved.
          </CopyrightText>
        </div>
      </div>
    </div>
  );
}
