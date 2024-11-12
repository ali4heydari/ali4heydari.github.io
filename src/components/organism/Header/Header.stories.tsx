import type { StoryFn, Meta } from "@storybook/react";
import React from "react";
import Header from "./index";
import * as tailwindColors from "tailwindcss/colors";

export default {
  component: Header,
  parameters: {
    background: {
      default: "light",
      values: [
        {
          name: "light",
          value: tailwindColors.white,
        },
        {
          name: "dark",
          value: tailwindColors.gray["800"],
        },
      ],
    },
  },
  title: "Organism/Header",
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = () => <Header />;

export const Primary = Template.bind({});

Primary.args = {};
