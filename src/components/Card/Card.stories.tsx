import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Card from "../Card";

export default {
  title: "Molecules/Card",
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Hi",
};
