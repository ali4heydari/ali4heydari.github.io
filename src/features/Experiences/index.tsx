import TitleSection from "src/components/TitleSection";
import React from "react";
import Timeline from "../../components/Timeline";
import type { Experience } from ".contentlayer/generated";
import { TimelineProps } from "../../components/Timeline/@types";

const Educations: React.FC<
  React.PropsWithChildren<{
    allExperiences: Experience[];
    rootClassName?: string;
  }>
> = ({ allExperiences, rootClassName }) => {
  const events = allExperiences
    .map<TimelineProps["events"][number]>(
      ({
        position: subtitle,
        company: title,
        startDate,
        endDate,
        body: { html },
        stack,
        tags,
      }) => ({
        title,
        subtitle,
        startDate,
        endDate,
        children: <div dangerouslySetInnerHTML={{ __html: html }} />,
        topTags: tags,
        bottomTags: stack,
      }),
    )
    .reverse();

  return (
    <section className={rootClassName}>
      <TitleSection center>Experiences</TitleSection>
      <Timeline events={events} />
    </section>
  );
};

export default Educations;
