import React from "react";
import CommentThread from "./index";
import type { StoryFn, Meta } from "@storybook/nextjs";

export default {
  component: CommentThread,
  title: "Molecules/CommentThread",
} satisfies Meta<typeof CommentThread>;

const Template: StoryFn<typeof CommentThread> = (args) => (
  <CommentThread {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  identifier: "nextjs-redirects",
  title: "Next.js Redirects",
  url: "https://ali4heydari.tech/blog/nextjs-redirects",
};
