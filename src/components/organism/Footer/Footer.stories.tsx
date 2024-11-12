import type { StoryFn, Meta } from "@storybook/react";
import React from "react";
import Footer from "./index";
import * as tailwindColors from "tailwindcss/colors";

export default {
  component: Footer,
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
  title: "Organism/Footer",
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = (args) => <Footer />;

export const Primary = Template.bind({});

Primary.args = {};
