import React from "react";
import Hero from "./index";
import type { StoryFn, Meta } from "@storybook/nextjs";

export default {
  component: Hero,
  title: "Templates/Hero",
} satisfies Meta<typeof Hero>;

const Template: StoryFn<typeof Hero> = () => <Hero />;

export const Main = Template.bind({});

Main.args = {};
