import { useStaticQuery, graphql } from "gatsby";

import InfoBlock from "components/ui/InfoBlock";
import Container from "components/ui/Container";
import TitleSection from "components/ui/TitleSection";
import { IconProps } from "components/ui/Icon";
import React from "react";

import { SectionTitle } from "definitions";

import * as Styled from "./styles";
import FormatHtml from "../utils/FormatHtml";

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
  const { markdownRemark, allMarkdownRemark, file } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "contact section" } }) {
        frontmatter {
          title
          subtitle
        }
        html
      }
      allMarkdownRemark(
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

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const contacts: Contact[] = allMarkdownRemark.edges;

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
      {markdownRemark.html && <FormatHtml content={markdownRemark.html} />}
    </Container>
  );
};

export default ContactInfo;
