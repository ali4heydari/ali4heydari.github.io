import { defineCollection, s } from "velite";

export const educations = defineCollection({
  name: "Education",
  pattern: "educations/**/*.mdx",
  schema: s.object({
    title: s.string(),
    subtitle: s.string(),
    tags: s.array(s.string()).optional(),
    startDate: s.string(),
    endDate: s.string(),
    code: s.mdx(),
  }),
});
