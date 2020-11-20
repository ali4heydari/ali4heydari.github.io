import React from "react";
import { css } from "styled-components";
import tw from "twin.macro";
import { MDXRenderer } from "gatsby-plugin-mdx";

interface Props {
  content: string;
}

export const MarkDown: React.FC<Props> = ({ content }) => (
  <main
    css={css`
      h1 {
        ${tw`text-6xl`}
      }
      h2 {
        ${tw`text-5xl ms-1`}
      }
      h4 {
        ${tw`text-4xl ms-2`}
      }
      h3 {
        ${tw`text-3xl ms-4`}
      }
      h4 {
        ${tw`text-2xl ms-5`}
      }
      h6 {
        ${tw`text-xl ms-6`}
      }
      ul {
        ${tw`list-disc`}
      }
      ol {
        ${tw`list-decimal`}
      }
      li {
        ${tw`ms-2`}
      }
      p {
        ${tw`text-base ms-6`}
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 > a {
        ${tw`ms-6`}
      }
    `}
  >
    <MDXRenderer children={content} />
  </main>
);
