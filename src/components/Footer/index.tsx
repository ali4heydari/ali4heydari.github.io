import Container from "components/ui/Container";

import * as Styled from "./styles";
import React from "react";
import MainNav from "./MainNav";
import tw from "twin.macro";
import styled from "styled-components";
import { socialMedias } from "../../socialMedias";
import { NowPlaying } from "../Spotify";

const Footer: React.FC = () => {
  return (
    <Styled.Footer>
      <Container maxWidth="lg">
        <div css={tw`flex flex-wrap items-center justify-center w-full`}>
          <NowPlaying />
        </div>
        <Styled.Links>
          {socialMedias.map((media) => {
            const Icon = styled(media.icon)`
              ${tw`w-6 h-6 m-1`}
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
        <Styled.Separator center />
        <MainNav />
      </Container>
    </Styled.Footer>
  );
};

export default Footer;
