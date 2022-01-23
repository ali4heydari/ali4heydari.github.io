import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
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
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
