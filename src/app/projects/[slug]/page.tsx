import type { Metadata, NextPage } from "next";
import CommentThread from "src/components/atoms/CommentThread";
import Mdx from "src/components/atoms/Mdx/Mdx";
import WebShare from "src/components/atoms/Webshare/Webshare";
import { BASE_URL } from "src/constants";
import { getStaticMetadata } from "src/utils/metadata";
import { buildOgImageUrl } from "src/utils/opengraph";
import { projects } from "@/content";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata(props): Promise<Metadata | undefined> {
  const params = await props.params;
  const post = projects.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { cover, slug, startDate, summary, title } = post;

  const ogImage = buildOgImageUrl("projects", title, cover);

  const metadata = getStaticMetadata({
    description: summary || "Blog post by Ali Heydari",
    exactUrl: `${BASE_URL}/projects/${slug}`,
    image: ogImage,
    title: `${title} | Blog – Ali Heydari`,
  });
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      publishedTime: startDate,
      type: "article",
    },
  };
}

const ProjectPage: NextPage<{
  params: Promise<{ slug: string }>;
}> = async (props) => {
  const params = await props.params;
  const project = projects.find((projects) => projects.slug === params.slug);

  if (!project) {
    return notFound();
  }

  const dateTime = `${
    new Date(project.startDate).toISOString().split("T")[0]
  } - ${new Date(project.endDate).toISOString().split("T")[0]}`;

  return (
    <>
      <main className="pt-8 pb-16 antialiased lg:pt-16 lg:pb-24">
        <div className="mx-auto flex max-w-(--breakpoint-xl) justify-between px-4">
          <article className="mx-auto w-full">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
              {project.title}
            </h1>

            <header className="mb-4 lg:mb-6">
              <address className="mb-6 flex flex-wrap items-center justify-end not-italic sm:justify-between">
                <div className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
                  <Image
                    width={64}
                    height={64}
                    className="mr-4 size-16 rounded-full"
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
                        ⏳ {project.readingTime} min read
                      </p>
                    </p>
                  </div>
                </div>
                <div className="size-8 lg:size-10">
                  <WebShare
                    data={{
                      text: `Checkout "${project.title}" by "Ali Heydari"\n`,
                      title: project.title,
                      url: `${BASE_URL}/projects/${project.slug}?utm_source=share_button`,
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
            <Mdx code={project.code} />
            <div className="mt-5 text-center">
              <p>Tags:</p>
              <div className="flex flex-wrap justify-center gap-2 pb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="m-0.5 mr-2 inline-flex items-center rounded-sm border border-gray-500 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-400"
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
          url={`${BASE_URL}/projects/${project.slug}`}
          language="en"
        />
      </main>
    </>
  );
};

export const generateStaticParams = () =>
  projects.map((p) => ({ params: { href: p.slug } }));

export default ProjectPage;
