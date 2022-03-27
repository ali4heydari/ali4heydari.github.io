import styles from "./index.module.css";
import Container from "src/components/Container";
import TitleSection from "src/components/TitleSection";
import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Chip from "src/components/Chip";
import type { Blog } from ".contentlayer/generated";
import CommentThread from "src/components/CommentThread";
import MainLayout from "src/layouts/MainLayout";
import { allBlogs } from ".contentlayer/generated";

const BlogPost: React.FC<{ blog: Blog }> = ({ blog }) => {
  const { i18n } = useTranslation();

  return (
    <MainLayout>
      <Container section maxWidth="lg">
        <TitleSection
          title={`${new Date(blog.publishedAt).toLocaleDateString(
            i18n.language,
            {
              year: "numeric",
              month: "short",
            }
          )}`}
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

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  return { props: { project: blog } };
}

export default BlogPost;
