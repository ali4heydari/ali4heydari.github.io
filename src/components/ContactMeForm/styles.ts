import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "../ui/Section/styles";
import {
  OutboundLink,
  OutboundLinkProps,
} from "gatsby-plugin-google-analytics";
import * as React from "react";

export const SubheadingBase = styled.h5`
  ${tw`font-bold text-primary`}
`;
export const PrimaryButtonBase = styled(OutboundLink)<
  OutboundLinkProps & React.HTMLProps<HTMLAnchorElement>
>`
  ${tw`px-8 py-3 text-center font-bold rounded bg-purple-500 text-white hocus:bg-purple-800 hocus:text-white focus:shadow-outline focus:outline-none transition duration-300`}
`;

export const Container = styled.div`
  ${tw`relative`}
`;
export const TwoColumn = styled.div`
  ${tw`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`}
`;
export const Column = styled.div`
  ${tw`w-full max-w-md mx-auto md:max-w-none md:mx-0`}
`;
export const ImageColumn = styled(Column)`
  ${tw`md:w-5/12 flex-shrink-0 h-80 md:h-auto`}
`;

export const TextColumn = styled(Column)<{ textOnLeft: boolean }>`
  ${tw`md:w-7/12 mt-16 md:mt-0`}
  ${({ textOnLeft }) =>
    textOnLeft
      ? tw`md:mr-12 lg:mr-16 md:order-first`
      : tw`md:ml-12 lg:ml-16 md:order-last`}
`;

export const TextContent = styled.div`
  ${tw`lg:py-8 text-center md:text-left`}
`;

export const Subheading = styled(SubheadingBase)`
  ${tw`text-center md:text-left`}
`;
export const Heading = styled(SectionHeading)`
  ${tw`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`}
`;
export const Description = styled.p`
  ${tw`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary`}
`;

export const Form = styled.form`
  ${tw`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`}
`;
export const Input = styled.input`
  ${tw`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary`}
`;
export const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;

export const SubmitButton = styled(PrimaryButtonBase)`
  ${tw`inline-block mt-8`}
`;
