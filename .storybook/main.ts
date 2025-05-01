import path from "path";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
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

  webpackFinal: async (config) => {
    /**
     * Add support for alias-imports
     * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
     */
    // @ts-expect-error - TS doesn't know about this property
    config.resolve.alias = {
      ...config.resolve?.alias,
      "@": [path.resolve(__dirname, "../src/"), path.resolve(__dirname, "../")],
    };

    /**
     * Fixes font import with /
     * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
     */
    // @ts-expect-error - TS doesn't know about this property
    config.resolve.roots = [
      path.resolve(__dirname, "../public"),
      "node_modules",
    ];

    // @ts-expect-error - TS doesn't know about this property
    config.resolve.plugins = [
      // @ts-expect-error - TS doesn't know about this property
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin(),
    ];

    // https://github.com/tailwindlabs/tailwindcss/issues/3258
    // @ts-expect-error - TS doesn't know about this property
    config.module.rules.forEach((loaders) => {
      // @ts-expect-error - TS doesn't know about this property
      if (Array.isArray(loaders.use)) {
        // @ts-expect-error - TS doesn't know about this property
        loaders.use.forEach((l) => {
          if (
            typeof l !== "string" &&
            typeof l.loader === "string" &&
            /(?<!post)css-loader/.test(l.loader)
          ) {
            if (!l.options.modules) return;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  docs: {
    autodocs: true,
  },

  typescript: { reactDocgen: false },
};

export default config;
