import type { StoryFn, Meta } from "@storybook/react";
import React from "react";
import Hero from "./index";

export default {
  component: Hero,
  title: "Templates/Hero",
} as Meta<typeof Hero>;

const Template: StoryFn<typeof Hero> = () => <Hero />;

export const Main = Template.bind({});

Main.args = {};
