import styled from "styled-components";
import tw from "twin.macro";

// TODO fix dark and light
export interface StyledProps {
  dark?: boolean;
}

export const ChipRoot = styled.div<StyledProps>`
  ${tw`inline justify-center items-center m-1 font-medium px-1 py-0 bg-white rounded-full border`}
  ${({ dark }) =>
    !dark ? tw`text-green-700 bg-green-100 border-green-300` : null}
`;
export const ChipContent = styled.a`
  ${tw`table-cell text-xs font-normal leading-none max-w-full flex-initial`}
`;
