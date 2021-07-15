import React from "react";
import * as Styled from "./styles";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../../hooks";

export const CommentThread: React.FC<Styled.DisqusProps> = (
  props: Styled.DisqusProps
) => {
  const [colorMode] = useDarkMode();
  const { i18n } = useTranslation();

  const {
    config: { language = i18n.language, ...rest },
    theme = colorMode,
  } = props;

  return (
    <Styled.DisqusThread
      config={{
        language,
        ...rest,
      }}
      theme={theme}
    />
  );
};
