import { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  /** Expose public folder to storybook as static */
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-backgrounds",
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  staticDirs: ["../public"],

  // https://github.com/storybookjs/storybook/issues/15336#issuecomment-888528747
  docs: {
    autodocs: true,
  },

  typescript: { reactDocgen: false },
};

export default config;
