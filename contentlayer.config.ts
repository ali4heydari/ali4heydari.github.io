import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";

import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeToc from "@jsdevtools/rehype-toc";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    summary: { type: "string", required: true },
    cover: { type: "string", required: true },
    readingTime: { type: "json" },
    wordCount: {
      type: "number",
    },
    tags: {
      type: "list",
      default: [],
      of: {
        type: "string",
      },
    },
  },
  computedFields,
}));

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.mdx",
  contentType: "mdx",
  fields: {
    category: { type: "string", required: true },
    cover: { type: "string", required: true },
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    startDate: { type: "string", required: true },
    endDate: { type: "string" },
    published: { type: "boolean" },
    readingTime: { type: "json" },
    wordCount: {
      type: "number",
    },
    tags: {
      type: "list",
      default: [],
      of: {
        type: "string",
      },
    },
  },
  computedFields,
}));

const Experience = defineDocumentType(() => ({
  name: "Experience",
  filePathPattern: "experiences/**/*.mdx",
  bodyType: "mdx",
  fields: {
    company: { type: "string", required: true },
    position: { type: "string", required: true },
    startDate: { type: "string", required: true },
    endDate: { type: "string", required: true },
    tags: {
      type: "list",
      default: [],
      of: {
        type: "string",
      },
    },
    stack: {
      type: "list",
      default: [],
      of: {
        type: "string",
      },
    },
  },
  computedFields,
}));

const Education = defineDocumentType(() => ({
  name: "Education",
  filePathPattern: "educations/**/*.mdx",
  bodyType: "mdx",
  fields: {
    university: { type: "string", required: true },
    degree: { type: "string", required: true },
    startDate: { type: "string", required: true },
    endDate: { type: "string", required: true },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: "_markdowns",
  documentTypes: [Blog, Project, Experience, Education],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypeAccessibleEmojis,
      // @ts-expect-error
      rehypeToc,
      // @ts-expect-error
      rehypePrism,
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

export default contentLayerConfig;
