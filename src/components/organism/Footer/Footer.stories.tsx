import React from "react";
import Providers from "../../../providers";
import Footer from "./index";
import type { StoryFn, Meta } from "@storybook/nextjs";

export default {
  component: Footer,
  // IDK why I should repeat this, since it is already defined in .storybook/preview.tsx
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
  title: "Organism/Footer",
} satisfies Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = () => <Footer />;

export const Primary = Template.bind({});

Primary.args = {};
