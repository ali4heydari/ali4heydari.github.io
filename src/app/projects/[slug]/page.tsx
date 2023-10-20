import TitleSection from "src/components/atoms/TitleSection";
import { allProjects } from "../../../../.contentlayer/generated";
import { Metadata, NextPage } from "next";
import { notFound } from "next/navigation";
import CommentThread from "../../../components/atoms/CommentThread";
import Mdx from "../../../components/atoms/Mdx/Mdx";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allProjects.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    startDate: publishedTime,
    summary: description,
    cover,
    slug,
  } = post;
  const ogImage = cover
    ? `https://ali4heydari.tech/${cover}`
    : `https://ali4heydari.tech/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://ali4heydari.tech/projects/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

const ProjectPage: NextPage<{ params: { slug: string } }> = ({ params }) => {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <div>
        <TitleSection>{project.title}</TitleSection>
        <Mdx code={project.body.code} />
        <h6 className="m-2 w-full text-center text-lg">Tech Stack:</h6>
        <div className="flex flex-wrap justify-center">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-indigo-50 dark:bg-indigo-700 dark:text-gray-200 rounded-lg border border-gray-900 dark:border-gray-400 px-1.5 py-0.7 m-1"
            >
              {tag}
            </span>
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
