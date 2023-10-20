import Timeline from "src/components/organism/Timeline";
import TitleSection from "src/components/atoms/TitleSection";
import React from "react";
import type { Education } from ".contentlayer/generated";

const Educations: React.FC<
  React.PropsWithChildren<{
    allEducation: Education[];
  }>
> = ({ allEducation }) => {
  const events = allEducation
    .map(
      ({
        degree: subtitle,
        university: title,
        startDate,
        endDate,
        body: { html },
      }) => ({
        title,
        subtitle,
        startDate,
        endDate,
        children: <div dangerouslySetInnerHTML={{ __html: html }} />,
      }),
    )
    .reverse();

  return (
    <div>
      <TitleSection>Education</TitleSection>
      <Timeline events={events} />
    </div>
  );
};

export default Educations;
