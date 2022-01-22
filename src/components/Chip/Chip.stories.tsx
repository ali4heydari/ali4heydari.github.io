import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Chip from "../Chip";

export default {
  title: "Molecules/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  href: "https://example.com",
  children: "this in children",
};
