import { graphql } from "gatsby";
import Link from "gatsby-link";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Container from "components/ui/Container";
import TitleSection from "components/ui/TitleSection";
import React from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./styles";
import { Chip } from "../../components/ui/Chip";
import { MarkDown } from "../../components/utils/MarkDown";
import { CommentThread } from "../../components/ui/CommentThread";

interface BlogPost {
  body: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    description: string;
    date: string;
    tags: string[];
  };
}

interface Props {
  data: {
    mdx: BlogPost;
  };
  pageContext: {
    slug: string;
    next: BlogPost;
    previous: BlogPost;
    id: string;
    siteUrl: string;
  };
}

const BlogPost: React.FC<Props> = ({ data, pageContext }) => {
  const blogPost = data.mdx;
  const { i18n } = useTranslation();
  const { previous, next, slug, id, siteUrl } = pageContext;

  return (
    <Layout>
      <SEO title={blogPost.frontmatter.title} />
      <Container section maxWidth="lg">
        <TitleSection
          title={`${new Date(blogPost.frontmatter.date).toLocaleDateString(
            i18n.language,
            {
              year: "numeric",
              month: "short",
            }
          )}`}
          subtitle={blogPost.frontmatter.title}
        />
        <Styled.Description>
          {blogPost.frontmatter.description}
        </Styled.Description>
        <MarkDown content={blogPost.body} />
        <Container section maxWidth="sm">
          <Styled.Tags>
            <Styled.TagsHeader>Tech Stack:</Styled.TagsHeader>
            {blogPost.frontmatter.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </Styled.Tags>
        </Container>
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
        <CommentThread
          config={{
            url: `${siteUrl}/${slug}`,
            identifier: id,
            title: blogPost.frontmatter.title,
          }}
        />
      </Container>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        description
        startDate
        endDate
        tags
      }
    }
  }
`;
