import React from "react";
import styles from "./MainNav.module.css";
import Link from "next/link";

const MainNav: React.FC = () => {
  return (
    <nav className={styles.mainNav}>
      {[{ slug: "hi", title: "hi" }].map((item, index) => (
        <Link key={item.slug} href={item.slug}>
          <a className={styles.mainNavItem}>{item.title}</a>
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
