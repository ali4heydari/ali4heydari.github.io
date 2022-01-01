import { useStaticQuery, graphql } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";

import Header from "src/components/Header";
import Footer from "src/components/Footer";

import "src/assets/styles/global.css";
import GlobalStyles from "src/assets/styles/globalStyles";
import * as Styled from "./styles";
import React from "react";
import SEO from "../SEO";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title = "" }) => {
  return (
    <>
      <GlobalStyles />
      <SEO title={title} />
      <AnimatePresence exitBeforeEnter>
        <Styled.Layout>
          <Header siteTitle={"title"} />
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
    </>
  );
};

export default Layout;
