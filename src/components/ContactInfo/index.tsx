import { useStaticQuery, graphql } from "gatsby";

import Container from "components/ui/Container";
import TitleSection from "components/ui/TitleSection";
import React from "react";

import * as Styled from "./styles";
import { socialMedias } from "../../socialMedias";
import tw from "twin.macro";
import styled from "styled-components";

const ContactInfo: React.FC = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile-high-resuloution.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Container section maxWidth="lg">
      <TitleSection
        title={"Contacts"}
        subtitle={"For more info contact me"}
        center
      />
      <Styled.Image fluid={file.childImageSharp.fluid} />
      <Styled.Links>
        {socialMedias.map((media) => {
          const Icon = styled(media.icon)`
            ${tw`w-16 h-16 m-1`}
          `;

          return (
            <Styled.Link
              key={media.link}
              href={media.link}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label={`link to authors'${media.name} account`}
            >
              <Icon />
            </Styled.Link>
          );
        })}
      </Styled.Links>
    </Container>
  );
};

export default ContactInfo;
