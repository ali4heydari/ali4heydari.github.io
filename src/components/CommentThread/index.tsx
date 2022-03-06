import React from "react";
import { DiscussionEmbed } from "disqus-react";
import siteConfig from "site.config";

const CommentThread: React.FC<any> = (props) => {
  return (
    <DiscussionEmbed
      shortname={siteConfig.DISCUSS_SHORTNAME}
      config={{
        language: "en-US",
      }}
    />
  );
};

export default CommentThread;
