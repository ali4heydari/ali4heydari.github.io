import React from "react";
import { useTranslation } from "react-i18next";
import { DiscussionEmbed } from "disqus-react";

const CommentThread: React.FC<any> = (props) => {
  const { i18n } = useTranslation();

  const {
    config: { language = i18n.language, ...rest },
  } = props;

  return (
    <DiscussionEmbed
      shortname={""}
      config={{
        language,
        ...rest,
      }}
    />
  );
};

export default CommentThread;
