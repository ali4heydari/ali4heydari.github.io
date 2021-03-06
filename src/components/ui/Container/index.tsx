import * as Styled from "./styles";
import React from "react";

interface Props extends Styled.StyledProps {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ section, children, maxWidth }) => (
  <Styled.Container maxWidth={maxWidth} section={section}>
    {children}
  </Styled.Container>
);

export default Container;
