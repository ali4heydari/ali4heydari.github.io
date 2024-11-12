import { defineCollection, s } from "velite";

export const careers = defineCollection({
  name: "Career",
  pattern: "careers/**/*.mdx",
  schema: s.object({
    code: s.mdx(),
    company: s.string(),
    companySite: s.string().url().optional(),
    endDate: s.string(),
    position: s.string(),
    stack: s.array(s.string()),
    startDate: s.string(),
    tags: s.array(s.string()),
  }),
});
