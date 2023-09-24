import TitleSection from "src/components/TitleSection";
import React from "react";
import Chip from "src/components/Chip";
import { allBlogs } from "../../../../.contentlayer/generated";
import { Metadata, NextPage } from "next";
import { notFound } from "next/navigation";
import CommentThread from "../../../components/CommentThread";
import { buildOgImageUrl } from "../../../utils/opengraph";
import { getStaticMetadata } from "../../../utils/metadata";

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

  return (
    <>
      <div>
        <TitleSection>{blog.title}</TitleSection>
        <div dangerouslySetInnerHTML={{ __html: blog.body.html }} />
        <h6 className="m-2 w-full text-center text-lg">Tech Stack:</h6>
        <div className="flex flex-wrap justify-center">
          {blog.tags?.map((tag) => <Chip key={tag}>{tag}</Chip>)}
        </div>
        <CommentThread />
      </div>
    </>
  );
};

export const generateStaticParams = async () =>
  allBlogs.map((p) => ({ params: { href: p.slug } }));

export default BlogPage;
