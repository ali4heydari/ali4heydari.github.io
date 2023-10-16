import React from "react";
import { allBlogs } from "../../../../.contentlayer/generated";
import { Metadata, NextPage } from "next";
import { notFound } from "next/navigation";
import CommentThread from "../../../components/CommentThread";
import { buildOgImageUrl } from "../../../utils/opengraph";
import { getStaticMetadata } from "../../../utils/metadata";
import Image from "next/image";

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
            <Image
              src={blog.cover}
              alt={blog.title}
              width={1200}
              height={1000}
              className="mb-5 rounded-lg object-cover sm:h-64"
            />
            <header className="mb-4 lg:mb-6">
              <address className="flex items-center mb-6 not-italic">
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
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      <time
                        dateTime={blog.publishedAt.split("T")[0]}
                        title={publishDateText}
                      >
                        {publishDateText}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
            </header>
            <div
              className="prose max-w-full dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: blog.body.html }}
            />
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
        </div>
      </main>
    </>
  );
};

export const generateStaticParams = async () =>
  allBlogs.map((p) => ({ params: { href: p.slug } }));

export default BlogPage;
