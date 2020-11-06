import { StyleSheetManager, ThemeProvider } from "styled-components";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config.js";
import rtlPlugin from "stylis-plugin-rtl";
import { useTranslation } from "react-i18next";
import { Languages } from "utils/enums";
import React from "react";

const { theme } = resolveConfig(tailwindConfig);

export const rtlLanguages: string[] = [Languages.PERSIAN];

const Theme = (props) => {
  const { i18n } = useTranslation();

  /* https://github.com/styled-components/stylis-plugin-rtl
   * NOTE! Use v1 of this plugin for styled-components v5, NOT v2 (v2 is for libraries that have upgraded to stylis v4, which s-c has not yet. At the moment only emotion 11 is updated.)
   * */
  return (
    <StyleSheetManager
      // @ts-ignore
      stylisPlugins={
        rtlLanguages.includes(i18n.language) ? [rtlPlugin] : undefined
      }
    >
      <ThemeProvider {...props} {...{ theme }} />
    </StyleSheetManager>
  );
};

export default Theme;
