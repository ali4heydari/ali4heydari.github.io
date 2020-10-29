import styled from "styled-components";
import tw from "twin.macro";

export interface StyledProps {
  section?: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

const screenWidths = {
  sm: tw`max-w-screen-sm`,
  md: tw`max-w-screen-md`,
  lg: tw`max-w-screen-lg`,
  xl: tw`max-w-screen-xl`,
};

export const Container = styled.div<StyledProps>`
  ${({ maxWidth }) => {
    return maxWidth ? screenWidths[maxWidth] : null;
  }}
  ${tw`flex flex-wrap w-full mx-auto p-5`};
  ${({ section }) => section && tw`py-8 sm:py-16`};
`;
