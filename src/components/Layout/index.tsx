import { motion, AnimatePresence } from "framer-motion";

import Header from "src/components/Header";
import Footer from "src/components/Footer";

import React from "react";
import styles from "./Layout.module.css";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title = "" }) => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <main className={styles.layout}>
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
        </main>
      </AnimatePresence>
    </>
  );
};

export default Layout;
