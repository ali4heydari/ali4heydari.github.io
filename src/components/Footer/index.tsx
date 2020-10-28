import Container from "components/ui/Container";

import * as Styled from "./styles";
import React from "react";
import MainNav from "./MainNav";

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="/" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link
          href="https://github.com/SaimirKapaj/gatsby-markdown-typescript-personal-website"
          rel="noreferrer noopener"
          target="_blank"
        >
          Twitter
        </Styled.Link>
        <Styled.Link href="/" rel="noreferrer noopener" target="_blank">
          Behance
        </Styled.Link>
      </Styled.Links>
      <Styled.Separator center />
      <MainNav />
    </Container>
  </Styled.Footer>
);

export default Footer;
