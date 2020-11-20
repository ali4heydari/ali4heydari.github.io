import { useStaticQuery, graphql } from "gatsby";

import Timeline from "components/ui/Timeline";
import Container from "components/ui/Container";
import TitleSection from "components/ui/TitleSection";
import React from "react";

import { SectionTitle } from "definitions";
import { MDXRenderer } from "gatsby-plugin-mdx";

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
  const { mdx, allMdx } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { category: { eq: "experiences section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMdx(
        filter: { frontmatter: { category: { eq: "experiences" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            body
            frontmatter {
              company
              position
              startDate
              endDate
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = mdx.frontmatter;
  const experiences: Experience[] = allMdx.edges;

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
            content={<MDXRenderer>{body}</MDXRenderer>}
            startDate={startDate}
            endDate={endDate}
          />
        );
      })}
    </Container>
  );
};

export default Experience;
