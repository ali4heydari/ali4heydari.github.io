import styles from "./index.module.css";
import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import Container from "src/components/ui/Container";
import TitleSection from "src/components/ui/TitleSection";
import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Chip } from "src/components/ui/Chip";
import { MarkDown } from "src/components/utils/MarkDown";
import { CommentThread } from "src/components/ui/CommentThread";

interface BlogPost {
  body: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    description: string;
    date: string;
    tags: string[];
  };
}

interface Props {
  data: {
    mdx: BlogPost;
  };
  pageContext: {
    slug: string;
    next: BlogPost;
    previous: BlogPost;
    id: string;
    siteUrl: string;
  };
}

const BlogPost: React.FC<Props> = ({ data, pageContext }) => {
  const blogPost = data.mdx;
  const { i18n } = useTranslation();
  const { previous, next, slug, id, siteUrl } = pageContext;

  return (
    <Layout>
      <SEO title={blogPost.frontmatter.title} />
      <Container section maxWidth="lg">
        <TitleSection
          title={`${new Date(blogPost.frontmatter.date).toLocaleDateString(
            i18n.language,
            {
              year: "numeric",
              month: "short",
            }
          )}`}
          subtitle={blogPost.frontmatter.title}
        />
        <p>{blogPost.frontmatter.description}</p>
        <MarkDown content={blogPost.body} />
        <Container section maxWidth="sm">
          <div className={styles.tags}>
            <h6 className={styles.tagsHeader}>Tech Stack:</h6>
            {blogPost.frontmatter.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        </Container>
        <div className={styles.links}>
          <span>
            {previous && (
              <Link href={previous.fields.slug}>
                <a rel="previous">← {previous.frontmatter.title}</a>
              </Link>
            )}
          </span>
          <span>
            {next && (
              <Link href={next.fields.slug}>
                <a rel="next">{next.frontmatter.title} →</a>
              </Link>
            )}
          </span>
        </div>
        <CommentThread
          config={{
            url: `${siteUrl}/${slug}`,
            identifier: id,
            title: blogPost.frontmatter.title,
          }}
        />
      </Container>
    </Layout>
  );
};

export default BlogPost;
