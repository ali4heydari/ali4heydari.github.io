import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import CommentThread from "./index";

export default {
  title: "Molecules/CommentThread",
  component: CommentThread,
} as Meta<typeof CommentThread>;

const Template: StoryFn<typeof CommentThread> = (args) => (
  <CommentThread {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  url: "https://ali4heydari.tech/blog/nextjs-redirects",
  identifier: "nextjs-redirects",
  title: "Next.js Redirects",
};
