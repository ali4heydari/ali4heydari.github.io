import type { Metadata, NextPage } from "next";
import CommentThread from "src/components/atoms/CommentThread";
import Mdx from "src/components/atoms/Mdx/Mdx";
import WebShare from "src/components/atoms/Webshare/Webshare";
import { baseUrl } from "src/constants";
import { getStaticMetadata } from "src/utils/metadata";
import { buildOgImageUrl } from "src/utils/opengraph";
import { allProjects } from ".contentlayer/generated";
import Image from "next/image";
import { notFound } from "next/navigation";

export function generateMetadata({ params }): Metadata | undefined {
  const post = allProjects.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, startDate, summary, cover, slug } = post;

  const ogImage = buildOgImageUrl("projects", title, cover);

  const metadata = getStaticMetadata({
    title: `${title} | Blog – Ali Heydari`,
    description: summary || "Blog post by Ali Heydari",
    image: ogImage,
    exactUrl: `https://ali4heydari.tech/projects/${slug}`,
  });
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: startDate,
    },
  };
}

const ProjectPage: NextPage<{ params: { slug: string } }> = ({ params }) => {
  const project = allProjects.find((projects) => projects.slug === params.slug);

  if (!project) {
    return notFound();
  }

  const dateTime = `${
    new Date(project.startDate).toISOString().split("T")[0]
  } - ${new Date(project.endDate).toISOString().split("T")[0]}`;

  return (
    <>
      <main className="pb-16 pt-8 antialiased lg:pb-24 lg:pt-16">
        <div className="mx-auto flex max-w-screen-xl justify-between px-4">
          <article className="mx-auto w-full">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
              {project.title}
            </h1>

            <header className="mb-4 lg:mb-6">
              <address className="mb-6 flex flex-wrap items-center justify-end not-italic sm:justify-between">
                <div className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
                  <Image
                    width={64}
                    height={64}
                    className="mr-4 h-16 w-16 rounded-full"
                    src="/static/images/site/ali4heydari/bitmoji.png"
                    alt="Ali Heydari"
                  />
                  <div>
                    <p
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      Ali Heydari
                    </p>
                    <p className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                      <time
                        className="inline-flex items-center rounded-lg bg-gray-100 px-2 py-0.5 dark:bg-gray-700"
                        dateTime={dateTime}
                        title={dateTime}
                      >
                        🗓 {dateTime}
                      </time>

                      <p className="ml-2 inline-flex items-center rounded-lg bg-gray-100 px-2 py-0.5 text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                        ⏳ {project.readingTime.text}
                      </p>
                    </p>
                  </div>
                </div>
                <div className="h-8 w-8 lg:h-10 lg:w-10">
                  <WebShare
                    data={{
                      title: project.title,
                      text: `Checkout "${project.title}" by "Ali Heydari"\n`,
                      url: `${baseUrl}/projects/${project.slug}`,
                    }}
                  />
                </div>
              </address>
            </header>
            <Image
              src={project.cover}
              alt={project.title}
              width={1200}
              height={1000}
              className="mb-5 rounded-lg object-cover sm:h-64"
            />
            <Mdx code={project.body.code} />
            <div className="mt-5 text-center">
              <p>Tags:</p>
              <div className="flex flex-wrap justify-center gap-2 pb-3">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="m-0.5 mr-2 inline-flex items-center rounded border border-gray-500 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
        <CommentThread
          title={project.title}
          identifier={project.slug}
          url={`${baseUrl}/projects/${project.slug}`}
          language="en"
        />
      </main>
    </>
  );
};

export const generateStaticParams = () =>
  allProjects.map((p) => ({ params: { href: p.slug } }));

export default ProjectPage;
