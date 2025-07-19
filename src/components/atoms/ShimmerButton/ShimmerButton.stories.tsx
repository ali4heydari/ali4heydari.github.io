import React from "react";
import ShimmerButton from "./index";
import type { StoryFn, Meta } from "@storybook/nextjs";

export default {
  component: ShimmerButton,
  title: "Molecules/ShimmerButton",
} as Meta<typeof ShimmerButton>;

const Template: StoryFn<typeof ShimmerButton> = (args) => (
  <ShimmerButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  children: (
    <span className="relative z-10 text-center text-base leading-none font-semibold tracking-tight whitespace-pre text-white">
      Download my resume
    </span>
  ),
};
