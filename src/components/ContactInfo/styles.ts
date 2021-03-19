import styled from "styled-components";
import tw from "twin.macro";
import { GatsbyImageProps, GatsbyImage } from "gatsby-plugin-image";
import {
  OutboundLink,
  OutboundLinkProps,
} from "gatsby-plugin-google-analytics";
import React from "react";

export const Image = styled(GatsbyImage)<GatsbyImageProps>`
  ${tw`w-full`}
`;

export const Links = styled.div`
  ${tw`mt-8 flex flex-wrap items-center justify-center w-full`};

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
