import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Button from "../Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  block: true,
  children: "Click me",
};
