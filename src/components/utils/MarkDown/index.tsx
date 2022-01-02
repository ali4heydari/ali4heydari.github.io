import React from "react";

interface Props {
  content: string;
}

export const MarkDown: React.FC<Props> = ({ content }) => (
  <main className="markdown">{JSON.stringify(content)}</main>
);
