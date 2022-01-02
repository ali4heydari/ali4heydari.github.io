import React, { useState } from "react";
import styles from "./MainNav.module.css";
import classNames from "classnames";
import Link from "next/link";
import { ToggleMode } from "./ToggleMode";

const MainNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  const mainNavItems = [
    {
      title: "Home",
      slug: "/",
    },
    {
      title: "Resume",
      slug: "/resume/",
    },
    {
      title: "Skills",
      slug: "/skills/",
    },
    {
      title: "Tools",
      slug: "/tools/",
    },
    {
      title: "Projects",
      slug: "/projects/",
    },
    {
      title: "Blog",
      slug: "/blog/",
    },
    {
      title: "Contact Me",
      slug: "/contact/",
    },
  ];
  return (
    <>
      <nav className={classNames(styles.mainNav, open && "flex")}>
        {mainNavItems.map((item, index) => (
          <Link key={item.slug} href={item.slug}>
            <a className={styles.mainNavItem}>{item.title}</a>
          </Link>
        ))}
      </nav>
      <ToggleMode />
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
