import React from "react";
import { NextPage } from "next";
import TitleSection from "../../components/atoms/TitleSection";
import { allBlogs } from "../../../.contentlayer/generated";
import Link from "next/link";
import { buildOgImageUrl } from "../../utils/opengraph";
import { getStaticMetadata } from "../../utils/metadata";
import Image from "next/image";

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
      <div className="grid gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  my-10">
        {allBlogs.map((blog) => {
          const publishDateText = new Date(blog.publishedAt).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            },
          );

          return (
            <article
              key={blog.title}
              className="w-full border rounded-lg border-gray-200 dark:border-gray-700 p-5 hover:shadow-xl transition-shadow duration-200 dark:hover:bg-gray-800"
            >
              <Link title={blog.title} href={`/blog/${blog.slug}`}>
                <Image
                  width={500}
                  height={500}
                  src={blog.cover}
                  className="mb-5 rounded-lg"
                  alt={blog.title}
                />
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  {blog.title}
                </h2>
                <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center mb-6 justify-between">
                  <time
                    dateTime={blog.publishedAt.split("T")[0]}
                    title={publishDateText}
                  >
                    🗓️{publishDateText}
                  </time>
                  <p>⏳{blog.readingTime.text}</p>
                </div>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  {blog.summary}
                </p>
                <div className="flex flex-wrap pb-3 justify-center">
                  {blog.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="m-0.5 bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-1.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default BlogPage;

export const runtime = "edge";
