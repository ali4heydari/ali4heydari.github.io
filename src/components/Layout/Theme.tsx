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

  return (
    <StyleSheetManager
      stylisPlugins={
        rtlLanguages.includes(i18n.language) ? [rtlPlugin] : undefined
      }
    >
      <ThemeProvider {...props} {...{ theme }} />
    </StyleSheetManager>
  );
};

export default Theme;
