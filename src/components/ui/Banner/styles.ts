import styled from "styled-components";
import tw from "twin.macro";
import QuotesLeftIconBase from "mdi-react/FormatQuoteOpenIcon";
import SvgDecoratorBlob1 from "mdi-react/DragIcon";
import {
  OutboundLink,
  OutboundLinkProps,
} from "gatsby-plugin-google-analytics";
import GatsbyImage, { GatsbyImageProps } from "gatsby-image";
import * as React from "react";

export const Banner = styled.section`
  ${tw`bg-secondary border-b border-indigo-100 `};
`;

export const Content = styled.p`
  ${tw`mb-8`};
`;

export const ContentWithVerticalPadding = styled.div`
  ${tw`py-20 lg:py-24`}
`;
export const SectionDescription = styled.p`
  ${tw`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-primary max-w-xl`}
`;
export const SectionHeading = styled.h2`
  ${tw`text-left text-4xl sm:text-5xl font-black tracking-wide`}
`;

export const Offsetbackground = styled.div`
  ${tw`absolute inset-0 bg-primary rounded xl:-mb-8`}
`;
export const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-disabled fill-current`}
`;
export const Testimonial = styled.div`
  ${tw`max-w-sm rounded-b md:rounded-none relative sm:absolute bottom-0 inset-x-0 z-20 px-8 py-6 sm:px-10 sm:py-8 bg-purple-500 text-white font-medium transform md:-translate-x-32 text-sm leading-relaxed md:-mr-16 xl:mr-0`}
`;
export const QuotesLeftIcon = styled(QuotesLeftIconBase)`
  ${tw`w-16 h-16 md:w-12 md:h-12 absolute top-0 left-0 text-disabled md:text-error transform translate-x-1 md:-translate-x-1/2 md:-translate-y-5 opacity-10 md:opacity-100`}
`;
export const Quote = styled.blockquote``;

export const ImageColumn = styled.div`
  ${tw`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32 max-w-full`}
`;
export const ImageContainer = styled.div`
  ${tw`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`}
`;

export const Row = styled.div`
  ${tw`flex flex-col w-full lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`}
`;
export const TextColumn = styled.div`
  ${tw`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`}
`;
export const Heading = styled(SectionHeading)`
  ${tw`text-left text-primary leading-snug xl:text-6xl`}
`;
export const Description = styled(SectionDescription)`
  ${tw`mt-4 lg:text-base text-disabled max-w-lg`}
`;

export const Button = styled(OutboundLink)<{ rounded?: boolean }>`
  ${tw`px-8 font-bold rounded bg-purple-500 text-white hocus:bg-purple-800 hocus:text-white focus:ring focus:outline-none transition duration-300`}
  ${tw`mt-8 inline-block w-56 tracking-wide text-center py-5`}
  ${({ rounded }) => rounded && tw`rounded-full`}
`;

export const Image = styled(GatsbyImage)<GatsbyImageProps>`
  ${tw`max-w-full w-96 rounded-t sm:rounded relative z-20`}
`;

export const Links = styled.div`
  ${tw`flex flex-wrap items-center justify-center w-full mt-5`};

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
