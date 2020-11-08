import * as Styled from "./styles";
import { StyledProps } from "./styles";
import React from "react";

interface Props extends StyledProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const TitleSection: React.FC<Props> = ({ center, title, subtitle }) => (
  <Styled.TitleSection>
    {subtitle && <Styled.SubTitle center={center}>{title}</Styled.SubTitle>}
    <Styled.Title center={center}>{subtitle}</Styled.Title>
    <Styled.Separator center={center} />
  </Styled.TitleSection>
);

export default TitleSection;
