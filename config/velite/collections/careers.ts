import { defineCollection, s } from "velite";

export const careers = defineCollection({
  name: "Career",
  pattern: "careers/**/*.mdx",
  schema: s.object({
    company: s.string(),
    position: s.string(),
    companySite: s.string().url().optional(),
    startDate: s.string(),
    endDate: s.string(),
    tags: s.array(s.string()),
    stack: s.array(s.string()),
    code: s.mdx(),
  }),
});
