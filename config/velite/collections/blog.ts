import { s, defineCollection } from "velite";

export const blog = defineCollection({
  name: "Blog",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      title: s.string(),
      summary: s.string(),
      slug: s.path().transform((path) => path.split("/").pop()!),
      publishedAt: s.string(),
      tags: s.array(s.string()),
      cover: s.string(),
      coverSource: s.string().optional(),
      isDraft: s.boolean().optional().default(false),
      metadata: s.metadata(),
      code: s.mdx(),
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
