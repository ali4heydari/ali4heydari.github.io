import Container from "src/components/Container";
import TitleSection from "src/components/TitleSection";
import React from "react";
import { useTranslation } from "react-i18next";
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
          title={project.title}
          subtitle={`${project.description} - ${new Date(
            project.startDate
          ).toLocaleDateString(i18n.language, {
            year: "numeric",
            month: "short",
          })}`}
        />
        <div dangerouslySetInnerHTML={{ __html: project.body.html }} />
        <Container section maxWidth="sm">
          <h6 className="m-2 w-full text-center text-lg">Tech Stack:</h6>
          <div className="flex flex-wrap justify-center">
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
