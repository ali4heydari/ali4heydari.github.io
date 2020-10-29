import styled from "styled-components";
import tw from "twin.macro";

export const CardDescription = styled.p`
  ${tw`mt-1 sm:mt-4 font-medium text-primary-100 leading-loose`}
`;
export const CardTitle = styled.span`
  ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
`;
export const CardIcon = styled.span`
  ${tw`border text-center rounded-full p-1 flex-shrink-0`}
`;
export const CardContent = styled.span`
  ${tw`sm:ml-4 mt-4 sm:mt-2`}
`;
export const CardRoot = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
`;
