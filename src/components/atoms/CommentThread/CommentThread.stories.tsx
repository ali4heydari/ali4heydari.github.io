import type { StoryFn, Meta } from "@storybook/react";
import React from "react";
import CommentThread from "./index";

export default {
  component: CommentThread,
  title: "Molecules/CommentThread",
} as Meta<typeof CommentThread>;

const Template: StoryFn<typeof CommentThread> = (args) => (
  <CommentThread {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  identifier: "nextjs-redirects",
  title: "Next.js Redirects",
  url: "https://ali4heydari.tech/blog/nextjs-redirects",
};
