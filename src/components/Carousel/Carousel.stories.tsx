import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Carousel from "../Carousel";

export default {
  title: "Molecules/Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
