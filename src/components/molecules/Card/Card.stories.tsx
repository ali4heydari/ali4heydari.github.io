import type { StoryFn, Meta } from "@storybook/react";
import React from "react";
import Card from "./Card";

export default {
  component: Card,
  title: "Molecules/Card",
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  imageAlt: "Ali Heydari",
  imageSrc: "/static/images/site/ali4heydari/bitmoji.png",
  loading: true,
  subtitle: "Software Engineer",
  title: "Ali Heydari",
};
