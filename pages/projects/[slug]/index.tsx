import Container from "src/components/Container";
import TitleSection from "src/components/TitleSection";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./index.module.css";
import Chip from "src/components/Chip";
import { allProjects } from ".contentlayer/generated";
import type { Project } from ".contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MainLayout from "src/layouts/MainLayout";

const ProjectPage: React.FC<{ project: Project }> = ({ project }) => {
  const { i18n } = useTranslation();

  return (
    <MainLayout>
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
        <div dangerouslySetInnerHTML={{ __html: project.body.html }} />
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
    </MainLayout>
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
