import type { StoryFn, Meta } from "@storybook/react";
import React from "react";
import Footer from "./index";

export default {
  component: Footer,
  title: "Organism/Footer",
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = () => <Footer />;

export const Primary = Template.bind({});

Primary.args = {};
