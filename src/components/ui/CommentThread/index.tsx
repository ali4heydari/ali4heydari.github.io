import React from "react";
import * as Styled from "./styles";
import { ContextType, ThemeContext } from "../../ThemeContext";
import { useTranslation } from "react-i18next";

export const CommentThread: React.FC<Styled.DisqusProps> = (
  props: Styled.DisqusProps
) => {
  const { colorMode } = React.useContext<ContextType>(ThemeContext);
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
