import type { StoryFn, Meta } from "@storybook/react";
import React from "react";
import ShimmerButton from "./index";

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
    <span className="relative z-10 whitespace-pre text-center text-base font-semibold leading-none tracking-tight text-white">
      Download my resume
    </span>
  ),
};
