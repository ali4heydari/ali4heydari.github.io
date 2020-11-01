import React from "react";
import tw from "twin.macro";

import TypeScriptIcon from "mdi-react/LanguageTypescriptIcon";
import GraphqlIcon from "mdi-react/GraphqlIcon";
import JavascriptIcon from "mdi-react/LanguageJavascriptIcon";
import ReactIcon from "mdi-react/ReactIcon";
import Html5Icon from "mdi-react/LanguageHtml5Icon";
import Css3Icon from "mdi-react/LanguageCss3Icon";
import DockerIcon from "mdi-react/DockerIcon";
import GitIcon from "mdi-react/GitIcon";
import DotNetIcon from "mdi-react/DotNetIcon";
import CsharpIcon from "mdi-react/LanguageCsharpIcon";
import BashIcon from "mdi-react/BashIcon";
import PythonIcon from "mdi-react/LanguagePythonIcon";
import GatsbyIcon from "mdi-react/GatsbyIcon";
import TailwindIcon from "mdi-react/TailwindIcon";
import MaterialUiIcon from "mdi-react/MaterialUiIcon";
import MicrosoftAzureDevopsIcon from "mdi-react/MicrosoftAzureDevopsIcon";
import GitlabIcon from "mdi-react/GitlabIcon";
import JavaIcon from "mdi-react/LanguageJavaIcon";
import AndroidIcon from "mdi-react/AndroidIcon";
import NestJsIcon from "../../assets/svg/nestjs.svg";
import CypressIcon from "../../assets/svg/cypress.svg";
import PostgreSqlIcon from "../../assets/svg/postgresql.svg";
import NextJsIcon from "../../assets/svg/next-js.svg";
import { graphql, useStaticQuery } from "gatsby";
import GithubIcon from "mdi-react/GithubIcon";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Chip } from "../ui/Chip";
import GatsbyImage from "gatsby-image";

const ChipContainer = ({
  projects,
}: {
  projects: {
    name: string;
    href: string;
    emoji?: string;
  }[];
}) => {
  return (
    <div>
      <div css={tw`text-purple-800`}>Related open source projects:</div>
      {projects.map(({ name, href, emoji }) => (
        <Chip key={name} href={href}>
          <span role="img" aria-label={`${name}'s emoji`}>
            {emoji}{" "}
          </span>
          {name}
        </Chip>
      ))}
    </div>
  );
};

