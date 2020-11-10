import React from "react";
import { css } from "styled-components";

interface Props {
  content: any;
}

const FormatHtml: React.FC<Props> = ({ content }) => (
  <main
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />
);

export default FormatHtml;
