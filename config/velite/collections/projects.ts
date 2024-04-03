import { defineCollection, s } from "velite";

export const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.mdx",
  schema: s
    .object({
      category: s.string(),
      cover: s.string(),
      title: s.string(),
      summary: s.string(),
      startDate: s.string(),
      endDate: s.string(),
      published: s.boolean(),
      metadata: s.metadata(),
      tags: s.array(s.string()),
      code: s.mdx(),
      slug: s.path().transform((path) => path.split("/").pop()!),
    })
    .transform(({ metadata, ...data }) => {
      return {
        ...data,
        readingTime: metadata.readingTime,
        wordCount: metadata.wordCount,
      };
    }),
});
