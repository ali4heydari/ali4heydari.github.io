import React, { useState } from "react";
import styles from "./MainNav.module.css";
import classNames from "classnames";
import Link from "next/link";
import { ToggleMode } from "./ToggleMode";
import { mainNavItems } from "src/constants";

const MainNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={classNames(styles.mainNav, open && "flex")}>
        {mainNavItems.map((item, index) => (
          <Link key={item.slug} href={item.slug}>
            <a className={styles.mainNavItem}>{item.title}</a>
          </Link>
        ))}
      </nav>
      <button
        className={classNames(
          styles.toggleMainNav,
          open ? styles.toggleMainNavOpen : styles.toggleMainNavClose
        )}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
    </>
  );
};

export default MainNav;
