import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as tailwindColors from "tailwindcss/colors";
import Banner from "../Banner";

export default {
  title: "Molecules/Banner",
  component: Banner,
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
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Main = Template.bind({});

Main.args = {};
