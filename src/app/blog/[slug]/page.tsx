import React from "react";
import type { Metadata, NextPage } from "next";
import CommentThread from "src/components/atoms/CommentThread";
import Mdx from "src/components/atoms/Mdx/Mdx";
import WebShare from "src/components/atoms/Webshare/Webshare";
import { BASE_URL } from "src/constants";
import { getStaticMetadata } from "src/utils/metadata";
import { buildOgImageUrl } from "src/utils/opengraph";
import { blog as allBlog } from "@/content";
import Image from "next/image";
import { notFound } from "next/navigation";

export function generateMetadata({ params }): Metadata | undefined {
  const post = allBlog.find(
    (post) => post.slug === params.slug && !post.isDraft,
  );
  if (!post) {
    return;
  }

  const { title, publishedAt, summary, cover, slug } = post;

  const ogImage = buildOgImageUrl("blog", title, cover);

  const metadata = getStaticMetadata({
    title: `${title} | Blog – Ali Heydari`,
    description: summary || "Blog post by Ali Heydari",
    image: ogImage,
    exactUrl: `${BASE_URL}/blog/${slug}`,
  });
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: publishedAt,
    },
  };
}

const BlogPage: NextPage<{ params: { slug: string } }> = ({ params }) => {
  const post = allBlog.find(
    (blog) => blog.slug === params.slug && !blog.isDraft,
  );

  if (!post) {
    return notFound();
  }

  const publishDateText = new Date(post.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );
  return (
    <>
      <main className="pb-16 pt-8 antialiased lg:pb-24 lg:pt-16">
        <div className="mx-auto flex max-w-screen-xl justify-between px-4">
          <article className="mx-auto w-full">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
              {post.title}
            </h1>

            <header className="mb-4 lg:mb-6">
              <address className="mb-6 flex flex-wrap items-center justify-end not-italic sm:justify-between">
                <div className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
                  <Image
                    width={64}
                    height={64}
                    className="mr-4 h-16 w-16 rounded-full"
                    src="/static/images/site/ali4heydari/bitmoji.png"
                    alt="Ali Heydari"
                  />
                  <div>
                    <p
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      Ali Heydari
                    </p>
                    <p className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                      <time
                        className="inline-flex items-center rounded-lg bg-gray-100 px-2 py-0.5 dark:bg-gray-700"
                        dateTime={
                          new Date(post.publishedAt).toISOString().split("T")[0]
                        }
                        title={publishDateText}
                      >
                        🗓 {publishDateText}
                      </time>

                      <p className="ml-2 inline-flex items-center rounded-lg bg-gray-100 px-2 py-0.5 text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                        ⏳ {post.readingTime} min read
                      </p>
                    </p>
                  </div>
                </div>
                <div className="h-8 w-8 lg:h-10 lg:w-10">
                  <WebShare
                    data={{
                      title: post.title,
                      text: `Checkout "${post.title}" by "Ali Heydari"\n`,
                      url: `${BASE_URL}/blog/${post.slug}?utm_source=share_button`,
                    }}
                  />
                </div>
              </address>
            </header>
            <Image
              src={post.cover}
              alt={post.title}
              width={1200}
              height={1000}
              className="mb-5 rounded-lg object-cover sm:h-64"
            />
            <Mdx code={post.code} />
            <div className="mt-5 text-center">
              <p>Tags:</p>
              <div className="flex flex-wrap justify-center gap-2 pb-3">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="m-0.5 mr-2 inline-flex items-center rounded border border-gray-500 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
      <CommentThread
        title={post.title}
        identifier={post.slug}
        url={`${BASE_URL}/blogs/${post.slug}`}
        language="en"
      />
    </>
  );
};

export const generateStaticParams = () =>
  allBlog.map((p) => ({ params: { href: p.slug } }));

export default BlogPage;
