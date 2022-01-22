import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CommentThread from "../CommentThread";

export default {
  title: "Molecules/CommentThread",
  component: CommentThread,
} as ComponentMeta<typeof CommentThread>;

const Template: ComponentStory<typeof CommentThread> = (args) => (
  <CommentThread {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  href: "https://example.com",
  children: "this in children",
};
