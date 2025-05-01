import { Preview } from "@storybook/react";
import Providers from "../src/providers";
import "../src/styles/global.css";
import { withThemeByClassName } from "@storybook/addon-themes";

export const preview: Preview = {
  decorators: [
    withThemeByClassName({
      defaultTheme: "light",
      themes: {
        dark: "dark",
        light: "light",
      },
    }),
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
  globalTypes: {
    darkMode: {
      defaultValue: false,
      description: "Dark mode for components",
      name: "Dark mode",
    },
  },
  parameters: {
    background: {
      default: "light",
      values: [
        {
          name: "light",
          value: "var(--color-white)",
        },
        {
          name: "dark",
          value: "var(--color-gray-800)",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
