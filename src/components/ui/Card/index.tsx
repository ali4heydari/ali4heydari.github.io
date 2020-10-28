import React, { ComponentType } from "react";
import * as Styled from "./styles";

interface CardProps {
  icon: React.ReactElement | ComponentType<any>;
  title: string;
  description: React.ReactElement | string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
}: CardProps) => {
  return (
    <Styled.CardRoot>
      <Styled.CardIcon>{icon}</Styled.CardIcon>
      <Styled.CardContent>
        <Styled.CardTitle>{title}</Styled.CardTitle>
        <Styled.CardDescription>{description}</Styled.CardDescription>
      </Styled.CardContent>
    </Styled.CardRoot>
  );
};
