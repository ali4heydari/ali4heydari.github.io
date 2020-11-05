import * as Styled from "./styles";
import { useTranslation } from "react-i18next";
import React from "react";

interface Props {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  startDate: string;
  endDate: string;
}

const Timeline: React.FC<Props> = ({
  title,
  subtitle,
  content,
  startDate,
  endDate,
}) => {
  const { i18n } = useTranslation();

  return (
    <Styled.Timeline>
      <Styled.Point />
      <Styled.Details>
        <Styled.Date>
          {new Date(startDate).toLocaleDateString(i18n.language, {
            year: "numeric",
            month: "short",
          })}
          {" - "}
          {/* Dates after 2100 are assumed to be present */}
          {new Date(endDate).getFullYear() >= 2100
            ? "Present"
            : new Date(endDate).toLocaleDateString(i18n.language, {
                year: "numeric",
                month: "short",
              })}
        </Styled.Date>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
      </Styled.Details>
      <Styled.Content>{content}</Styled.Content>
    </Styled.Timeline>
  );
};

export default Timeline;
