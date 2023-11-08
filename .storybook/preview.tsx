import { Preview } from "@storybook/react";
import "../src/styles/global.css";

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    darkMode: {
      name: "Dark mode",
      description: "Dark mode for components",
      defaultValue: false,
    },
  },
};
