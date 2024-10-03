const path = require("path");

const plugins = [
  "react",
  "@typescript-eslint",
  "no-relative-import-paths",
  "typescript-sort-keys",
];

const settings = {
  "import/parsers": {
    "@typescript-eslint/parser": [".ts", ".tsx"],
  },
  "import/resolver": {
    typescript: {
      project: ".",
    },
  },
  "react": {
    version: "detect",
  },
};

/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    node: true,
    es2021: true,
    browser: true,
  },
  ignorePatterns: [
    "public/mockServiceWorker.js",
    "!.prettierrc.js",
    "!.eslintrc.js",
  ],
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    /*
     * https://stackoverflow.com/a/44690309
     *
     * Make sure to put it last, so it gets the chance to override other configs.
     * https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
     */
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    ecmaVersion: "latest",
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins,
  rules: {
    "prettier/prettier": [
      "error",
      {
        usePrettierrc: true,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "typescript-sort-keys/interface": "error",
    "typescript-sort-keys/string-enum": "error",
    "no-relative-import-paths/no-relative-import-paths": [
      "warn",
      { allowSameFolder: true },
    ],

    // TODO: Remove these rules
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
  },
  settings,
  overrides: [
    // Permit require import on js(x) files (only banned on ts(x) files)
    {
      files: ["**/*.js?(x)"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    // Only uses Storybook lint rules in stories files
    {
      files: ["**/src/**/?(*.)+(stories).[jt]sx"],
      extends: ["plugin:storybook/recommended"],
    },
    // Only uses Testing Library lint rules in test files
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:jest/recommended", "plugin:testing-library/react"],
      plugins: [...plugins, "testing-library", "jest"],
      env: {
        jest: true,
      },
      settings: {
        ...settings,
        jest: {
          version: require("jest/package.json").version,
        },
      },
    },
    // Only uses Cypress lint rules in test files
    {
      files: ["**/cypress/**/?(*.)+(cy).[jt]s?(x)"],
      extends: ["plugin:cypress/recommended"],
      parserOptions: {
        project: true,
        tsconfigRootDir: path.resolve(__dirname, "./cypress"),
      },
      plugins: [...plugins, "cypress"],
      env: {
        "cypress/globals": true,
      },
      rules: {
        "cypress/no-force": "warn",
        "cypress/no-pause": "error",
        "cypress/no-async-tests": "error",
        "react/react-in-jsx-scope": "off",
        "cypress/no-unnecessary-waiting": "error",
        "cypress/no-assigning-return-values": "error",
        "cypress/assertion-before-screenshot": "warn",
      },
    },
  ],
};
