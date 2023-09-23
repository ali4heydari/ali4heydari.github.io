"use client";
import React from "react";
import { DiscussionEmbed, CommentEmbed } from "disqus-react";
import siteConfig from "site.config";
import { useRouter, usePathname } from "next/navigation";

const CommentThread: React.FC<any> = (props) => {
  const pathname = usePathname();
  return (
    <DiscussionEmbed
      shortname={siteConfig.DISCUSS_SHORTNAME}
      config={{
        language: "en-US",
        url: pathname,
        // TODO: add title
        // title: "test",
        identifier: pathname,
      }}
    />
  );
};

export default CommentThread;
