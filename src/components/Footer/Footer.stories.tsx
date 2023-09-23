import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import * as tailwindColors from "tailwindcss/colors";
import Footer from "../Footer";

export default {
  title: "Organism/Footer",
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
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
