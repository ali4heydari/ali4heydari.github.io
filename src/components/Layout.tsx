import React from "react";

import Theme from "./Theme";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/config";
import { Footer } from "./Footer";
import "./Layout.css";
import { Header } from "./Header";

export const Layout = ({ children, showHeader = true }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Theme>
        <Header />
        <main>{children}</main>
        <Footer />
      </Theme>
    </I18nextProvider>
  );
};
