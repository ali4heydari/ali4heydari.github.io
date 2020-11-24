import Container from "components/ui/Container";

import * as Styled from "./styles";
import Typist from "react-typist";
import React from "react";
import { FluidObject } from "gatsby-image";
import { socialMedias } from "../../../socialMedias";
import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  heading: string;
  subheading?: string;
  description: React.ReactNode;
  linkTo: string;
  linkText: string;
  imageDecoratorBlob?: boolean;
  quote?: string;
  image: FluidObject | FluidObject[];
}

const Banner: React.FC<Props> = ({
  heading,
  subheading,
  description,
  linkTo,
  linkText,
  imageDecoratorBlob,
  quote,
  image,
}) => {
  return (
    <Styled.Banner>
      <Container section>
        <Styled.Row>
          <Styled.TextColumn>
            <Typist startDelay={500} cursor={{ show: false }}>
              <Styled.SectionHeading>{heading}</Styled.SectionHeading>
              <Styled.Heading>{subheading}</Styled.Heading>
            </Typist>
            <Styled.Description>{description}</Styled.Description>
            <Styled.Button rounded href={linkTo}>
              {linkText}
            </Styled.Button>
            <Styled.Links>
              {socialMedias.map((media) => {
                const Icon = styled(media.icon)`
                  ${tw`w-8 h-8 m-1`}
                `;

                return (
                  <Styled.Link
                    key={media.link}
                    href={media.link}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label={`link to author's ${media.name} account`}
                  >
                    <Icon />
                  </Styled.Link>
                );
              })}
            </Styled.Links>
          </Styled.TextColumn>
          <Styled.ImageColumn>
            <Styled.ImageContainer>
              {image ? <Styled.Image fluid={image} /> : null}
              {imageDecoratorBlob && <Styled.ImageDecoratorBlob />}
              {quote ? (
                <Styled.Testimonial>
                  <>
                    <Styled.QuotesLeftIcon />
                    <Styled.Quote>{quote}</Styled.Quote>
                  </>
                </Styled.Testimonial>
              ) : null}
            </Styled.ImageContainer>
            <Styled.Offsetbackground />
          </Styled.ImageColumn>
        </Styled.Row>
      </Container>
    </Styled.Banner>
  );
};

export default Banner;
