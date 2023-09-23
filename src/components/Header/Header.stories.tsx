import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import * as tailwindColors from "tailwindcss/colors";
import Header from "../Header";

export default {
  title: "Organism/Header",
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
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) => <Header />;

export const Primary = Template.bind({});

Primary.args = {};
