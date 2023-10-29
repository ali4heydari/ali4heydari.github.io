import BashIcon from "mdi-react/BashIcon";
import DockerIcon from "mdi-react/DockerIcon";
import DotNetIcon from "mdi-react/DotNetIcon";
import GatsbyIcon from "mdi-react/GatsbyIcon";
import GitIcon from "mdi-react/GitIcon";
import GitlabIcon from "mdi-react/GitlabIcon";
import GraphqlIcon from "mdi-react/GraphqlIcon";
import CsharpIcon from "mdi-react/LanguageCsharpIcon";
import JavaIcon from "mdi-react/LanguageJavaIcon";
import JavascriptIcon from "mdi-react/LanguageJavascriptIcon";
import PythonIcon from "mdi-react/LanguagePythonIcon";
import TypeScriptIcon from "mdi-react/LanguageTypescriptIcon";
import MicrosoftAzureDevopsIcon from "mdi-react/MicrosoftAzureDevopsIcon";
import ReactIcon from "mdi-react/ReactIcon";
import TailwindIcon from "mdi-react/TailwindIcon";
import React from "react";
import ProteusLogo from "../../../assets/images/logos/proteus-logo.png";
import CypressIcon from "../../../assets/svg/cypress.svg";
import NestJsIcon from "../../../assets/svg/nestjs.svg";
import NextJsIcon from "../../../assets/svg/next-js.svg";
import Image from "next/image";

export const skills = [
  {
    icon: <TypeScriptIcon className={`h-6 w-6 text-blue-500`} />,
    title: "TypeScript",
  },
  {
    icon: (
      <div className={`flex h-6 w-6 items-center justify-center font-bold`}>
        <span>
          L<sup>A</sup>T<sub>E</sub>X
        </span>
      </div>
    ),
    title: "LaTeX",
  },
  {
    icon: <CsharpIcon className={`h-6 w-6`} />,
    title: "C#",
  },
  {
    icon: <GraphqlIcon className={`h-6 w-6 text-pink-500`} />,
    title: "GraphQL",
  },
  {
    icon: <JavascriptIcon className={`h-6 w-6 text-yellow-500`} />,
    title: "JavaScript",
  },
  {
    icon: <ReactIcon className={`h-6 w-6 text-blue-400`} />,
    title: "React",
  },
  {
    icon: <GatsbyIcon className={`h-6 w-6 text-purple-700`} />,
    title: "Gatsby",
  },

  {
    icon: <GitlabIcon className={`h-6 w-6 text-orange-500`} />,
    title: "GitLab CI/CD",
  },
  {
    icon: <TailwindIcon className={`h-6 w-6 text-teal-400`} />,
    title: "Tailwind CSS",
  },
  {
    icon: <JavaIcon className={`h-6 w-6 text-orange-500`} />,
    title: "Java",
  },
  {
    icon: <DockerIcon className={`h-6 w-6 text-blue-600`} />,
    title: "Docker",
  },
  {
    icon: <GitIcon className={`h-6 w-6 text-red-500`} />,
    title: "Git",
  },

  {
    icon: <PythonIcon className={`h-6 w-6 text-yellow-500`} />,
    title: "Python",
  },
  {
    icon: <MicrosoftAzureDevopsIcon className={`h-6 w-6 text-blue-400`} />,
    title: "AzureDevOps",
  },
  {
    icon: <NextJsIcon className={`h-6 w-6`} />,
    title: "Next.js",
  },
  {
    icon: <BashIcon className={`h-6 w-6 text-orange-500`} />,
    title: "Bash",
  },
  {
    icon: <DotNetIcon className={`h-6 w-6 text-purple-500`} />,
    title: "ASP.NET",
  },
  {
    icon: <CypressIcon className={`h-6 w-6 text-gray-300`} />,
    title: "Cypress",
  },
  {
    icon: <NestJsIcon className={`h-6 w-6 text-red-500`} />,
    title: "Nest.js",
  },
  {
    icon: (
      <Image
        src={ProteusLogo}
        placeholder="blur"
        height={80}
        width={80}
        className={`h-6 w-6`}
        alt={"proteus logo"}
      />
    ),
    title: "Proteus 8",
  },
];
