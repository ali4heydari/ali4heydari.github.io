import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import SvgDotPatternIcon from "../images/svg/dot-pattern.svg";
import {
  Feature,
  FeatureIcon,
  FeatureText,
  SectionHeading as HeadingTitle,
} from "./misc/Headings";
import GatsbyImage from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div((props: { reversed: boolean }) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 leading-loose`;
const Link = tw.a`inline-block mt-4 text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export function Projects() {
  const cards = {
    "1-software-development.jpg": {
      subtitle: "Software Engineer",
      title: "Iran's national elites foundation",
      description: (
        <>
          {[
            "Carrying out team coordination and work",
            "Meeting with hospital, clinic, and laboratory managers for requirements engineering and data gathering.",
            "We developed a follow-up automation software that is used in the process of discharging patients and can help hospitals and clinics stay in touch with their patients and coordinate the next check ups of the patient. It also provides the patients with educational content. This system is currently being used by Sina hospital.",
          ].map((text) => (
            <>
              <FeatureIcon />
              <FeatureText>{text}</FeatureText>
            </>
          ))}
          Tech Stack:
          <div>
            {[
              "React",
              "TypeScript",
              "Apollo GraphQL client v3",
              "nginx",
              "Docker",
              "Material-UI",
              "react-i18next",
              "JSS",
              "Django",
              "GitLab CI",
              "Graphine",
            ].map((tech) => (
              <div
                css={tw`inline justify-center items-center m-1 font-medium px-1 py-0 bg-white rounded-full text-green-700 bg-green-100 border border-green-300`}
              >
                <span
                  css={tw`text-xs font-normal leading-none max-w-full flex-initial`}
                >
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </>
      ),
      url: "https://sinaheart.ir",
    },
    "2-software-development.jpg": {
      subtitle: "Software Engineer",
      title: "Dormify",
      description: (
        <>
          Software engineering course project. A Software for managing dormitory
          stuffs.
          {[
            "Front-end with React.js using TypeScript, Apollo GraphQL client, Jest, Cypress, testing-library",
            "Back-end with Django framework using Graphine for creating GraphQL API",
          ].map((text) => (
            <Feature key={text}>
              <FeatureIcon />
              <FeatureText>{text}</FeatureText>
            </Feature>
          ))}
        </>
      ),
      url: "https://dormify.ir",
    },
    "3-software-development.jpg": {
      subtitle: "Open source",
      title: "Sportify",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://github.com/ali4heydari",
    },
    "4-software-development.jpg": {
      subtitle: "Open source",
      title: "Sportify",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://github.com/ali4heydari",
    },
    "5-software-development.jpg": {
      subtitle: "Open source",
      title: "Sportify",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://github.com/ali4heydari",
    },
  };

  const { allFile: projectImages } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativePath: {
            in: [
              "projects/1-software-development.jpg"
              "projects/2-software-development.jpg"
              "projects/3-software-development.jpg"
              "projects/4-software-development.jpg"
              "projects/5-software-development.jpg"
            ]
          }
        }
        sort: { fields: [name] }
      ) {
        nodes {
          base
          childImageSharp {
            fluid {
              src
              srcSet
              base64
              tracedSVG
              srcWebp
            }
          }
        }
      }
    }
  `);

  return (
    <Container id="projects">
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Projects</HeadingTitle>
          <HeadingDescription>
            Here are some of the my close and open source projects
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {projectImages.nodes.map((imageNode, index) => (
            <Card key={imageNode.base} reversed={index % 2 === 1}>
              <GatsbyImage
                fluid={imageNode.childImageSharp.fluid}
                css={tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`}
              />
              <Details>
                <Subtitle>{cards[imageNode.base].subtitle}</Subtitle>
                <Title>{cards[imageNode.base].title}</Title>
                <Description>{cards[imageNode.base].description}</Description>
                <Link href={cards[imageNode.base].url}>More Details</Link>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
}
