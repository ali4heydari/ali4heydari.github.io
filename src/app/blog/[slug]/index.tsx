import styles from "./index.module.css";
import Container from "src/components/Container";
import TitleSection from "src/components/TitleSection";
import React from "react";
import MainLayout from "src/layouts/MainLayout";
import { allBlogs } from "../../../../.contentlayer/generated";
import { NextPage } from "next";
import { notFound } from "next/navigation";

const BlogPost: NextPage<{ params: { slug: string } }> = ({ params }) => {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return notFound();
  }

  return (
    <MainLayout>
      <Container section maxWidth="lg">
        <TitleSection
          title={`${new Date(blog.publishedAt).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
          })}`}
          subtitle={blog.title}
        />
        <div dangerouslySetInnerHTML={{ __html: blog.body.html }} />
        <Container section maxWidth="sm">
          <div className={styles.tags}>
            <h6 className={styles.tagsHeader}>Tech Stack:</h6>
            {/*{blog.tags.map((tag) => (*/}
            {/*  <Chip key={tag}>{tag}</Chip>*/}
            {/*))}*/}
          </div>
        </Container>
        {/*<div className={styles.links}>*/}
        {/*  <span>*/}
        {/*    {previous && (*/}
        {/*      <Link href={previous.fields.slug}>*/}
        {/*        <a rel="previous">← {previous.frontmatter.title}</a>*/}
        {/*      </Link>*/}
        {/*    )}*/}
        {/*  </span>*/}
        {/*  <span>*/}
        {/*    {next && (*/}
        {/*      <Link href={next.fields.slug}>*/}
        {/*        <a rel="next">{next.frontmatter.title} →</a>*/}
        {/*      </Link>*/}
        {/*    )}*/}
        {/*  </span>*/}
        {/*</div>*/}
        {/*<CommentThread*/}
        {/*  config={{*/}
        {/*    url: `${siteUrl}/${slug}`,*/}
        {/*    identifier: id,*/}
        {/*    title: blogPost.frontmatter.title,*/}
        {/*  }}*/}
        {/*/>*/}
      </Container>
    </MainLayout>
  );
};

export async function generateStaticParams() {
  return allBlogs.map((p) => ({ params: { slug: p.slug } }));
}

export default BlogPost;
