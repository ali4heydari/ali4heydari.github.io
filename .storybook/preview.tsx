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
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
