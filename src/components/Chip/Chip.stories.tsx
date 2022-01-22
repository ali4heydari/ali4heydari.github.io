import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as tailwindColors from "tailwindcss/colors";
import Chip from "../Chip";

export default {
  title: "Molecules/Chip",
  component: Chip,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    type: {
      control: {
        type: "radio",
        options: [
          "default",
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
        ],
      },
    },
  },
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
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
  <div className="max-w-lg">
    <Chip {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  children: "this in children",
  type: "primary",
};
