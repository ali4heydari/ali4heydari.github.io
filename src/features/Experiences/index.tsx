import Container from "src/components/Container";
import TitleSection from "src/components/TitleSection";
import React from "react";
import Timeline from "../../components/Timeline";
import MdxRenderer from "../../components/MdxRenderer";
import type { Experience } from ".contentlayer/types";

const Educations: React.FC<{
  allExperiences: Experience[];
}> = ({ allExperiences }) => {
  const events = allExperiences
    .map(
      ({
        position: subtitle,
        company: title,
        startDate,
        endDate,
        body: { code },
      }) => ({
        title,
        subtitle,
        startDate,
        endDate,
        children: <MdxRenderer code={code} />,
      })
    )
    .reverse();

  return (
    <Container section maxWidth="lg">
      <TitleSection
        title={"MY EXPERIENCE"}
        subtitle={"Companies and university"}
      />
      <Timeline events={events} />
    </Container>
  );
};

export default Educations;
