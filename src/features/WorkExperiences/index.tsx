import Timeline from "src/components/Timeline";
import Container from "src/components/Container";
import TitleSection from "src/components/TitleSection";
import React from "react";
import type { Experience } from ".contentlayer/types";

const Educations: React.FC<{
  allExperiences: Experience[];
}> = ({ allExperiences }) => {
  return (
    <Container section maxWidth="lg">
      <TitleSection title={"Education"} subtitle={"My Qualification"} />

      {allExperiences.map(
        ({ _id, startDate, endDate, position, company, body: { code } }) => {
          return (
            <Timeline
              key={_id}
              title={company}
              subtitle={position}
              code={code}
              startDate={startDate}
              endDate={endDate}
            />
          );
        }
      )}
    </Container>
  );
};

export default Educations;
