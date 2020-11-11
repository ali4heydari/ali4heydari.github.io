import React from "react";
import { css } from "styled-components";
import tw from "twin.macro";

interface Props {
  content: any;
}

const FormatHtml: React.FC<Props> = ({ content }) => (
  <span
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />
);

export const MarkDown: React.FC<Props> = ({ content }) => (
  <main
    css={css`
      h1 {
        ${tw`text-4xl`}
      }
      h2 {
        ${tw`text-3xl`}
      }
      h4 {
        ${tw`text-2xl`}
      }
      h3 {
        ${tw`text-xl`}
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
        ${tw`text-base`}
      }
    `}
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />
);

export default FormatHtml;
