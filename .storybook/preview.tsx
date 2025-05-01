import { Preview } from "@storybook/react";
import "../src/styles/global.css";

export const preview: Preview = {
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
