import { useStaticQuery, graphql } from "gatsby";

import Container from "src/components/ui/Container";
import Button from "src/components/ui/Button";
import TitleSection from "src/components/ui/TitleSection";
import { SectionTitle } from "src/definitions";
import React from "react";
import * as Styled from "./styles";

interface Newsletter extends SectionTitle {
  namePlaceholder: string;
  emailPlaceholder: string;
  submitPlaceholder: string;
}

const Newsletter: React.FC = () => {
  const { mdx } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { category: { eq: "newsletter section" } }) {
        frontmatter {
          title
          subtitle
          namePlaceholder
          emailPlaceholder
          submitPlaceholder
        }
      }
    }
  `);

  const newsletter: Newsletter = mdx.frontmatter;

  return (
    <Styled.Newsletter>
      <Container section maxWidth="lg">
        <TitleSection
          title={newsletter.title}
          subtitle={newsletter.subtitle}
          center
        />
        <Styled.Form>
          <Styled.Input type="text" placeholder={newsletter.namePlaceholder} />
          <Styled.Input
            type="email"
            placeholder={newsletter.emailPlaceholder}
          />
          <Button primary block>
            {newsletter.submitPlaceholder}
          </Button>
        </Styled.Form>
      </Container>
    </Styled.Newsletter>
  );
};

export default Newsletter;
