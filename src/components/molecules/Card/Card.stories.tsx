import { StoryFn, Meta } from "@storybook/react";
import React from "react";
import Card from "./Card";

export default {
  title: "Molecules/Card",
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  imageSrc: "/static/images/site/ali4heydari/bitmoji.png",
  imageAlt: "Ali Heydari",
  loading: true,
  title: "Ali Heydari",
  subtitle: "Software Engineer",
};
