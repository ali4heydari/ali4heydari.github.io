import React from "react";
import * as Styled from "./styles";

export const CommentThread: React.FC<Styled.DisqusProps> = ({
  config,
  theme,
}: Styled.DisqusProps) => {
  return <Styled.DisqusThread config={config} theme={theme} />;
};
