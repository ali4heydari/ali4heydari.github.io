import tw from "twin.macro";
import { Card } from "../Card";
import React from "react";
import * as Styled from "./styles";

interface SectionProps {
  id?: string;
  description?: string;
  subheading?: string;
  children?: React.ReactChildren;
}
export const Section: React.FC<SectionProps> = ({
  id,
  description,
  subheading,
  children,
}: SectionProps) => {
  return (
    <div css={tw`relative`}>
      <Styled.SectionContainer
        css={tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
      >
        {subheading ? (
          <Styled.SectionSubheading>{subheading}</Styled.SectionSubheading>
        ) : null}
        <Styled.SectionHeading
          css={tw`text-4xl sm:text-5xl font-black tracking-wide text-center w-full`}
        >
          Technical <span css={tw`text-primary-500`}>Skills</span>
        </Styled.SectionHeading>
        {description ? (
          <Styled.SectionDescription
            css={tw`w-full text-center mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-primary-100 max-w-xl`}
          >
            {description}
          </Styled.SectionDescription>
        ) : null}
        {children}
      </Styled.SectionContainer>
      {/*<div*/}
      {/*  css={tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}*/}
      {/*/>*/}
    </div>
  );
};
