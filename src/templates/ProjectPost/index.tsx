import { graphql } from "gatsby";
import Link from "gatsby-link";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Container from "components/ui/Container";
import TitleSection from "components/ui/TitleSection";
import FormatHtml from "components/utils/FormatHtml";
import React from "react";

import * as Styled from "./styles";

interface Project {
  html: React.ReactNode;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    startDate: string;
    endDate: string;
  };
}

interface Props {
  data: {
    markdownRemark: Project;
  };
  pageContext: {
    slug: string;
    next: Project;
    previous: Project;
  };
}

const ProjectPost: React.FC<Props> = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container section maxWidth="lg">
        <TitleSection
          title={`${post.frontmatter.startDate} - ${post.frontmatter.endDate}`}
          subtitle={post.frontmatter.title}
        />
        <FormatHtml content={post.html} />
        <Styled.Links>
          <span>
            {previous && (
              <Link to={previous.fields.slug} rel="previous">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </span>
          <span>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </span>
        </Styled.Links>
      </Container>
    </Layout>
  );
};

export default ProjectPost;

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        startDate(formatString: "MMM DD, YYYY")
        endDate(formatString: "MMM DD, YYYY")
      }
    }
  }
`;
