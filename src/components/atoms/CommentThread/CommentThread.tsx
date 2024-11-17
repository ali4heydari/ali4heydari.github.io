"use client";

import { DiscussionEmbed } from "disqus-react";
import type { ComponentProps } from "react";
import { env } from "src/env";

const CommentThread = (
  props: ComponentProps<typeof DiscussionEmbed>["config"],
) => (
  <DiscussionEmbed
    shortname={env.NEXT_PUBLIC_DISCUSS_SHORTNAME}
    config={props}
  />
);

export default CommentThread;
