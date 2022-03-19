import React from "react";
import { DiscussionEmbed, CommentEmbed } from "disqus-react";
import siteConfig from "site.config";
import { useRouter } from "next/router";

const CommentThread: React.FC<any> = (props) => {
  const router = useRouter();
  return (
    <DiscussionEmbed
      shortname={siteConfig.DISCUSS_SHORTNAME}
      config={{
        language: "en-US",
        url: router.asPath,
        // TODO: add title
        // title: "test",
        identifier: router.asPath,
      }}
    />
  );
};

export default CommentThread;
