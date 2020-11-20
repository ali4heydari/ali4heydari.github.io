import { useStaticQuery, graphql } from "gatsby";

import Timeline from "components/ui/Timeline";
import Container from "components/ui/Container";
import TitleSection from "components/ui/TitleSection";
import React from "react";
import { SectionTitle } from "definitions";
import { MDXRenderer } from "gatsby-plugin-mdx";

interface Education {
  node: {
    id: string;
    body: string;
    frontmatter: {
      university: string;
      degree: string;
      startDate: string;
      endDate: string;
    };
  };
}

const Education: React.FC = () => {
  const { mdx, allMdx } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { category: { eq: "education section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMdx(
        filter: { frontmatter: { category: { eq: "education" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            body
            frontmatter {
              university
              degree
              startDate
              endDate
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = mdx.frontmatter;
  const education: Education[] = allMdx.edges;

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
            content={<MDXRenderer>{body}</MDXRenderer>}
            startDate={startDate}
            endDate={endDate}
          />
        );
      })}
    </Container>
  );
};

export default Education;
