import React from "react";
import { NextPage } from "next";
import TitleSection from "../../components/TitleSection";
import { allBlogs } from "../../../.contentlayer/generated";
import Link from "next/link";
import { buildOgImageUrl } from "../../utils/opengraph";
import { getStaticMetadata } from "../../utils/metadata";

export const metadata = getStaticMetadata({
  title: "Blog – Ali Heydari",
  description:
    // eslint-disable-next-line max-len
    "Blog posts by Ali Heydari. Here I share some thoughts, stories, information and more about software development, programming, tech or my personal life",
  exactUrl: "https://ali4heydari.tech/blog",
  keywords: [
    "tech",
    "software",
    "development",
    "thoughts",
    "opinions",
    "blog",
    "content",
    "story",
    "storytelling",
    "news",
  ],
  image: buildOgImageUrl("blog"),
});

const BlogPage: NextPage = () => {
  return (
    <section>
      {!!allBlogs.length && <TitleSection center>Blog posts</TitleSection>}
      <div className="grid gap-20 sm:grid-cols-2 my-10">
        {allBlogs.map(({ title, summary, _id, tags, slug, cover }) => (
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

export default BlogPage;

export const runtime = "edge";
