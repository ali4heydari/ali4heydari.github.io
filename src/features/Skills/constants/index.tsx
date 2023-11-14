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
import ProteusLogo from "src/assets/images/logos/proteus-logo.png";
import cypressIcon from "src/assets/svg/cypress.svg";
import nestJsIcon from "src/assets/svg/nestjs.svg";
import nextJsIcon from "src/assets/svg/next-js.svg";
import Image from "next/image";

export const skills = [
  {
    icon: <TypeScriptIcon className={`h-6 w-6 text-blue-500`} />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
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
    href: "https://www.latex-project.org/",
  },
  {
    icon: <CsharpIcon className={`h-6 w-6`} />,
    title: "C#",
    href: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    icon: <GraphqlIcon className={`h-6 w-6 text-pink-500`} />,
    title: "GraphQL",
    href: "https://graphql.org/",
  },
  {
    icon: <JavascriptIcon className={`h-6 w-6 text-yellow-500`} />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: <ReactIcon className={`h-6 w-6 text-blue-400`} />,
    title: "React",
    href: "https://reactjs.org/",
  },
  {
    icon: <GatsbyIcon className={`h-6 w-6 text-purple-700`} />,
    title: "Gatsby",
    href: "https://www.gatsbyjs.com/",
  },

  {
    icon: <GitlabIcon className={`h-6 w-6 text-orange-500`} />,
    title: "GitLab CI/CD",
    href: "https://docs.gitlab.com/ee/ci/",
  },
  {
    icon: <TailwindIcon className={`h-6 w-6 text-teal-400`} />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },
  {
    icon: <JavaIcon className={`h-6 w-6 text-orange-500`} />,
    title: "Java",
    href: "https://www.java.com/",
  },
  {
    icon: <DockerIcon className={`h-6 w-6 text-blue-600`} />,
    title: "Docker",
    href: "https://www.docker.com/",
  },
  {
    icon: <GitIcon className={`h-6 w-6 text-red-500`} />,
    title: "Git",
    href: "https://git-scm.com/",
  },

  {
    icon: <PythonIcon className={`h-6 w-6 text-yellow-500`} />,
    title: "Python",
    href: "https://www.python.org/",
  },
  {
    icon: <MicrosoftAzureDevopsIcon className={`h-6 w-6 text-blue-400`} />,
    title: "AzureDevOps",
    href: "https://azure.microsoft.com/en-us/services/devops/",
  },
  {
    icon: <Image alt="Next.js" src={nextJsIcon} className={`h-6 w-6`} />,
    title: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    icon: <BashIcon className={`h-6 w-6 text-orange-500`} />,
    title: "Bash",
    href: "https://www.gnu.org/software/bash/",
  },
  {
    icon: <DotNetIcon className={`h-6 w-6 text-purple-500`} />,
    title: "ASP.NET",
    href: "https://dotnet.microsoft.com/apps/aspnet",
  },
  {
    icon: (
      <Image
        alt="Cypress"
        src={cypressIcon}
        className={`h-6 w-6 text-gray-300`}
      />
    ),
    title: "Cypress",
    href: "https://www.cypress.io/",
  },
  {
    icon: (
      <Image
        alt="Nest.js"
        src={nestJsIcon}
        className={`h-6 w-6 text-red-500`}
      />
    ),
    title: "Nest.js",
    href: "https://nestjs.com/",
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
    href: "https://www.labcenter.com/",
  },
];
