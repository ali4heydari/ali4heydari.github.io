import path from "path";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  /** Expose public folder to storybook as static */
  staticDirs: ["../public"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-backgrounds",
    "storybook-css-modules-preset",
    "storybook-tailwind-dark-mode",
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  webpackFinal: async (config) => {
    /**
     * Add support for alias-imports
     * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
     */
    config.resolve.alias = {
      ...config.resolve?.alias,
      "@": [path.resolve(__dirname, "../src/"), path.resolve(__dirname, "../")],
    };

    /**
     * Fixes font import with /
     * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
     */
    config.resolve.roots = [
      path.resolve(__dirname, "../public"),
      "node_modules",
    ];

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin(),
    ];

    // https://github.com/tailwindlabs/tailwindcss/issues/3258
    config.module.rules.forEach((loaders) => {
      if (Array.isArray(loaders.use)) {
        loaders.use.forEach((l) => {
          if (
            typeof l !== "string" &&
            typeof l.loader === "string" &&
            /(?<!post)css-loader/.test(l.loader)
          ) {
            if (!l.options.modules) return;
            const { getLocalIdent, ...others } = l.options.modules;
            l.options = {
              ...l.options,
              modules: {
                ...others,
                getLocalIdent: (ctx, localIdentName, localName) => {
                  if (localName === "dark") return localName;
                  return null;
                },
              },
            };
          }
        });
      }
    });

    return config;
  },

  // https://github.com/storybookjs/storybook/issues/15336#issuecomment-888528747
  typescript: { reactDocgen: false },

  docs: {
    autodocs: true,
  },
};

export default config;
