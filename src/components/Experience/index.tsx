import TimelineItem from "src/components/ui/Timeline";
import Container from "src/components/ui/Container";
import TitleSection from "src/components/ui/TitleSection";
import React from "react";
import { Experience } from ".contentlayer/types";

const TimeLine: React.FC<{
  allExperiences: Experience[];
}> = ({ allExperiences }) => {
  return (
    <Container section maxWidth="lg">
      <TitleSection
        title={"Companies and university"}
        subtitle={"My Experience"}
      />

      {allExperiences.map(
        ({ company, position, body: { code }, startDate, endDate, _id }) => (
          <TimelineItem
            key={_id}
            title={company}
            subtitle={position}
            code={code}
            startDate={startDate}
            endDate={endDate}
          />
        )
      )}
    </Container>
  );
};

export default TimeLine;
