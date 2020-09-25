import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Theme from "./Theme";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/config";
import { Footer } from "./Footer";
import "./Layout.css";
import { Seo } from "./Seo";
import SiteConfigs from "../../SiteConfigs";

export const Layout = ({ children, showHeader = true }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <I18nextProvider i18n={i18n}>
      <Theme>
        <main>{children}</main>
        <Footer />
      </Theme>
    </I18nextProvider>
  );
};
