import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Link from "gatsby-link";
import { motion } from "framer-motion";
import React from "react";
import Container from "components/ui/Container";
import TitleSection from "components/ui/TitleSection";
import { useTranslation } from "react-i18next";
import { SectionTitle, ImageSharpFluid } from "definitions";

import * as Styled from "./styles";
import { Chip } from "../ui/Chip";

interface Project {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      description: string;
      startDate: string;
      endDate: string;
      tags: string[];
      cover: {
        childImageSharp: {
          fluid: ImageSharpFluid;
        };
      };
    };
  };
}

const Projects: React.FC = () => {
  const { i18n } = useTranslation();
  const { mdx, allMdx } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { category: { eq: "projects section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMdx(
        filter: {
          frontmatter: { category: { eq: "project" }, published: { eq: true } }
        }
        sort: { fields: frontmatter___endDate, order: DESC }
      ) {
        edges {
          node {
            id
            body
            fields {
              slug
            }
            frontmatter {
              title
              description
              startDate
              endDate
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = mdx.frontmatter;
  const posts: Project[] = allMdx.edges;

  return (
    <Container section maxWidth="lg">
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      <Styled.Posts>
        {posts.map((item) => {
          const {
            id,
            fields: { slug },
            frontmatter: {
              title,
              cover,
              description,
              startDate,
              endDate,
              tags,
            },
          } = item.node;

          return (
            <Styled.Post key={id}>
              <Link to={slug}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1 }}
                >
                  <Styled.Card>
                    <Styled.Image>
                      <Img fluid={cover.childImageSharp.fluid} alt={title} />
                    </Styled.Image>
                    <Styled.Content>
                      <Styled.Date>
                        {new Date(startDate).toLocaleDateString(i18n.language, {
                          year: "numeric",
                          month: "short",
                        })}
                        {" - "}
                        {new Date(endDate).toLocaleDateString(i18n.language, {
                          year: "numeric",
                          month: "short",
                        })}
                      </Styled.Date>
                      <Styled.Title>{title}</Styled.Title>
                      <Styled.Description>{description}</Styled.Description>
                    </Styled.Content>
                    <Styled.Tags>
                      {tags.map((item) => (
                        <Chip key={item}>{item}</Chip>
                      ))}
                    </Styled.Tags>
                  </Styled.Card>
                </motion.div>
              </Link>
            </Styled.Post>
          );
        })}
      </Styled.Posts>
    </Container>
  );
};

export default Projects;
