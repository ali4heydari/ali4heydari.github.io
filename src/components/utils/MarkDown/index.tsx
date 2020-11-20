import React from "react";
import { css } from "styled-components";
import tw from "twin.macro";
import { MDXRenderer } from "gatsby-plugin-mdx";

interface Props {
  content: string;
}

export const MarkDown: React.FC<Props> = ({ content }) => (
  <main className="markdown">
    <MDXRenderer children={content} />
  </main>
);
