import React from "react";
import { ContextType, ThemeContext } from "../../ThemeContext";
import { useTranslation } from "react-i18next";
import { DiscussionEmbed } from "disqus-react";

export const CommentThread: React.FC<any> = (props) => {
  const { colorMode } = React.useContext<ContextType>(ThemeContext);
  const { i18n } = useTranslation();

  const {
    config: { language = i18n.language, ...rest },
    theme = colorMode,
  } = props;

  return (
    <DiscussionEmbed
      config={{
        language,
        ...rest,
      }}
      // @ts-ignore
      theme={theme}
    />
  );
};
