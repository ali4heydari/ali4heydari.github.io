import React from "react";
import Footer from "./index";
import type { StoryFn, Meta } from "@storybook/nextjs";

export default {
  component: Footer,
  title: "Organism/Footer",
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = () => <Footer />;

export const Primary = Template.bind({});

Primary.args = {};
