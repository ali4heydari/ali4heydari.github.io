import Layout from "components/Layout";
import React from "react";
import Container from "../components/ui/Container";
import TitleSection from "../components/ui/TitleSection";
import FormatHtml, { MarkDown } from "../components/utils/FormatHtml";
import { graphql, useStaticQuery } from "gatsby";

const ToolsPage: React.FC = () => {
  const {
    markdownRemark: { html, frontmatter },
  } = useStaticQuery(graphql`
    query Tools {
      markdownRemark(frontmatter: { category: { eq: "tools section" } }) {
        html
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
        <MarkDown content={html} />
      </Container>
    </Layout>
  );
};

export default ToolsPage;
