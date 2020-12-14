import Layout from "components/Layout";
import React from "react";
import Container from "../components/ui/Container";
import TitleSection from "../components/ui/TitleSection";
import { graphql, useStaticQuery } from "gatsby";
import { MarkDown } from "../components/utils/MarkDown";
import { CommentThread } from "../components/ui/CommentThread";

const ToolsPage: React.FC = () => {
  const {
    mdx: { body, frontmatter },
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(graphql`
    query Tools {
      mdx(frontmatter: { category: { eq: "tools section" } }) {
        body
        frontmatter {
          title
          subtitle
        }
      }
      site {
        siteMetadata {
          siteUrl
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
        <CommentThread
          config={{
            url: `${siteUrl}/tools`,
            identifier: "tools",
            title: frontmatter.title,
          }}
        />
      </Container>
    </Layout>
  );
};

export default ToolsPage;
