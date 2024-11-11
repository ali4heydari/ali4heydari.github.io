import { defineCollection, s } from "velite";

export const educations = defineCollection({
  name: "Education",
  pattern: "educations/**/*.mdx",
  schema: s.object({
    code: s.mdx(),
    endDate: s.string(),
    startDate: s.string(),
    subtitle: s.string(),
    tags: s.array(s.string()).optional(),
    title: s.string(),
  }),
});
