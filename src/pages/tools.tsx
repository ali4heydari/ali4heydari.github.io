import Layout from "components/Layout";
import React from "react";
import Container from "../components/ui/Container";
import TitleSection from "../components/ui/TitleSection";
import { graphql, useStaticQuery } from "gatsby";
import { MarkDown } from "../components/utils/MarkDown";

const ToolsPage: React.FC = () => {
  const {
    mdx: { body, frontmatter },
  } = useStaticQuery(graphql`
    query Tools {
      mdx(frontmatter: { category: { eq: "tools section" } }) {
        body
        frontmatter {
          title
          subtitle
        }
      }
    }
  `);

  return (
    <Layout title={frontmatter.title}>
      <Container section maxWidth="lg">
        <TitleSection
          title={frontmatter.title}
          subtitle={frontmatter.subtitle}
        />
        <MarkDown content={body} />
      </Container>
    </Layout>
  );
};

export default ToolsPage;
