import styled from "styled-components";
import tw from "twin.macro";

export interface StyledProps {
  center?: boolean;
}

export const TitleSection = styled.div`
  ${tw`flex flex-col w-full`};
`;

export const Title = styled.h2<StyledProps>`
  ${tw`uppercase mb-4 text-lg font-bold w-full text-left`};
  ${({ center }) => center && tw`text-center`};
`;

export const SubTitle = styled.h4<StyledProps>`
  ${tw`text-xs text-interactive w-full text-left`};
  ${({ center }) => center && tw`text-center`};
`;

export const Separator = styled.h2<StyledProps>`
  ${tw`relative w-2 h-8 mb-6 -mt-2`};
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
