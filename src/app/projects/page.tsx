import React from "react";
import { NextPage } from "next";
import { allProjects } from "../../../.contentlayer/generated";
import Link from "next/link";
import TitleSection from "../../components/TitleSection";
import { buildOgImageUrl } from "../../utils/opengraph";
import { getStaticMetadata } from "../../utils/metadata";
import Image from "next/image";

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
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
        Here is a list of projects that I&#39;ve worked on. I&#39;ve worked on
        many more projects, but I can&#39;t share them here because of the NDA.
      </p>
      <div className="grid gap-20 grid-cols-1 lg:grid-cols-2 my-10">
        {allProjects.map((project) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug}`}
            className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200"
          >
            <article className="w-full flex justify-between">
              <div className="w-2/3 flex flex-col justify-between">
                <div>
                  <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="flex flex-wrap font-light justify-start gap-1 text-xs text-gray-500 dark:text-gray-400">
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
                      className="m-0.5 bg-gray-100 text-gray-800 text-xs font-light inline-flex items-center px-1.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Image
                src={project.cover}
                className="mb-5 rounded-lg object-cover h-64 aspect-[2/3]"
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
