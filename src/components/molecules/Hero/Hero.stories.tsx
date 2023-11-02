import type { StoryFn, Meta } from "@storybook/react";
import React from "react";
import Hero from "./index";
import * as tailwindColors from "tailwindcss/colors";

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
} as Meta<typeof Hero>;

const Template: StoryFn<typeof Hero> = () => <Hero />;

export const Main = Template.bind({});

Main.args = {};
