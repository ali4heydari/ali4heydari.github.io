import React from "react";
import Header from "./index";
import type { StoryFn, Meta } from "@storybook/nextjs";

export default {
  component: Header,
  title: "Organism/Header",
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = () => <Header />;

export const Primary = Template.bind({});

Primary.args = {};
