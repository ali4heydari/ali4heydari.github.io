import styled from "styled-components";
import tw from "twin.macro";
import { StyledProps } from "../ui/TitleSection/styles";
import {
  OutboundLink,
  OutboundLinkProps,
} from "gatsby-plugin-google-analytics";
import * as React from "react";

export const Footer = styled.footer`
  ${tw`border-t border-gray-200 py-4`};
`;

export const Links = styled.div`
  ${tw`flex flex-wrap items-center justify-center w-full`};

  a {
    ${tw`text-interactive hover:text-interactive mx-2`};
  }
`;

export const Link = styled(OutboundLink)<
  OutboundLinkProps & React.HTMLProps<HTMLAnchorElement>
>`
  ${tw`cursor-pointer inline-block transition duration-300 mx-4`};
  ${tw`text-primary hover:text-primary`};
`;

export const Separator = styled.h2<StyledProps>`
  ${tw`relative w-2 h-8 mb-2 mt-2`};
  ${({ center }) => center && tw`mx-auto`};

  &:before {
    content: "";
    ${tw`bg-inverse h-full w-px absolute left-0`};
  }

  &:after {
    content: "";
    ${tw`bg-inverse h-6 w-px absolute ml-1`};
  }
`;
