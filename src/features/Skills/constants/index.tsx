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
    href: "https://www.typescriptlang.org/",
    icon: <TypeScriptIcon className={`size-6 text-blue-500`} />,
    title: "TypeScript",
  },
  {
    href: "https://www.latex-project.org/",
    icon: (
      <div className={`flex size-6 items-center justify-center font-bold`}>
        <span>
          L<sup>A</sup>T<sub>E</sub>X
        </span>
      </div>
    ),
    title: "LaTeX",
  },
  {
    href: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    icon: <CsharpIcon className={`size-6`} />,
    title: "C#",
  },
  {
    href: "https://graphql.org/",
    icon: <GraphqlIcon className={`size-6 text-pink-500`} />,
    title: "GraphQL",
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <JavascriptIcon className={`size-6 text-yellow-500`} />,
    title: "JavaScript",
  },
  {
    href: "https://reactjs.org/",
    icon: <ReactIcon className={`size-6 text-blue-400`} />,
    title: "React",
  },
  {
    href: "https://www.gatsbyjs.com/",
    icon: <GatsbyIcon className={`size-6 text-purple-700`} />,
    title: "Gatsby",
  },

  {
    href: "https://docs.gitlab.com/ee/ci/",
    icon: <GitlabIcon className={`size-6 text-orange-500`} />,
    title: "GitLab CI/CD",
  },
  {
    href: "https://tailwindcss.com/",
    icon: <TailwindIcon className={`size-6 text-teal-400`} />,
    title: "Tailwind CSS",
  },
  {
    href: "https://www.java.com/",
    icon: <JavaIcon className={`size-6 text-orange-500`} />,
    title: "Java",
  },
  {
    href: "https://www.docker.com/",
    icon: <DockerIcon className={`size-6 text-blue-600`} />,
    title: "Docker",
  },
  {
    href: "https://git-scm.com/",
    icon: <GitIcon className={`size-6 text-red-500`} />,
    title: "Git",
  },

  {
    href: "https://www.python.org/",
    icon: <PythonIcon className={`size-6 text-yellow-500`} />,
    title: "Python",
  },
  {
    href: "https://azure.microsoft.com/en-us/services/devops/",
    icon: <MicrosoftAzureDevopsIcon className={`size-6 text-blue-400`} />,
    title: "AzureDevOps",
  },
  {
    href: "https://nextjs.org/",
    icon: <Image alt="Next.js" src={nextJsIcon} className={`size-6`} />,
    title: "Next.js",
  },
  {
    href: "https://www.gnu.org/software/bash/",
    icon: <BashIcon className={`size-6 text-orange-500`} />,
    title: "Bash",
  },
  {
    href: "https://dotnet.microsoft.com/apps/aspnet",
    icon: <DotNetIcon className={`size-6 text-purple-500`} />,
    title: "ASP.NET",
  },
  {
    href: "https://www.cypress.io/",
    icon: (
      <Image
        alt="Cypress"
        src={cypressIcon}
        className={`size-6 text-gray-300`}
      />
    ),
    title: "Cypress",
  },
  {
    href: "https://nestjs.com/",
    icon: (
      <Image alt="Nest.js" src={nestJsIcon} className={`size-6 text-red-500`} />
    ),
    title: "Nest.js",
  },
  {
    href: "https://www.labcenter.com/",
    icon: (
      <Image
        src={ProteusLogo}
        placeholder="blur"
        height={80}
        width={80}
        className={`size-6`}
        alt={"proteus logo"}
      />
    ),
    title: "Proteus 8",
  },
];
