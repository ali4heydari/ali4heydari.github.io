import { useStaticQuery, graphql } from "gatsby";

import Banner from "components/ui/Banner";

import { SectionTitle } from "definitions";
import React from "react";

interface SectionHeroBanner extends SectionTitle {
  content: string;
  linkTo: string;
  linkText: string;
  quote: string;
}

const HeroBanner: React.FC = () => {
  const { mdx, file } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { category: { eq: "hero section" } }) {
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
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  const heroBanner: SectionHeroBanner = mdx.frontmatter;

  return (
    <Banner
      heading={heroBanner.title}
      subheading={heroBanner.subtitle}
      description={heroBanner.content}
      linkTo={heroBanner.linkTo}
      linkText={heroBanner.linkText}
      image={file.childImageSharp.gatsbyImageData}
      quote={heroBanner.quote}
    />
  );
};

export default HeroBanner;
