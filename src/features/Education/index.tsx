import type { PropsWithChildren } from "react";
import React from "react";
import TitleSection from "src/components/atoms/TitleSection";
import Timeline from "src/components/organism/Timeline";
import type { Education } from ".contentlayer/generated";

const Educations = ({
  allEducation,
  rootClassName,
}: PropsWithChildren<{
  allEducation: Education[];
  rootClassName?: string;
}>) => {
  const events = allEducation
    .map(({ title, subtitle, startDate, endDate, tags, body: { html } }) => ({
      title,
      subtitle,
      startDate,
      endDate,
      topTags: tags,
      children: <div dangerouslySetInnerHTML={{ __html: html }} />,
    }))
    .reverse();

  return (
    <div className={rootClassName}>
      <TitleSection center>Education and teaching</TitleSection>
      <Timeline pingLastEvent={false} events={events} />
    </div>
  );
};

export default Educations;
