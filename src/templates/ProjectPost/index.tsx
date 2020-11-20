import { graphql } from "gatsby";
import Link from "gatsby-link";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Container from "components/ui/Container";
import TitleSection from "components/ui/TitleSection";
import React from "react";
import { useTranslation } from "react-i18next";
import { MDXRenderer } from "gatsby-plugin-mdx";

import * as Styled from "./styles";
import { Chip } from "../../components/ui/Chip";
import { MarkDown } from "../../components/utils/MarkDown";

interface Project {
  body: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    tags: string[];
  };
}

interface Props {
  data: {
    mdx: Project;
  };
  pageContext: {
    slug: string;
    next: Project;
    previous: Project;
    id: string;
    siteUrl: string;
  };
}

const ProjectPost: React.FC<Props> = ({ data, pageContext }) => {
  const project = data.mdx;
  const { i18n } = useTranslation();
  const { previous, next, slug, id, siteUrl } = pageContext;

  return (
    <Layout>
      <SEO title={project.frontmatter.title} />
      <Container section maxWidth="lg">
        <TitleSection
          title={`${new Date(project.frontmatter.startDate).toLocaleDateString(
            i18n.language,
            {
              year: "numeric",
              month: "short",
            }
          )} - ${new Date(project.frontmatter.endDate).toLocaleDateString(
            i18n.language,
            {
              year: "numeric",
              month: "short",
            }
          )}`}
          subtitle={project.frontmatter.title}
        />
        <Styled.Description>
          {project.frontmatter.description}
        </Styled.Description>
        <MarkDown content={project.body} />
        <Container section maxWidth="sm">
          <Styled.Tags>
            <Styled.TagsHeader>Tech Stack:</Styled.TagsHeader>
            {project.frontmatter.tags.map((tag) => (
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
        <Styled.DisqusProject
          config={{
            url: `${siteUrl}/${slug}`,
            identifier: id,
            title: project.frontmatter.title,
          }}
        />
      </Container>
    </Layout>
  );
};

export default ProjectPost;

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
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
