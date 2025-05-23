import React from "react";
import {
  CiCalendar as CalendarIcon,
  CiClock1 as ClockIcon,
} from "react-icons/ci";
import type { NextPage } from "next";
import TitleSection from "src/components/atoms/TitleSection";
import { BASE_URL } from "src/constants";
import { getStaticMetadata } from "src/utils/metadata";
import { buildOgImageUrl } from "src/utils/opengraph";
import { blog as allBlogs } from "@/content";
import Image from "next/image";
import Link from "next/link";

export const metadata = getStaticMetadata({
  description:
    "Blog posts by Ali Heydari. Here I share some thoughts, stories, information and more about software development, programming, tech or my personal life",
  exactUrl: `${BASE_URL}/blog`,
  image: buildOgImageUrl("blog"),
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
  title: "Blog – Ali Heydari",
});

const BlogPage: NextPage = () => {
  return (
    <section>
      {!!allBlogs.length && <TitleSection center>Blog posts</TitleSection>}
      <div className="my-10 grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
        {allBlogs
          .filter((blog) => !blog.isDraft)
          .sort(
            (a, b) =>
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime(),
          )
          .map((blog) => {
            const publishDateText = new Date(
              blog.publishedAt,
            ).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            });

            return (
              <article
                key={blog.title}
                className="w-full rounded-lg border border-gray-200 p-5 transition-shadow duration-200 hover:shadow-xl dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <Link title={blog.title} href={`/blog/${blog.slug}`}>
                  <Image
                    width={500}
                    height={500}
                    src={blog.cover}
                    className="mb-5 rounded-lg"
                    alt={blog.title}
                  />
                  <h2 className="mb-2 text-xl leading-tight font-bold text-gray-900 dark:text-white">
                    {blog.title}
                  </h2>
                  <div className="mb-6 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <time
                      dateTime={blog.publishedAt.split("T")[0]}
                      title={publishDateText}
                    >
                      <CalendarIcon className="mr-1 inline-block size-4" />
                      {publishDateText}
                    </time>
                    <span>
                      <ClockIcon className="mr-1 inline-block size-4" />
                      {blog.readingTime} min read
                    </span>
                  </div>
                  <p className="mb-4 text-gray-500 dark:text-gray-400">
                    {blog.summary}
                  </p>
                  <div className="flex flex-wrap justify-center pb-3">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="m-0.5 inline-flex items-center rounded-sm border border-gray-500 bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-400"
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
