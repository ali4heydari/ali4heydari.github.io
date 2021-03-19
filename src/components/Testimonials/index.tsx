import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Loadable from "@loadable/component";

import Container from "components/ui/Container";
import TitleSection from "components/ui/TitleSection";
import React from "react";
import { SectionTitle } from "definitions";

import * as Styled from "./styles";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Carousel = Loadable(() => import("components/ui/Carousel"));

interface Testimonial {
  node: {
    id: string;
    body: string;
    frontmatter: {
      title: string;
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
  };
}

const Testimonials: React.FC = () => {
  const { mdx, allMdx } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { category: { eq: "testimonials section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMdx(filter: { frontmatter: { category: { eq: "testimonials" } } }) {
        edges {
          node {
            id
            body
            frontmatter {
              title
              cover {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, width: 80)
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = mdx.frontmatter;
  const testimonials: Testimonial[] = allMdx.edges;

  return (
    <Container section maxWidth="lg">
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      <Styled.Testimonials>
        <Carousel>
          {testimonials.map((item) => {
            const {
              id,
              body,
              frontmatter: { cover, title },
            } = item.node;

            return (
              <Styled.Testimonial key={id}>
                <Styled.Image>
                  <GatsbyImage
                    image={cover.childImageSharp.gatsbyImageData}
                    alt={title}
                  />
                </Styled.Image>
                <Styled.Title>{title}</Styled.Title>
                <MDXRenderer>{body}</MDXRenderer>
              </Styled.Testimonial>
            );
          })}
        </Carousel>
      </Styled.Testimonials>
    </Container>
  );
};

export default Testimonials;