export const SkillsCard: React.FC = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "proteus-logo.png" }) {
        childImageSharp {
          fluid(maxHeight: 100, maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const cards = [
    {
      icon: <TypeScriptIcon css={tw`w-20 h-20 text-blue-500`} />,
      title: "TypeScript",
      description: (
        <>
          Solid TypeScript skills (Object oriented and functional). Familiar
          with utility types for type transformations
          <ChipContainer
            projects={[
              {
                name: "Sportify",
                href: "https://github.com/ali4heydari/sportify-frontend",
                emoji: "⚽",
              },
              {
                name: "Upmed",
                href: "https://github.com/ali4heydari/upmed",
                emoji: "🩺",
              },
              {
                name: "rhf-mui",
                href: "https://github.com/ali4heydari/rhf-mui",
              },
            ]}
          />
        </>
      ),
    },
    {
      icon: (
        <div css={tw`w-20 h-20 flex items-center justify-center font-bold`}>
          <span>
            L<sup>A</sup>T<sub>E</sub>X
          </span>
        </div>
      ),
      title: "LaTeX",
      description: (
        <>
          Solid skill in LaTeX. Solid experience in creating reusable LaTeX
          template for programming assignments with code snipped, charts, graphs
          etc.
          <ChipContainer
            projects={[
              {
                name: "DiscreteMathematics Assignments",
                href: "https://github.com/ali4heydari/DiscreteMathematicsLaTeX",
                emoji: "➕",
              },
              {
                name: "University Homeworks",
                href: "https://github.com/ali4heydari/Spring2019UniHWsPDF",
                emoji: "📚",
              },
              {
                name: "CV",
                href: "https://github.com/ali4heydari/CV",
                emoji: "📃",
              },
            ]}
          />
        </>
      ),
    },
    {
      icon: <CsharpIcon css={tw`w-20 h-20`} />,
      title: "C#",
      description: (
        <>
          Solid C# skills. Having experience in creating class library, console
          application and WPF. Design and implement programming assignment in
          university etc.
          <ChipContainer
            projects={[
              {
                name: "Telegram2VCF",
                href: "https://github.com/ali4heydari/Telegram2VCF",
                emoji: "📩",
              },
              {
                name: "TelegramChatParser",
                href: "https://github.com/ali4heydari/TelegramChatParser",
              },
              {
                name: "QuineMcCluskey",
                href: "https://github.com/ali4heydari/QuineMcCluskey",
              },
              {
                name: "Vidly",
                href: "https://github.com/ali4heydari/Vidly",
              },
            ]}
          />
        </>
      ),
    },
    {
      icon: <GraphqlIcon css={tw`w-20 h-20 text-pink-500`} />,
      title: "GraphQL",
      description:
        "Experience with Apollo GraphQL client v2 & v3, graphql-code-gen and Graphene library in Django",
    },
    {
      icon: <JavascriptIcon css={tw`w-20 h-20 text-yellow-500`} />,
      title: "JavaScript",
      description:
        "Skilled at ES5+. Knowledge about Promises, spread, Map etc.",
    },
    {
      icon: <ReactIcon css={tw`w-20 h-20 text-blue-400`} />,
      title: "React",
      description: "Skilled at React.js, functional components & hooks ⚓",
    },
    {
      icon: <GatsbyIcon css={tw`text-purple-700 w-20 h-20`} />,
      title: "Gatsby",
      description: (
        <>
          Skilled at Gatsby. Familiar with popular Gatsby plugins
          <ChipContainer
            projects={[
              {
                name: "Upmed",
                href: "https://github.com/ali4heydari/upmed",
                emoji: "🩺",
              },
              {
                name: "portfolio",
                href: "https://github.com/ali4heydari/ali4heydari.github.io",
                emoji: "📃",
              },
            ]}
          />
        </>
      ),
    },

    {
      icon: <GitlabIcon css={tw`text-orange-500 w-20 h-20`} />,
      title: "GitLab",
      description: "Familiar with GitLab CI/CD and private registries",
    },
    {
      icon: <TailwindIcon css={tw`text-teal-400 w-20 h-20`} />,
      title: "Tailwind CSS",
      description: (
        <>
          Skilled at Tailwind CSS. working beside styled-components 💅🏻
          <ChipContainer
            projects={[
              {
                name: "portfolio",
                href: "https://github.com/ali4heydari/ali4heydari.github.io",
                emoji: "📃",
              },
            ]}
          />
        </>
      ),
    },
    {
      icon: <JavaIcon css={tw`text-orange-500 w-20 h-20`} />,
      title: "Java",
      description:
        "Skilled at Java 8. Familiar with maven, gradle and experienced in JavaFX",
    },
    {
      icon: <DockerIcon css={tw`w-20 h-20 text-blue-600`} />,
      title: "Docker",
      description: "Basic containerization (docker & docker-compose) knowledge",
    },
    {
      icon: <GitIcon css={tw`w-20 h-20 text-red-500`} />,
      title: "Git",
      description:
        "Solid experience with Git and Git-flow. familiar with advanced commands like squash, pick, rebase, bisect etc.",
    },

    {
      icon: <PythonIcon css={tw`text-yellow-500 w-20 h-20`} />,
      title: "Python",
      description:
        "Skilled at python. had worked with Django, numpy, pandas, beautiful soup",
    },
    {
      icon: <MicrosoftAzureDevopsIcon css={tw`text-blue-400 w-20 h-20`} />,
      title: "AzureDevOps",
      description:
        "Familiar with Microsoft AzureDevOps ecosystem; like azure-pipelines, feeds, board etc",
    },
    {
      icon: <NextJsIcon css={tw`w-20 h-20`} />,
      title: "Next.js",
      description:
        "Experienced in development PWA using Next.js. Familiar with popular Next plugins",
    },
    {
      icon: <BashIcon css={tw`text-orange-500 w-20 h-20`} />,
      title: "Bash",
      description: (
        <>
          Proficient in bash shell scripting for automating repeatable daily
          stuffs
          <ChipContainer
            projects={[
              {
                name: "GetFreeProxies",
                href: "https://github.com/ali4heydari/GetFreeProxies",
                emoji: "📩",
              },
            ]}
          />
        </>
      ),
    },
    {
      icon: <DotNetIcon css={tw`text-purple-500 w-20 h-20`} />,
      title: "ASP.NET",
      description:
        "Skilled at ASP.Net framework and Core. Worked with MVVM architecture, Razor views, build web APIs etc",
    },
    {
      icon: <AndroidIcon css={tw`text-green-500 w-20 h-20`} />,
      title: "Android",
      description:
        "Having some experience in Android. worked with Google Map view, retrofit, Telephonary",
    },
    {
      icon: <CypressIcon css={tw`text-gray-600 w-20 h-20`} />,
      title: "Cypress",
      description: "Familiar with Cypress. mocking APIs and E2E testing",
    },
    {
      icon: <NestJsIcon css={tw`text-red-600 w-20 h-20`} />,
      title: "Nest.js",
      description: "Familiar with Nest.js framework",
    },
    {
      icon: <PostgreSqlIcon css={tw`text-blue-400 w-20 h-20`} />,
      title: "PostgreSQL",
      description: "Familiar with Standard Query Language and Postgre",
    },
    // {
    //   icon: <ReduxIcon css={tw`name-purple-200 w-20 h-20`} />,
    //   title: "Redux",
    //   description:
    //     "Skilled at react-redux. with both class component and hooks",
    // },
    {
      icon: (
        <GatsbyImage fluid={file.childImageSharp.fluid} css={tw`w-20 h-20`} />
      ),
      title: "Proteus 8",
      description: "Experienced in proteus 8",
    },
  ];

  return (
    <Section heading={"Technical Skills"}>
      {cards.map((card, i) => (
        <div css={tw`md:w-1/2 lg:w-1/3 max-w-sm`} key={card.title}>
          <Card
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        </div>
      ))}
    </Section>
  );
};
