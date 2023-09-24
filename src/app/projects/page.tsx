import React from "react";
import { NextPage } from "next";
import { allProjects } from "../../../.contentlayer/generated";
import Link from "next/link";
import TitleSection from "../../components/TitleSection";
import { buildOgImageUrl } from "../../utils/opengraph";
import { getStaticMetadata } from "../../utils/metadata";

export const metadata = getStaticMetadata({
  title: "Projects – Ali Heydari",
  description:
    "Projects by Ali Heydari. Get to know the projects I've worked on.",
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
      <div className="grid gap-20 sm:grid-cols-2 my-10">
        {allProjects.map(({ title, summary, _id, tags, slug, cover }) => (
          <article key={_id} className="w-full flex justify-between">
            <div className="w-2/3 flex flex-col justify-between">
              <div>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <Link href={`/projects/${slug}`}>{title}</Link>
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  {summary}
                </p>
              </div>
              <div className="flex flex-wrap pb-3">
                {tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="m-0.5 bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Link href={`/projects/${slug}`} className="">
              <img
                src={cover}
                className="mb-5 rounded-lg object-cover sm:h-64"
                alt="Image 1"
              />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
