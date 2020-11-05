import styled from "styled-components";
import tw from "twin.macro";
import GatsbyImage, { GatsbyImageProps } from "gatsby-image";

export const ContactInfoItem = styled.div`
  ${tw`w-full sm:w-1/3`};
`;

export const Image = styled(GatsbyImage)<GatsbyImageProps>`
  ${tw`w-full`}
`;
