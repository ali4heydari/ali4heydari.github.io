import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { StyledProps } from "../../ui/TitleSection/styles";

export const MainNav = styled.nav`
  ${tw`flex flex-wrap items-center justify-center w-full`};
  a {
    ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
  }
`;

export const MainNavItem = motion.custom(styled(Link)`
  ${tw`relative text-indigo-900 border-b border-transparent hover:text-indigo-900 ml-3 sm:ml-8 mt-3 sm:mt-0`};
  width: max-content;

  &.active {
    ${tw`border-primary-400`};
  }

  &:before {
    ${tw`absolute w-full bg-primary-400 h-px left-0 invisible`};
    content: "";
    bottom: -1px;
    transform: scaleX(0);
    transition: 0.2s;
  }

  &:hover:before {
    ${tw`visible`};
    transform: scaleX(1);
  }
`);
