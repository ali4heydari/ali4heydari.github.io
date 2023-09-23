import Container from "src/components/Container";
import TitleSection from "src/components/TitleSection";
import React from "react";
import Timeline from "../../components/Timeline";
import type { Experience } from ".contentlayer/generated";

const Educations: React.FC<
  React.PropsWithChildren<{
    allExperiences: Experience[];
    rootClassName?: string;
  }>
> = ({ allExperiences, rootClassName }) => {
  const events = allExperiences
    .map(
      ({
        position: subtitle,
        company: title,
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
    <section className={rootClassName}>
      <TitleSection center>Experiences</TitleSection>
      <Timeline events={events} />
    </section>
  );
};

export default Educations;
