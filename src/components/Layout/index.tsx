import { useStaticQuery, graphql } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";

import Header from "components/Header";
import Footer from "components/Footer";

import "assets/styles/global.css";
import GlobalStyles from "assets/styles/globalStyles";
import * as Styled from "./styles";
import React from "react";
import SEO from "../SEO";
import Theme from "./Theme";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n/config";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title = "" }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
        <GlobalStyles />
        <SEO title={title} />
        <AnimatePresence exitBeforeEnter>
          <Styled.Layout>
            <Header siteTitle={data.site.siteMetadata.title} />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              {children}
              <Footer />
            </motion.div>
          </Styled.Layout>
        </AnimatePresence>
      </Theme>
    </I18nextProvider>
  );
};

export default Layout;
