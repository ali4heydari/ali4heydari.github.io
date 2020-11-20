import { useStaticQuery, graphql } from "gatsby";

import Container from "components/ui/Container";
import TitleSection from "components/ui/TitleSection";
import ProgressBar from "components/ui/ProgressBar";

import { SectionTitle } from "definitions";

import * as Styled from "./styles";
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
  const { mdx, allMdx } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { category: { eq: "skills section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMdx(
        filter: { frontmatter: { category: { eq: "skills" } } }
        sort: { fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              percentage
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = mdx.frontmatter;
  const skills: Skill[] = allMdx.edges;

  return (
    <Container section maxWidth="lg">
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      <Styled.Skills>
        {skills.map((item) => {
          const {
            id,
            frontmatter: { title, percentage },
          } = item.node;

          return (
            <Styled.Skill key={id}>
              <ProgressBar title={title} percentage={percentage} />
            </Styled.Skill>
          );
        })}
      </Styled.Skills>
    </Container>
  );
};

export default Skills;
