import { useStaticQuery, graphql } from "gatsby";

import Banner from "components/ui/Banner";

import { SectionTitle } from "definitions";
import React from "react";
import { FluidObject } from "gatsby-image";

interface SectionHeroBanner extends SectionTitle {
  content: string;
  linkTo: string;
  linkText: string;
  quote: string;
}

const HeroBanner: React.FC = () => {
  const { markdownRemark, file } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        frontmatter {
          title
          subtitle
          content
          linkTo
          linkText
          quote
        }
      }
      file(relativePath: { eq: "hero-photo.jpg" }) {
        base
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const heroBanner: SectionHeroBanner = markdownRemark.frontmatter;

  return (
    <Banner
      heading={heroBanner.title}
      subheading={heroBanner.subtitle}
      description={heroBanner.content}
      linkTo={heroBanner.linkTo}
      linkText={heroBanner.linkText}
      image={file.childImageSharp.fluid}
      quote={heroBanner.quote}
    />
  );
};

export default HeroBanner;
