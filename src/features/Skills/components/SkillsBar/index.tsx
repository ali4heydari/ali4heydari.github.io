import Container from "src/components/Container";
import TitleSection from "src/components/TitleSection";
import ProgressBar from "src/components/ProgressBar";
import styles from "./SkillsBar.module.css";
import { SectionTitle } from "src/definitions";

import React from "react";

interface Skill {
  node: {
    id: string;
    frontmatter: {
      title: string;
      percentage: number;
    };
  };
}

const Skills: React.FC = () => {
  // @ts-ignore
  const sectionTitle: SectionTitle = {};
  const skills: Skill[] = [];

  return (
    <Container section maxWidth="lg">
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      <div className={styles.skills}>
        {skills.map((item) => {
          const {
            id,
            frontmatter: { title, percentage },
          } = item.node;

          return (
            <div className={styles.skill} key={id}>
              <ProgressBar title={title} percentage={percentage} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Skills;
