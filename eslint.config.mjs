import pluginReact from "eslint-plugin-react";
import globals from "globals";
import * as pluginImportResolverTs from "eslint-import-resolver-typescript";
import pluginImportX from "eslint-plugin-import-x";
import pluginNoRelativeImport from "eslint-plugin-no-relative-import-paths";
import pluginPerfectionist from "eslint-plugin-perfectionist";
import pluginPromise from "eslint-plugin-promise";
import pluginStorybook from "eslint-plugin-storybook";
import pluginTailwind from "eslint-plugin-tailwindcss";
import pluginTestingLibrary from "eslint-plugin-testing-library";
import pluginTypescriptSortKeys from "eslint-plugin-typescript-sort-keys";
import typescriptEslint, {
  configs as typescriptEslintConfigs,
  parser as typescriptEslintParser,
  plugin as typescriptEslintPlugin,
} from "typescript-eslint";
import eslint from "@eslint/js";
import pluginNext from "@next/eslint-plugin-next";
import pluginTanStackQuery from "@tanstack/eslint-plugin-query";
import pluginPackageJson from "eslint-plugin-package-json/configs/recommended";
import pluginPrettier from "eslint-plugin-prettier/recommended";

export default typescriptEslint.config(
  {
    ignores: ["public/**", ".next/**", ".cache/**", ".velite/**"],
  },
  eslint.configs.recommended,
  // eslint.configs.all,
  ...typescriptEslintConfigs.recommended,
  pluginImportX.flatConfigs.recommended,
  pluginImportX.flatConfigs.typescript,
  {
    extends: [...typescriptEslintConfigs.strictTypeChecked],
    files: ["**/*.ts?(x)"],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...pluginReact.configs.flat.recommended,
    ...pluginReact.configs.flat["jsx-runtime"],
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  ...pluginTanStackQuery.configs["flat/recommended"],
  ...pluginTailwind.configs["flat/recommended"],
  pluginPromise.configs["flat/recommended"],
  {
    files: ["package.json"],
    ...pluginPackageJson,
  },
  {
    files: ["**/*.test.(t|j)sx?", "**/*.spec.(t|j)sx?", "**/__tests__/**/*"],
    ...pluginTestingLibrary.configs["flat/dom"],
    ...pluginTestingLibrary.configs["flat/react"],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.amd,
      },
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        projectService: true,
        sourceType: "module",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
  {
    plugins: {
      "@next/next": pluginNext,
      "@typescript-eslint": typescriptEslintPlugin,
      "importResolverTs": pluginImportResolverTs,
      "no-relative-import-paths": pluginNoRelativeImport,
      "typescript-sort-keys": pluginTypescriptSortKeys,
    },
  },
  ...pluginStorybook.configs["flat/recommended"],
  {
    files: ["**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
    rules: {
      "storybook/default-exports": "error",
      "storybook/hierarchy-separator": "error",
    },
  },
  {
    ignores: ["package.json"],
    plugins: {
      perfectionist: pluginPerfectionist,
    },
    rules: {
      "perfectionist/sort-interfaces": [
        "error",
        {
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          type: "alphabetical",
        },
      ],
    },
    settings: {
      perfectionist: {
        partitionByComment: true,
        type: "line-length",
      },
    },
  },
  {
    rules: {
      // TODO: Enable these rules
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "import-x/export": "off",
      "import-x/namespace": "off",
      "import-x/no-named-as-default": "off",
      "sort-keys": "off",
      "tailwindcss/no-custom-classname": "off",
    },
  },
  /*
  Prettier plugin must be the last item
  https://github.com/prettier/eslint-plugin-prettier/blob/b307125faeb58b6dbfd5d8812b2dffcfdc8358df/README.md#configuration-new-eslintconfigjs
  */
  pluginPrettier,
);
