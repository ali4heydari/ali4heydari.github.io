import Timeline from "src/components/ui/Timeline";
import Container from "src/components/ui/Container";
import TitleSection from "src/components/ui/TitleSection";
import React from "react";
import { SectionTitle } from "src/definitions";

const Education: React.FC = () => {
  // @ts-ignore
  const sectionTitle: SectionTitle = {};
  const education: Education[] = [];

  return (
    <Container section maxWidth="lg">
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
      />

      {education.map((item) => {
        const {
          id,
          body,
          frontmatter: { university, degree, startDate, endDate },
        } = item.node;

        return (
          <Timeline
            key={id}
            title={university}
            subtitle={degree}
            content={body}
            startDate={startDate}
            endDate={endDate}
          />
        );
      })}
    </Container>
  );
};

export default Education;
