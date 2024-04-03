import { defineConfig } from "velite";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import {
  blog,
  projects,
  careers,
  educations,
} from "./config/velite/collections";
import rehypeToc from "@jsdevtools/rehype-toc";

export default defineConfig({
  collections: { blog, projects, careers, education: educations },
  root: "./_markdowns",
  mdx: {
    copyLinkedFiles: false,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypeAccessibleEmojis,
      rehypeToc,
      rehypePrettyCode,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
