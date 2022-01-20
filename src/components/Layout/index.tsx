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
    <main className={styles.layout}>
      <Header siteTitle={"title"} />
      <div>
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
