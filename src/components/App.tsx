import React from "react";

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/config";
import Theme from "./Layout/Theme";

export const App: React.FC = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Theme>{children}</Theme>
    </I18nextProvider>
  );
};
