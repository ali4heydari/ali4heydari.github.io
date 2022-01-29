import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as tailwindColors from "tailwindcss/colors";
import Hero from "../Hero";

export default {
  title: "Templates/Hero",
  component: Hero,
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
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Main = Template.bind({});

Main.args = {};
