import React from "react";
import * as Styled from "./styles";

interface ChipProps {
  href?: string;
  children?: React.ReactChildren;
}

export const Chip: React.FC<ChipProps> = ({ children, href }: ChipProps) => {
  return (
    <Styled.ChipRoot>
      <Styled.ChipContent href={href}>{children}</Styled.ChipContent>
    </Styled.ChipRoot>
  );
};
