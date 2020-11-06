import styled from "styled-components";
import tw from "twin.macro";
import { motion } from "framer-motion";

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
}

export const Button = motion.custom(styled.button<StyledProps>`
  outline: none !important;
  ${tw`py-2 px-8 rounded-full border border-primary text-interactive`};

  ${({ primary }) => (primary ? tw`bg-primary` : tw`text-interactive`)};

  ${({ block }) => block && tw`w-full`};
`);
