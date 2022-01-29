import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as tailwindColors from "tailwindcss/colors";
import Introduction from "../Introduction";

export default {
  title: "Molecules/Introduction",
  component: Introduction,
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
} as ComponentMeta<typeof Introduction>;

const Template: ComponentStory<typeof Introduction> = (args) => (
  <Introduction {...args} />
);

export const Main = Template.bind({});

Main.args = {};
