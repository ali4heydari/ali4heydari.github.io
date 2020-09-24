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
import { SkillCard } from "./SkillCard";

interface SkillsProps {
  subheading?: string;
  description?: string;
}

export function Skills({ subheading, description }: SkillsProps) {
  const cards = [
    {
      imageSrc: <GraphqlIcon css={tw`text-pink-500`} />,
      title: "GraphQL",
      description:
        "Experience with Apollo GraphQL client v2 & v3 and Graphine library in Django",
    },
    {
      imageSrc: <TypeScriptIcon css={tw`text-blue-500`} />,
      title: "TypeScript",
      description:
        "Strong TypeScript skills. Generic and functional coding in that",
    },
    {
      imageSrc: <JavascriptIcon css={tw`text-yellow-500`} />,
      title: "JavaScript",
      description:
        "Skilled at EcmaScript6. Knowledge about Promises, spread, Map etc",
    },
    {
      imageSrc: <ReactIcon css={tw`text-blue-600`} />,
      title: "React",
      description: "Skilled at React.js, functional components & hooks",
    },
    {
      imageSrc: <DockerIcon css={tw`text-blue-600`} />,
      title: "Docker",
      description: "Basic containerization (docker & docker-compose) knowledge",
    },
    {
      imageSrc: <GitIcon css={tw`text-red-500`} />,
      title: "Git",
      description:
        "Strong experience with basic Git command and familiar with advanced commands like squash, pick, rebase, bisec etc",
    },
    {
      imageSrc: <DotNetIcon />,
      title: "ASP dotnet core",
      description: "Familiar with ASP .Net Core",
    },
    {
      imageSrc: <CsharpIcon />,
      title: "Csharp",
      description: "Strong C# skills",
    },
    {
      imageSrc: <BashIcon />,
      title: "Bash",
      description: "Proficient in bash shell scripting",
    },
    {
      imageSrc: <PythonIcon />,
      title: "Python",
      description: "Strong python skills",
    },
  ];

  return (
    <div css={tw`relative`} id="skills">
      <div
        css={tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
      >
        {subheading ? (
          <h5 css={tw`font-bold text-primary-500 mb-4`}>{subheading}</h5>
        ) : null}
        <h2
          css={tw`text-4xl sm:text-5xl font-black tracking-wide text-center w-full`}
        >
          Technical <span css={tw`text-primary-500`}>Skills</span>
        </h2>
        {description ? (
          <p
            css={tw`w-full text-center mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl`}
          >
            {description}
          </p>
        ) : null}
        <div css={tw`mt-10 w-full`} />
        {cards.map((card, i) => (
          <div css={tw`md:w-1/2 lg:w-1/3 max-w-sm`} key={card.title}>
            <SkillCard
              title={card.title}
              description={card.description}
              icon={card.imageSrc}
            />
          </div>
        ))}
      </div>
      <div
        css={tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
      />
    </div>
  );
}