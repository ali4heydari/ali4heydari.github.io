"use client";

import { DiscussionEmbed, CommentEmbed } from "disqus-react";
import { ComponentProps } from "react";
import siteConfig from "../../../../site.config";

const CommentThread = (
  props: ComponentProps<typeof DiscussionEmbed>["config"],
) => (
  <DiscussionEmbed
    shortname={siteConfig.DISCUSS_SHORTNAME || ""}
    config={props}
  />
);

export default CommentThread;
