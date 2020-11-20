import { useStaticQuery, graphql } from "gatsby";

import InfoBlock from "components/ui/InfoBlock";
import Container from "components/ui/Container";
import TitleSection from "components/ui/TitleSection";
import { IconProps } from "components/ui/Icon";
import React from "react";

import { SectionTitle } from "definitions";

import * as Styled from "./styles";
import { MDXRenderer } from "gatsby-plugin-mdx";

interface Contact {
  node: {
    id: string;
    frontmatter: {
      title: string;
      content: string;
      icon: IconProps;
    };
  };
}

const ContactInfo: React.FC = () => {
  const { mdx, allMdx, file } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { category: { eq: "contact section" } }) {
        frontmatter {
          title
          subtitle
        }
        body
      }
      allMdx(
        filter: { frontmatter: { category: { eq: "contact" } } }
        sort: { fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
              content
            }
          }
        }
      }
      file(relativePath: { eq: "profile-high-resuloution.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = mdx.frontmatter;
  const contacts: Contact[] = allMdx.edges;

  return (
    <Container section maxWidth="lg">
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      <Styled.Image fluid={file.childImageSharp.fluid} />
      {contacts.map((item) => {
        const {
          id,
          frontmatter: { title, icon, content },
        } = item.node;

        return (
          <Styled.ContactInfoItem key={id}>
            <InfoBlock icon={icon} title={title} content={content} center />
          </Styled.ContactInfoItem>
        );
      })}
      {mdx.body && <MDXRenderer>{mdx.body}</MDXRenderer>}
    </Container>
  );
};

export default ContactInfo;
