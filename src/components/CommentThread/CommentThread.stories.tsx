import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import CommentThread from "../CommentThread";

export default {
  title: "Molecules/CommentThread",
  component: CommentThread,
} as Meta<typeof CommentThread>;

const Template: StoryFn<typeof CommentThread> = (args) => (
  <CommentThread {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  href: "https://example.com",
  children: "this in children",
};
