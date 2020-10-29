import { graphql, useStaticQuery } from "gatsby";

import Container from "components/ui/Container";

import * as Styled from "./styles";
import Typist from "react-typist";
import tw from "twin.macro";
import React from "react";
import GatsbyImage, { FluidObject } from "gatsby-image";
import { ImageSharpFluid } from "../../../definitions";

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
              <Styled.SectionHeading css={tw`text-left`}>
                {heading}
              </Styled.SectionHeading>
              <Styled.Heading>{subheading}</Styled.Heading>
            </Typist>
            <Styled.Description>{description}</Styled.Description>
            <Styled.Button href={linkTo}>{linkText}</Styled.Button>
            {/*<FeatureList>*/}
            {/*  {[*/}
            {/*    "Computer engineering student",*/}
            {/*    "3 years experience in web development",*/}
            {/*  ].map((feature, index) => (*/}
            {/*    <Feature key={index}>*/}
            {/*      <FeatureIcon />*/}
            {/*      <FeatureText>{feature}</FeatureText>*/}
            {/*    </Feature>*/}
            {/*  ))}*/}
            {/*</FeatureList>*/}
          </Styled.TextColumn>
          <Styled.ImageColumn>
            <Styled.ImageContainer>
              {image ? (
                <GatsbyImage
                  css={tw`max-w-full w-96 rounded-t sm:rounded relative z-20`}
                  fluid={image}
                />
              ) : null}
              {imageDecoratorBlob && <Styled.ImageDecoratorBlob />}
              {quote ? (
                <Styled.Testimonial>
                  <>
                    <Styled.QuotesLeftIcon />
                    <Styled.Quote>{quote}</Styled.Quote>
                  </>
                  {/*<CustomerName>{testimonial.customerName}</CustomerName>*/}
                  {/*<CustomerCompany>*/}
                  {/*  {testimonial.customerCompany}*/}
                  {/*</CustomerCompany>*/}
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
