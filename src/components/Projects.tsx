import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import SvgDotPatternIcon from "../images/svg/dot-pattern.svg";
import {
  Feature,
  FeatureIcon,
  FeatureText,
  SectionHeading,
  SectionHeading as HeadingTitle,
} from "./misc/Headings";
import GatsbyImage from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { TechChip } from "./misc/Chips";
import { HighlightedText } from "./misc/Typography";
import GithubIcon from "mdi-react/GithubIcon";

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
    "1-sina-heart.png": {
      subtitle: "Software Engineer",
      title: "Iran's national elites foundation",
      description: (
        <>
          {[
            "Carrying out team coordination and work",
            "Meeting with hospital, clinic, and laboratory managers for requirements engineering and data gathering.",
            "We developed a follow-up automation software that is used in the process of discharging patients and can help hospitals and clinics stay in touch with their patients and coordinate the next check ups of the patient. It also provides the patients with educational content. This system is currently being used by Sina hospital.",
          ].map((text) => (
            <div css={tw`flex items-start`} key={text}>
              <FeatureIcon css={tw`flex-shrink-0`} />
              <FeatureText>{text}</FeatureText>
            </div>
          ))}
          <div css={tw`text-primary-500`}>Tech Stack:</div>
          <div>
            {[
              { name: "React (fully functional components ⚓)", emoji: "⚛" },
              { name: "Next.js" },
              { name: "Lerna", emoji: "🐍" },
              { name: "Yarn", emoji: "🐈" },
              { name: "TypeScript" },
              { name: "Material-UI" },
              { name: "CSS-in-JS" },
              { name: "Firebase", emoji: "🔥" },
              { name: "Apollo GraphQL client" },
              { name: "React-Hook-Form", emoji: "📄" },
              { name: "Recharts", emoji: "📊" },
              { name: "i18next", emoji: "🌐" },
              { name: "Django" },
              { name: "Graphene" },
              { name: "nginx" },
              { name: "Docker", emoji: "🐳" },
              { name: "GitLab CI", emoji: "🦊" },
            ].map((tech) => (
              <TechChip key={tech.name} name={tech.name} emoji={tech.emoji} />
            ))}
          </div>
        </>
      ),
    },
    "2-software-development.jpg": {
      subtitle: "Software Engineer",
      title: "Dormify",
      description: (
        <>
          Software engineering course project.
          {[
            "Carrying out team coordination and work",
            "Meeting with dormitory managers for requirements engineering and data gathering.",
            "We hold scrum meeting (planning, daily ...) in Microsoft Teams during COVID19 pandemic",
            "We designed and developed a software for managing dormitory stuffs like ticketing, issue tracking, guest invitation",
            "We designed fully dockerized and automated CI/CD during development of software",
          ].map((text) => (
            <div css={tw`flex items-start`} key={text}>
              <FeatureIcon css={tw`flex-shrink-0`} />
              <FeatureText>{text}</FeatureText>
            </div>
          ))}
          <div css={tw`text-primary-500`}>Tech Stack:</div>
          <div>
            {[
              { name: "React (fully functional components ⚓)", emoji: "⚛" },
              { name: "Lerna", emoji: "🐍" },
              { name: "Yarn", emoji: "🐈" },
              { name: "TypeScript" },
              { name: "Cypress" },
              { name: "Jest", emoji: "👢" },
              { name: "testing-library", emoji: "🐙" },
              { name: "Material-UI" },
              { name: "Apollo GraphQL client" },
              { name: "CSS-in-JS" },
              { name: "React-Hook-Form", emoji: "📄" },
              { name: "i18next", emoji: "🌐" },
              { name: "Django" },
              { name: "Graphene" },
              { name: "nginx" },
              { name: "Docker", emoji: "🐳" },
              { name: "Azure pipelines", emoji: "🚀" },
              { name: "Azure feeds" },
            ].map((tech) => (
              <TechChip key={tech.name} name={tech.name} emoji={tech.emoji} />
            ))}
          </div>
        </>
      ),
      meta: <Link href="https://dormify.ir">Live demo</Link>,
    },
    "3-software-development.jpg": {
      subtitle: "Open source",
      title: "Sportify",
      description: (
        <>
          Web Development course project
          <div css={tw`text-primary-500`}>Tech Stack:</div>
          <div>
            {[
              { name: "React (class components)", emoji: "⚛" },
              { name: "Redux" },
              { name: "TypeScript" },
              { name: "JavaScript" },
              { name: "Material-UI" },
              { name: "Ant Design", emoji: "🐜" },
              { name: "CSS-in-JS" },
              { name: "CSS modules" },
              { name: "Django REST API" },
            ].map((tech) => (
              <TechChip key={tech.name} name={tech.name} emoji={tech.emoji} />
            ))}
          </div>
        </>
      ),
      meta: (
        <Link href="https://github.com/ali4heydari/sportify-frontend">
          <GithubIcon css={tw`text-primary-500 w-10 h-10`} />
          GitHub Source
        </Link>
      ),
    },
    "4-mano-computer.png": {
      subtitle: "Open source",
      title: "Mano Computer Simulation",
      description: (
        <>
          Computer Architecture course project. I simulated Mano computer in
          <TechChip name={"Proteus 8"} emoji={"💥"} />
        </>
      ),
      meta: (
        <Link href="https://github.com/ali4heydari/ManoComputer">
          <GithubIcon css={tw`text-primary-500 w-10 h-10`} />
          GitHub Source
        </Link>
      ),
    },
  };

  const { allFile: projectImages } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativePath: {
            in: [
              "projects/1-sina-heart.png"
              "projects/2-software-development.jpg"
              "projects/3-software-development.jpg"
              "projects/4-mano-computer.png"
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
            {/*<Link href={"/projects"}>See full list</Link>*/}
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {projectImages.nodes.map((imageNode, index) => (
            <Card key={imageNode.base} reversed={index % 2 === 1}>
              <GatsbyImage
                fluid={imageNode.childImageSharp.fluid}
                css={tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 w-auto flex-shrink-0 h-full md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`}
                alt={imageNode.base}
                imgStyle={{
                  width: "auto",
                }}
              />
              <Details>
                <Subtitle>{cards[imageNode.base].subtitle}</Subtitle>
                <Title>{cards[imageNode.base].title}</Title>
                <Description>{cards[imageNode.base].description}</Description>
                {cards[imageNode.base]?.meta}
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
