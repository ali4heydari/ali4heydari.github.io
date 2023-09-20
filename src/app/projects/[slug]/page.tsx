import Container from "src/components/Container";
import TitleSection from "src/components/TitleSection";
import React from "react";
import Chip from "src/components/Chip";
import { allProjects } from "../../../../.contentlayer/generated";
import { NextPage } from "next";
import { notFound } from "next/navigation";

const ProjectPage: NextPage<{ params: { slug: string } }> = ({ params }) => {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <Container section maxWidth="lg">
        <TitleSection
          title={project.title}
          subtitle={`${project.description} - ${new Date(
            project.startDate
          ).toLocaleDateString("en-GB", {
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
    </>
  );
};

export async function generateStaticParams() {
  return allProjects.map((p) => ({ params: { slug: p.slug } }));
}

export default ProjectPage;
