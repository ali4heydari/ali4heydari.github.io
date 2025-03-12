import {
  FaGitAlt as GitIcon,
  FaGitlab as GitlabIcon,
  FaReact as ReactIcon,
} from "react-icons/fa";
import { FaJava as JavaIcon } from "react-icons/fa6";
import {
  SiGnubash as BashIcon,
  SiDocker as DockerIcon,
  SiDotnet as DotNetIcon,
  SiGatsby as GatsbyIcon,
  SiGraphql as GraphqlIcon,
  SiJavascript as JavascriptIcon,
  SiPython as PythonIcon,
  SiTypescript as TypeScriptIcon,
  SiTailwindcss as TailwindIcon,
  SiCypress as CypressIcon,
  SiNextdotjs as NextJsIcon,
  SiNestjs as NestJsIcon,
  SiProteus as ProteusIcon,
  SiLatex as LaTeXIcon,
  SiStorybook as StorybookIcon,
  SiTestinglibrary as TestingLibraryIcon,
  SiJest as JestIcon,
  SiPuppeteer as PuppeteerIcon,
  SiZod as ZodIcon,
  SiOpenapiinitiative as OpenApiIcon,
  SiPrometheus as PrometheusIcon,
  SiGrafana as GrafanaIcon,
  SiMongodb as MongodbIcon,
  SiRedux as ReduxIcon,
  SiReactquery as ReactQueryIcon,
} from "react-icons/si";
import { TbBrandCSharp as CsharpIcon } from "react-icons/tb";
import { VscAzureDevops as MicrosoftAzureDevopsIcon } from "react-icons/vsc";

export const skills = [
  {
    href: "https://www.typescriptlang.org/",
    icon: <TypeScriptIcon className={"size-6 text-blue-500"} />,
    title: "TypeScript",
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <JavascriptIcon className={"size-6 text-yellow-500"} />,
    title: "JavaScript",
  },
  {
    href: "https://reactjs.org/",
    icon: <ReactIcon className={"size-6 text-blue-400"} />,
    title: "React",
  },
  {
    href: "https://nextjs.org/",
    icon: <NextJsIcon className={"size-6"} />,
    title: "Next.js",
  },
  {
    href: "https://tailwindcss.com/",
    icon: <TailwindIcon className={"size-6 text-teal-400"} />,
    title: "Tailwind CSS",
  },
  {
    href: "https://www.gatsbyjs.com/",
    icon: <GatsbyIcon className={"size-6 text-purple-700"} />,
    title: "Gatsby",
  },
  {
    href: "https://react-query.tanstack.com/",
    icon: <ReactQueryIcon className={"size-6 text-rose-500"} />,
    title: "React Query",
  },
  {
    href: "https://redux.js.org/",
    icon: <ReduxIcon className={"size-6 text-purple-500"} />,
    title: "Redux",
  },
  {
    href: "https://storybook.js.org/",
    icon: <StorybookIcon className={"size-6 text-pink-500"} />,
    title: "Storybook",
  },
  {
    href: "https://testing-library.com/",
    icon: <TestingLibraryIcon className={"size-6 text-red-600"} />,
    title: "Testing Library",
  },
  {
    href: "https://jestjs.io/",
    icon: <JestIcon className={"size-6 text-red-700"} />,
    title: "Jest",
  },
  {
    href: "https://www.cypress.io/",
    icon: <CypressIcon className={"size-6 text-emerald-400"} />,
    title: "Cypress",
  },
  {
    href: "https://pptr.dev/",
    icon: <PuppeteerIcon className={"size-6"} />,
    title: "Puppeteer",
  },
  {
    href: "https://zod.dev",
    icon: <ZodIcon className={"size-6 text-blue-600"} />,
    title: "Zod",
  },
  {
    href: "https://graphql.org/",
    icon: <GraphqlIcon className={"size-6 text-pink-500"} />,
    title: "GraphQL",
  },
  {
    href: "https://git-scm.com/",
    icon: <GitIcon className={"size-6 text-red-500"} />,
    title: "Git",
  },
  {
    href: "https://www.latex-project.org/",
    icon: <LaTeXIcon className="size-6 text-teal-700" />,
    title: "LaTeX",
  },
  {
    href: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    icon: <CsharpIcon className={"size-6"} />,
    title: "C#",
  },
  {
    href: "https://www.java.com/",
    icon: <JavaIcon className={"size-6 text-orange-500"} />,
    title: "Java",
  },
  {
    href: "https://www.python.org/",
    icon: <PythonIcon className={"size-6 text-yellow-500"} />,
    title: "Python",
  },
  {
    href: "https://www.docker.com/",
    icon: <DockerIcon className={"size-6 text-blue-600"} />,
    title: "Docker",
  },
  {
    href: "https://docs.gitlab.com/ee/ci/",
    icon: <GitlabIcon className={"size-6 text-orange-500"} />,
    title: "GitLab CI/CD",
  },
  {
    href: "https://azure.microsoft.com/en-us/services/devops/",
    icon: <MicrosoftAzureDevopsIcon className={"size-6 text-blue-400"} />,
    title: "AzureDevOps",
  },
  {
    href: "https://www.gnu.org/software/bash/",
    icon: <BashIcon className={"size-6 text-orange-500"} />,
    title: "Bash",
  },
  {
    href: "https://dotnet.microsoft.com/apps/aspnet",
    icon: <DotNetIcon className={"size-6 text-purple-500"} />,
    title: "ASP.NET",
  },
  {
    href: "https://nestjs.com/",
    icon: <NestJsIcon className={"size-6 text-rose-600"} />,
    title: "Nest.js",
  },
  {
    href: "https://swagger.io/specification/",
    icon: <OpenApiIcon className={"size-6 text-green-500"} />,
    title: "OpenAPI",
  },
  {
    href: "https://prometheus.io/",
    icon: <PrometheusIcon className={"size-6 text-red-500"} />,
    title: "Prometheus",
  },
  {
    href: "https://grafana.com/",
    icon: <GrafanaIcon className={"size-6 text-orange-600"} />,
    title: "Grafana",
  },
  {
    href: "https://www.mongodb.com/",
    icon: <MongodbIcon className={"size-6 text-green-500"} />,
    title: "MongoDB",
  },
  {
    href: "https://www.labcenter.com/",
    icon: <ProteusIcon className={"size-6 text-blue-600"} />,
    title: "Proteus 8",
  },
];
