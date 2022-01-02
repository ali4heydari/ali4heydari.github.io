import React from "react";

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
import GithubIcon from "mdi-react/GithubIcon";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Chip } from "../ui/Chip";

const ChipContainer = ({
  projects,
  title = "Related open source projects:",
}: {
  projects: {
    name: string;
    href: string;
    emoji?: string;
  }[];
  title?: string;
}) => {
  return (
    <div>
      <div className={"text-primary"}>{title}</div>
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
  const cards = [
    {
      icon: <TypeScriptIcon className={`w-20 h-20 text-blue-500`} />,
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
        <div className={`w-20 h-20 flex items-center justify-center font-bold`}>
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
      icon: <CsharpIcon className={`w-20 h-20`} />,
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
      icon: <GraphqlIcon className={`w-20 h-20 text-pink-500`} />,
      title: "GraphQL",
      description:
        "Experience with Apollo GraphQL client v2 & v3, graphql-code-gen and Graphene library in Django",
    },
    {
      icon: <JavascriptIcon className={`w-20 h-20 text-yellow-500`} />,
      title: "JavaScript",
      description:
        "Skilled at ES5+. Knowledge about Promises, spread, Map etc.",
    },
    {
      icon: <ReactIcon className={`w-20 h-20 text-blue-400`} />,
      title: "React",
      description: "Skilled at React.js, functional components & hooks ⚓",
    },
    {
      icon: <GatsbyIcon className={`text-purple-700 w-20 h-20`} />,
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
      icon: <GitlabIcon className={`text-orange-500 w-20 h-20`} />,
      title: "GitLab",
      description: "Familiar with GitLab CI/CD and private registries",
    },
    {
      icon: <TailwindIcon className={`text-teal-400 w-20 h-20`} />,
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
      icon: <JavaIcon className={`text-orange-500 w-20 h-20`} />,
      title: "Java",
      description:
        "Skilled at Java 8. Familiar with maven, gradle and experienced in JavaFX",
    },
    {
      icon: <DockerIcon className={`w-20 h-20 text-blue-600`} />,
      title: "Docker",
      description: "Basic containerization (docker & docker-compose) knowledge",
    },
    {
      icon: <GitIcon className={`w-20 h-20 text-error`} />,
      title: "Git",
      description:
        "Solid experience with Git and Git-flow. familiar with advanced commands like squash, pick, rebase, bisect etc.",
    },

    {
      icon: <PythonIcon className={`text-yellow-500 w-20 h-20`} />,
      title: "Python",
      description:
        "Skilled at python. had worked with Django, numpy, pandas, beautiful soup",
    },
    {
      icon: <MicrosoftAzureDevopsIcon className={`text-blue-400 w-20 h-20`} />,
      title: "AzureDevOps",
      description:
        "Familiar with Microsoft AzureDevOps ecosystem; like azure-pipelines, feeds, board etc",
    },
    {
      icon: <NextJsIcon className={`w-20 h-20`} />,
      title: "Next.js",
      description:
        "Experienced in development PWA using Next.js. Familiar with popular Next plugins",
    },
    {
      icon: <BashIcon className={`text-orange-500 w-20 h-20`} />,
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
      icon: <DotNetIcon className={`text-purple-500 w-20 h-20`} />,
      title: "ASP.NET",
      description:
        "Skilled at ASP.Net framework and Core. Worked with MVVM architecture, Razor views, build web APIs etc",
    },
    {
      icon: <AndroidIcon className={`text-green-500 w-20 h-20`} />,
      title: "Android",
      description:
        "Having some experience in Android. worked with Google Map view, retrofit, Telephonary",
    },
    {
      icon: <CypressIcon className={`text-disabled w-20 h-20`} />,
      title: "Cypress",
      description: "Familiar with Cypress. mocking APIs and E2E testing",
    },
    {
      icon: <NestJsIcon className={`text-error w-20 h-20`} />,
      title: "Nest.js",
      description: (
        <>
          Familiar with Nest.js framework
          <ChipContainer
            title="Certificates:"
            projects={[
              {
                name: "Udemy certificate",
                href: "https://www.udemy.com/certificate/UC-0161feda-a7e0-452d-8245-2ba7a3a9a62c/",
                emoji: "🧾",
              },
            ]}
          />
        </>
      ),
    },
    {
      icon: <PostgreSqlIcon className={`text-blue-400 w-20 h-20`} />,
      title: "PostgreSQL",
      description: "Familiar with Standard Query Language and Postgre",
    },
    // {
    //   icon: <ReduxIcon className={`name-purple-200 w-20 h-20`} />,
    //   title: "Redux",
    //   description:
    //     "Skilled at react-redux. with both class component and hooks",
    // },
    {
      icon: <img src={""} className={`w-20 h-20`} alt={"logo"} />,
      title: "Proteus 8",
      description: "Experienced in proteus 8",
    },
  ];

  return (
    <Section heading={"Technical Skills"}>
      {cards.map((card, i) => (
        <div className={`md:w-1/2 lg:w-1/3 max-w-sm`} key={card.title}>
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
