import Container from "components/ui/Container";

import * as Styled from "./styles";
import React from "react";
import MainNav from "./MainNav";
import tw from "twin.macro";
import styled from "styled-components";
import { socialMedias } from "../../socialMedias";

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container maxWidth="lg">
      <Styled.Links>
        {socialMedias.map((media) => {
          const Icon = styled(media.icon)`
            ${tw`w-6 h-6 m-1`}
          `;

          return (
            <Styled.Link
              key={media.link}
              href={media.link}
              aria-label={`link to authors'${media.name} account`}
            >
              <Icon />
            </Styled.Link>
          );
        })}
      </Styled.Links>
      <Styled.Separator center />
      <MainNav />
    </Container>
  </Styled.Footer>
);

export default Footer;
