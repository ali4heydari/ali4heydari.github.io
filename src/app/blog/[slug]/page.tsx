import React from "react";
import { allBlogs } from "../../../../.contentlayer/generated";
import { Metadata, NextPage } from "next";
import { notFound } from "next/navigation";
import CommentThread from "../../../components/atoms/CommentThread";
import { buildOgImageUrl } from "../../../utils/opengraph";
import { getStaticMetadata } from "../../../utils/metadata";
import Image from "next/image";
import { baseUrl } from "../../../constants";
import WebShare from "../../../components/atoms/Webshare/Webshare";
import Mdx from "../../../components/atoms/Mdx/Mdx";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, publishedAt, summary, cover, slug } = post;

  const ogImage = buildOgImageUrl("blog", title, cover);

  const metadata = getStaticMetadata({
    title: `${title} | Blog – Ali Heydari`,
    description: summary || "Blog post by Ali Heydari",
    image: ogImage,
    exactUrl: `https://ali4heydari.tech/blog/${slug}`,
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
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return notFound();
  }

  const publishDateText = new Date(blog.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );
  return (
    <>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
              {blog.title}
            </h1>

            <header className="mb-4 lg:mb-6">
              <address className="flex flex-wrap items-center mb-6 not-italic justify-end sm:justify-between">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <Image
                    width={64}
                    height={64}
                    className="mr-4 w-16 h-16 rounded-full"
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
                    <p className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                      <time
                        className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 inline-flex items-center rounded-lg"
                        dateTime={
                          new Date(blog.publishedAt).toISOString().split("T")[0]
                        }
                        title={publishDateText}
                      >
                        🗓 {publishDateText}
                      </time>

                      <p className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-lg px-2 py-0.5 inline-flex items-center ml-2">
                        ⏳ {blog.readingTime.text}
                      </p>
                    </p>
                  </div>
                </div>
                <div className="lg:h-10 lg:w-10 w-8 h-8">
                  <WebShare
                    data={{
                      title: blog.title,
                      text: `Checkout "${blog.title}" by "Ali Heydari"\n`,
                      url: `${baseUrl}/blog/${blog.slug}`,
                    }}
                  />
                </div>
              </address>
            </header>
            <Image
              src={blog.cover}
              alt={blog.title}
              width={1200}
              height={1000}
              className="mb-5 rounded-lg object-cover sm:h-64"
            />
            <Mdx code={blog.body.code} />
            <div className="text-center mt-5">
              <p>Tags:</p>
              <div className="flex flex-wrap gap-2 pb-3 justify-center">
                {blog.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="m-0.5 bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
          <CommentThread
            title={blog.title}
            identifier={blog.slug}
            url={`${baseUrl}/blog/${blog.slug}`}
            language="en"
          />
        </div>
      </main>
    </>
  );
};

export const generateStaticParams = async () =>
  allBlogs.map((p) => ({ params: { href: p.slug } }));

export default BlogPage;
