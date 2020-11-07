import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "gatsby";
import { motion } from "framer-motion";

export const MainNav = styled.nav`
  ${tw`flex flex-wrap items-center justify-center w-full`};
  a {
    ${tw`text-interactive hover:text-interactive mx-2`};
  }
`;

export const MainNavItem = motion.custom(styled(Link)`
  ${tw`relative text-interactive border-b border-transparent hover:text-interactive ml-3 sm:ml-8 mt-3 sm:mt-0`};
  width: max-content;

  &.active {
    ${tw`border-primary`};
  }

  &:before {
    ${tw`absolute w-full bg-primary h-px left-0 invisible`};
    content: "";
    bottom: -1px;
    transform: scaleX(0);
    transition: 0.2s;
  }

  &:hover:before {
    ${tw`visible`};
    ${tw`bg-inverse`};
    transform: scaleX(1);
  }
`);
