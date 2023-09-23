import TitleSection from "src/components/TitleSection";
import React from "react";
import Chip from "src/components/Chip";
import { allProjects } from "../../../../.contentlayer/generated";
import { NextPage } from "next";
import { notFound } from "next/navigation";
import CommentThread from "../../../components/CommentThread";

const ProjectPage: NextPage<{ params: { slug: string } }> = ({ params }) => {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <div>
        <TitleSection>{project.title}</TitleSection>
        <div dangerouslySetInnerHTML={{ __html: project.body.html }} />
        <h6 className="m-2 w-full text-center text-lg">Tech Stack:</h6>
        <div className="flex flex-wrap justify-center">
          {project.tags?.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
        <CommentThread />
      </div>
    </>
  );
};

export async function generateStaticParams() {
  return allProjects.map((p) => ({ params: { href: p.slug } }));
}

export default ProjectPage;
