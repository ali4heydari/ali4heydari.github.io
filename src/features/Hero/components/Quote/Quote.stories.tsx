import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as tailwindColors from "tailwindcss/colors";
import Quote from "../Quote";

export default {
  title: "Molecules/Quote",
  component: Quote,
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
} as ComponentMeta<typeof Quote>;

const Template: ComponentStory<typeof Quote> = (args) => <Quote {...args} />;

export const Main = Template.bind({});

Main.args = {
  quote:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident.",
};
