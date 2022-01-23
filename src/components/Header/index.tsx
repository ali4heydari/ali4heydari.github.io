import React from "react";
import styles from "./Header.module.css";
import { mainNavItems } from "../../constants";
import Link from "next/link";

const Header = () => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <nav className="py-3 px-2">
        {mainNavItems.map((item, index) => (
          <Link key={item.slug} href={item.slug}>
            <a className={styles.navItem}>{item.title}</a>
          </Link>
        ))}
      </nav>
    </header>
  </div>
);

export default Header;
