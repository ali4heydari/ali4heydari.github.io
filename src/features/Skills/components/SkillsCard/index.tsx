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
import NestJsIcon from "src/assets/svg/nestjs.svg";
import CypressIcon from "src/assets/svg/cypress.svg";
import PostgreSqlIcon from "src/assets/svg/postgresql.svg";
import NextJsIcon from "src/assets/svg/next-js.svg";
import GithubIcon from "mdi-react/GithubIcon";
import Card from "src/components/Card";
import Chip from "src/components/Chip";
import Link from "next/link";

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
      <div className={"dark:text-gray-50"}>{title}</div>
      <div className={"flex flex-wrap justify-center"}>
        {projects.map(({ name, href, emoji }) => (
          <a key={name} href={href}>
            <Chip key={name}>
              <span role="img" aria-label={`${name}'s emoji`}>
                {emoji}{" "}
              </span>
              {name}
            </Chip>
          </a>
        ))}
      </div>
    </div>
  );
};

export const SkillsCard: React.FC = () => {
  const cards = [
    {
      icon: <TypeScriptIcon className={`h-20 w-20 text-blue-500`} />,
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
        <div className={`flex h-20 w-20 items-center justify-center font-bold`}>
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
                name: "Discrete Mathematics Assignments",
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
      icon: <CsharpIcon className={`h-20 w-20`} />,
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
      icon: <GraphqlIcon className={`h-20 w-20 text-pink-500`} />,
      title: "GraphQL",
      description:
        "Experience with Apollo GraphQL client v2 & v3, graphql-code-gen and Graphene library in Django",
    },
    {
      icon: <JavascriptIcon className={`h-20 w-20 text-yellow-500`} />,
      title: "JavaScript",
      description:
        "Skilled at ES5+. Knowledge about Promises, spread, Map etc.",
    },
    {
      icon: <ReactIcon className={`h-20 w-20 text-blue-400`} />,
      title: "React",
      description: "Skilled at React.js, functional components & hooks ⚓",
    },
    {
      icon: <GatsbyIcon className={`h-20 w-20 text-purple-700`} />,
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
      icon: <GitlabIcon className={`h-20 w-20 text-orange-500`} />,
      title: "GitLab",
      description: "Familiar with GitLab CI/CD and private registries",
    },
    {
      icon: <TailwindIcon className={`h-20 w-20 text-teal-400`} />,
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
      icon: <JavaIcon className={`h-20 w-20 text-orange-500`} />,
      title: "Java",
      description:
        "Skilled at Java 8. Familiar with maven, gradle and experienced in JavaFX",
    },
    {
      icon: <DockerIcon className={`h-20 w-20 text-blue-600`} />,
      title: "Docker",
      description: "Basic containerization (docker & docker-compose) knowledge",
    },
    {
      icon: <GitIcon className={`h-20 w-20 text-red-500`} />,
      title: "Git",
      description:
        "Solid experience with Git and Git-flow. familiar with advanced commands like squash, pick, rebase, bisect etc.",
    },

    {
      icon: <PythonIcon className={`h-20 w-20 text-yellow-500`} />,
      title: "Python",
      description:
        "Skilled at python. had worked with Django, numpy, pandas, beautiful soup",
    },
    {
      icon: <MicrosoftAzureDevopsIcon className={`h-20 w-20 text-blue-400`} />,
      title: "AzureDevOps",
      description:
        "Familiar with Microsoft AzureDevOps ecosystem; like azure-pipelines, feeds, board etc",
    },
    {
      icon: <NextJsIcon className={`h-20 w-20`} />,
      title: "Next.js",
      description:
        "Experienced in development PWA using Next.js. Familiar with popular Next plugins",
    },
    {
      icon: <BashIcon className={`h-20 w-20 text-orange-500`} />,
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
      icon: <DotNetIcon className={`h-20 w-20 text-purple-500`} />,
      title: "ASP.NET",
      description:
        "Skilled at ASP.Net framework and Core. Worked with MVVM architecture, Razor views, build web APIs etc",
    },
    {
      icon: <AndroidIcon className={`h-20 w-20 text-green-500`} />,
      title: "Android",
      description:
        "Having some experience in Android. worked with Google Map view, retrofit, Telephonary",
    },
    {
      icon: <CypressIcon className={`h-20 w-20 text-gray-300`} />,
      title: "Cypress",
      description: "Familiar with Cypress. mocking APIs and E2E testing",
    },
    {
      icon: <NestJsIcon className={`h-20 w-20 text-red-500`} />,
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
      icon: <PostgreSqlIcon className={`h-20 w-20 text-blue-400`} />,
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
      icon: (
        <img
          src={"/images/proteus-logo.png"}
          className={`h-20 w-20`}
          alt={"logo"}
        />
      ),
      title: "Proteus 8",
      description: "Experienced in proteus 8",
    },
  ];

  return (
    <div>
      <div className={"flex flex-wrap items-stretch justify-center gap-1"}>
        {cards.map(({ icon, title, description }, i) => (
          <div
            key={i}
            className="flex w-full max-w-sm flex-col items-center rounded-lg border bg-white p-1 shadow-md dark:border-gray-700 dark:bg-gray-800 md:w-1/2  md:max-w-xl md:flex-row lg:w-1/3"
          >
            <div>{icon}</div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
