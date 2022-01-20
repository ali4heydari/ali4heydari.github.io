import Link from "next/link";

import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import Container from "src/components/Container";
import TitleSection from "src/components/TitleSection";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./index.module.css";
import { Chip } from "src/components/Chip";
import { MarkDown } from "src/components/utils/MarkDown";
import { CommentThread } from "src/components/CommentThread";
import { allProjects } from ".contentlayer/data";
import type { Project } from ".contentlayer/types";
import { useMDXComponent } from "next-contentlayer/hooks";

const ProjectPage: React.FC<{ project: Project }> = ({ project }) => {
  const { i18n } = useTranslation();
  const Component = useMDXComponent(project.body.code);

  return (
    <Layout>
      <SEO title={project.title} />
      <Container section maxWidth="lg">
        <TitleSection
          title={`${new Date(project.startDate).toLocaleDateString(
            i18n.language,
            {
              year: "numeric",
              month: "short",
            }
          )}`}
          subtitle={project.title}
        />
        <Component />
        <p>{project.description}</p>
        <Container section maxWidth="sm">
          <div className={styles.tags}>
            <h6 className={styles.tagsHeader}>Tech Stack:</h6>
            {project.tags?.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
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
        {/*    title: project.title,*/}
        {/*  }}*/}
        {/*/>*/}
      </Container>
    </Layout>
  );
};

export async function getStaticPaths() {
  return {
    paths: allProjects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = allProjects.find((project) => project.slug === params.slug);

  return { props: { project } };
}

export default ProjectPage;
