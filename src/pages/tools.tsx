import Layout from "components/Layout";
import React from "react";
import Container from "../components/ui/Container";
import TitleSection from "../components/ui/TitleSection";
import { graphql, useStaticQuery } from "gatsby";
import { MarkDown } from "../components/utils/MarkDown";
import styled from "styled-components";
import tw from "twin.macro";
import { Disqus } from "gatsby-plugin-disqus";

const DisqusComponent = styled(Disqus)`
  ${tw`w-full mt-3`}
`;
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
        <DisqusComponent
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
