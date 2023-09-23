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
    <>
      <TitleSection>{blog.title}</TitleSection>
      <div dangerouslySetInnerHTML={{ __html: blog.body.html }} />;
      <div className={styles.tags}>
        <h6 className={styles.tagsHeader}>Tech Stack:</h6>
        {/*{blog.tags.map((tag) => (*/}
        {/*  <Chip key={tag}>{tag}</Chip>*/}
        {/*))}*/}
      </div>
    </>
  );
};

export async function generateStaticParams() {
  return allBlogs.map((p) => ({ params: { href: p.slug } }));
}

export default BlogPost;
