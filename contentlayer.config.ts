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
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    summary: { type: "string", required: true },
    image: { type: "string", required: true },
  },
  computedFields,
}));

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.mdx",
  bodyType: "mdx",
  fields: {
    category: { type: "string", required: true },
    cover: { type: "string", required: true },
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    startDate: { type: "string", required: true },
    endDate: { type: "string" },
    published: { type: "boolean" },
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

const Tool = defineDocumentType(() => ({
  name: "Tool",
  filePathPattern: "tools/**/*.mdx",
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    subtitle: { type: "string", required: true },
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
  documentTypes: [Blog, Project, Tool, Experience, Education],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
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
