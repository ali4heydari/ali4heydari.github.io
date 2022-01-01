import Timeline from "src/components/ui/Timeline";
import Container from "src/components/ui/Container";
import TitleSection from "src/components/ui/TitleSection";
import React from "react";
import type { Education } from ".contentlayer/types";

const Educations: React.FC<{
  allEducation: Education[];
}> = ({ allEducation }) => {
  return (
    <Container section maxWidth="lg">
      <TitleSection title={"Education"} subtitle={"My Qualification"} />

      {allEducation.map(
        ({ _id, startDate, endDate, degree, university, body: { code } }) => {
          return (
            <Timeline
              key={_id}
              title={university}
              subtitle={degree}
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
