import React from "react";
import styles from "./MainNav.module.css";
import Link from "next/link";
import { mainNavItems } from "src/constants";

const MainNav: React.FC = () => {
  return (
    <nav className={styles.mainNav}>
      {mainNavItems.map((item, index) => (
        <Link key={item.slug} href={item.slug} className={styles.mainNavItem}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
