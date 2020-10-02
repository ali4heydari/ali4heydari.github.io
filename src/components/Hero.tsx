import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import CheckCircleOutlineIcon from "mdi-react/CheckCircleOutlineIcon";
import QuotesLeftIconBase from "mdi-react/FormatQuoteOpenIcon";
import SvgDecoratorBlob1 from "mdi-react/DragIcon";

import {
  Feature,
  FeatureIcon,
  FeatureList,
  FeatureText,
  SectionHeading,
} from "./misc/Headings";
import { SectionDescription } from "./misc/Typography";
import { PrimaryButton as PrimaryButtonBase } from "../components/misc/Buttons";
import { Container, ContentWithVerticalPadding } from "./misc/Layouts";
import GatsbyImage from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { SocialMedias } from "./SocialMedias";
import Typist from "react-typist";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn = tw(
  Column
)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(
  SectionHeading
)`text-left text-primary-900 leading-snug xl:text-6xl`;
const Description = tw(
  SectionDescription
)`mt-4 lg:text-base text-gray-700 max-w-lg`;
const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 inline-block w-56 tracking-wide text-center py-5`;
const ImageColumn = tw(Column)`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`;
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`;
const Image = tw.img`max-w-full w-96 rounded-t sm:rounded relative z-20`;
const Offsetbackground = tw.div`absolute inset-0 bg-gray-300 rounded xl:-mb-8`;
const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-gray-900 fill-current`}
`;
const Testimonial = tw.div`max-w-sm rounded-b md:rounded-none relative sm:absolute bottom-0 inset-x-0 z-20 px-8 py-6 sm:px-10 sm:py-8 bg-primary-900 text-gray-400 font-medium transform md:-translate-x-32 text-sm leading-relaxed md:-mr-16 xl:mr-0`;
const QuotesLeftIcon = tw(
  QuotesLeftIconBase
)`w-16 h-16 md:w-12 md:h-12 absolute top-0 left-0 text-gray-100 md:text-red-500 transform translate-x-1 md:-translate-x-1/2 md:-translate-y-5 opacity-10 md:opacity-100`;
const Quote = tw.blockquote``;
const CustomerName = tw.p`mt-4 font-bold`;
const CustomerCompany = tw.p`mt-1 text-sm text-gray-500`;

const getHeroImageQuery = graphql`
  query GET_HERO_IMAGE {
    file(relativePath: { eq: "hero-photo.jpg" }) {
      base
      childImageSharp {
        fluid {
          originalImg
          base64
          src
          srcSet
          sizes
          tracedSVG
          aspectRatio
        }
      }
    }
  }
`;

export function Hero({ imageDecoratorBlob = true, buttonRounded = true }) {
  const buttonRoundedCss = buttonRounded ? tw`rounded-full` : undefined;
  const query = useStaticQuery(getHeroImageQuery);

  return (
    <>
      <Container id={"about"}>
        <ContentWithVerticalPadding>
          <Row>
            <TextColumn>
              <Typist startDelay={500} cursor={{ show: false }}>
                <SectionHeading css={tw`text-left`}>{"Hi, I'm"}</SectionHeading>
                <Heading>{"Ali Heydari"}</Heading>
              </Typist>
              <Description>
                {
                  "A frontend developer who loves cats, travel, photography and learning new things"
                }
              </Description>
              <OutboundLink
                href={
                  "https://github.com/ali4heydari/CV/releases/download/v2.0-alpha/cv.pdf"
                }
                css={[
                  tw`px-8 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`,
                  tw`mt-8 inline-block w-56 tracking-wide text-center py-5`,
                  buttonRoundedCss,
                ]}
              >
                {"Download resume"}
              </OutboundLink>
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
              <SocialMedias css={tw`text-primary-500`} />
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <GatsbyImage
                  css={tw`max-w-full w-96 rounded-t sm:rounded relative z-20`}
                  fluid={query.file.childImageSharp.fluid}
                  alt={query.file.base}
                />
                {imageDecoratorBlob && <ImageDecoratorBlob />}
                <Testimonial>
                  <QuotesLeftIcon />
                  <Quote>
                    {"Be the change that you want to see in the world."}
                  </Quote>
                  {/*<CustomerName>{testimonial.customerName}</CustomerName>*/}
                  {/*<CustomerCompany>*/}
                  {/*  {testimonial.customerCompany}*/}
                  {/*</CustomerCompany>*/}
                </Testimonial>
              </ImageContainer>
              <Offsetbackground />
            </ImageColumn>
          </Row>
        </ContentWithVerticalPadding>
      </Container>
    </>
  );
}
