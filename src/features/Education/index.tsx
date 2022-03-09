import Timeline from "src/components/Timeline";
import Container from "src/components/Container";
import TitleSection from "src/components/TitleSection";
import React from "react";
import type { Education } from ".contentlayer/generated";

const Educations: React.FC<{
  allEducation: Education[];
}> = ({ allEducation }) => {
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
      })
    )
    .reverse();

  return (
    <Container section maxWidth="lg">
      <TitleSection title={"Education"} subtitle={"My Qualification"} />
      <Timeline events={events} />
    </Container>
  );
};

export default Educations;
