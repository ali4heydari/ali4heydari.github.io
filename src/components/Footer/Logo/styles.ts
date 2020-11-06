import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "gatsby";

export const Logo = styled(Link)`
  ${tw`flex items-center mr-auto text-interactive hover:text-interactive`};
`;

export const Text = styled.h1`
  ${tw`text-lg`};
`;

export const Image = styled.figure`
  ${tw`w-16 h-16 mr-3 border border-primary rounded-full`};

  img {
    ${tw`border-4 border-white rounded-full`};
  }
`;
