import Timeline from "src/components/ui/Timeline";
import Container from "src/components/ui/Container";
import TitleSection from "src/components/ui/TitleSection";
import React from "react";

import { SectionTitle } from "src/definitions";

interface Experience {
  node: {
    id: string;
    body: string;
    frontmatter: {
      company: string;
      position: string;
      startDate: string;
      endDate: string;
    };
  };
}

const Experience: React.FC = () => {
  // @ts-ignore
  const sectionTitle: SectionTitle = {};
  const experiences: Experience[] = [];

  return (
    <Container section maxWidth="lg">
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
      />

      {experiences.map((item) => {
        const {
          id,
          body,
          frontmatter: { company, position, startDate, endDate },
        } = item.node;

        return (
          <Timeline
            key={id}
            title={company}
            subtitle={position}
            content={body}
            startDate={startDate}
            endDate={endDate}
          />
        );
      })}
    </Container>
  );
};

export default Experience;
