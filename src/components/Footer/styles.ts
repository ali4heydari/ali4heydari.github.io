import styled from "styled-components";
import tw from "twin.macro";
import { StyledProps } from "../ui/TitleSection/styles";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export const Footer = styled.footer`
  ${tw`border-t border-gray-200 py-4`};
`;

export const Links = styled.div`
  ${tw`flex items-center justify-center w-full`};

  a {
    ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
  }
`;

export const Link = styled(OutboundLink)`
  ${tw`cursor-pointer inline-block transition duration-300 mx-4`};
  ${tw`text-primary-100 hover:text-primary-500`};
`;

export const Separator = styled.h2<StyledProps>`
  ${tw`relative w-2 h-8 mb-2 mt-2`};
  ${({ center }) => center && tw`mx-auto`};

  &:before {
    content: "";
    ${tw`bg-indigo-500 h-full w-px absolute left-0`};
  }

  &:after {
    content: "";
    ${tw`bg-primary-400 h-6 w-px absolute ml-1`};
  }
`;
