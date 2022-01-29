import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Event from "./index";

export default {
  title: "Atoms/Event",
  component: Event,
} as ComponentMeta<typeof Event>;

const Template: ComponentStory<typeof Event> = (args) => <Event {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "title",
  subtitle: "subtitle",
  startDate: new Date(),
  endDate: "Present",
  children: "Hey",
};
