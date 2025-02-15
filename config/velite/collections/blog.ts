import { s, defineCollection } from "velite";

export const blog = defineCollection({
  name: "Blog",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      code: s.mdx(),
      cover: s.string(),
      coverSource: s.string().optional(),
      isDraft: s.boolean().optional().default(false),
      metadata: s.metadata(),
      publishedAt: s.string(),
      slug: s.path().transform((path) => path.split("/").pop()),
      summary: s.string(),
      tags: s.array(s.string()),
      title: s.string(),
    })
    .transform((data) => {
      const { metadata, ...blogData } = data;
      return {
        ...blogData,
        readingTime: metadata.readingTime,
        wordCount: metadata.wordCount,
      };
    }),
});
