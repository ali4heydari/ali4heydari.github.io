import React from "react";
import { css } from "styled-components";

interface Props {
  content: any;
}

const FormatHtml: React.FC<Props> = ({ content }) => (
  <span
    css={css`
      ol,
      ul {
        list-style: initial;
      }
    `}
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />
);

export default FormatHtml;
