import styled from "styled-components";
import tw from "twin.macro";

export const SectionContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;

export const SectionDescription = styled.p`
  ${tw`mb-10 w-full text-center mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl`}
`;

export const SectionHeading = styled.h2`
  ${tw`text-4xl sm:text-5xl font-black tracking-wide text-center w-full`}
`;

export const SectionSubheading = styled.h5`
  ${tw`font-bold text-primary-500 mb-4`}
`;
