import { defineCollection, s } from "velite";

export const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.mdx",
  schema: s
    .object({
      category: s.string(),
      code: s.mdx(),
      cover: s.string(),
      endDate: s.string(),
      metadata: s.metadata(),
      published: s.boolean(),
      slug: s.path().transform((path) => path.split("/").pop()),
      startDate: s.string(),
      summary: s.string(),
      tags: s.array(s.string()),
      title: s.string(),
    })
    .transform(({ metadata, ...data }) => {
      return {
        ...data,
        readingTime: metadata.readingTime,
        wordCount: metadata.wordCount,
      };
    }),
});
