import React from "react";
import { NextPage } from "next";
import { allProjects } from "../../../.contentlayer/generated";
import TitleSection from "../../components/atoms/TitleSection";
import { getStaticMetadata } from "../../utils/metadata";
import { buildOgImageUrl } from "../../utils/opengraph";
import Image from "next/image";
import Link from "next/link";

export const metadata = getStaticMetadata({
  title: "Projects – Ali Heydari",
  description:
    "Projects by Ali Heydari. Get to know the projects I&#39;ve worked on.",
  exactUrl: "https://ali4heydari.tech/projects",
  keywords: [
    "tech",
    "software",
    "development",
    "project",
    "portfolio",
    "app",
    "programming",
    "open-source",
  ],
  image: buildOgImageUrl("projects"),
});

const ProjectsPage: NextPage = () => {
  return (
    <section>
      <TitleSection center>Projects</TitleSection>
      <p className="mb-4 text-xl text-gray-600 dark:text-gray-400">
        Here is a list of projects that I&#39;ve worked on. I&#39;ve worked on
        many more projects, but I can&#39;t share them here because of the NDA.
      </p>
      <div className="my-10 grid grid-cols-1 gap-20 lg:grid-cols-2">
        {allProjects.map((project) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug}`}
            className="rounded-lg border-2 border-gray-200 p-5 transition-colors duration-200 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500"
          >
            <article className="flex w-full flex-col-reverse justify-between lg:flex-row">
              <div className="flex w-2/3 flex-col justify-between">
                <div>
                  <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="flex flex-wrap justify-start gap-1 text-xs font-light text-gray-500 dark:text-gray-400">
                    <time>
                      🗓️ {project.startDate} - {project.endDate ?? "Present"}
                    </time>
                    <span>⏳ {project.readingTime.text}</span>
                  </p>
                </div>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  {project.summary}
                </p>
                <div className="flex flex-wrap pb-3">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="m-0.5 mr-2 inline-flex items-center rounded border border-gray-500 bg-gray-100 px-1.5 py-0.5 text-xs font-light text-gray-800 dark:bg-gray-700 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Image
                src={project.cover}
                className="mb-5 aspect-[2/3] h-64 rounded-lg object-cover"
                alt={project.title}
                width={600}
                height={900}
              />
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
