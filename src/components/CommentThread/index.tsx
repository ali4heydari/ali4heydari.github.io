"use client";
import { ComponentProps } from "react";
import { DiscussionEmbed, CommentEmbed } from "disqus-react";
import siteConfig from "site.config";

const CommentThread = (
  props: ComponentProps<typeof DiscussionEmbed>["config"],
) => (
  <DiscussionEmbed
    shortname={siteConfig.DISCUSS_SHORTNAME || ""}
    config={props}
  />
);

export default CommentThread;
