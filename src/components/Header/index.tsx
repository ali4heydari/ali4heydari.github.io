import React from "react";
import styles from "./Header.module.css";
import { mainNavItems } from "src/constants";
import Link from "next/link";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const onChangeTheme = (event) => {
    setTheme(event.target?.value || "light");
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <nav className="hidden w-auto flex-wrap py-3 px-2 md:flex">
          {mainNavItems.map((item, index) => (
            <Link key={item.slug} href={item.slug}>
              <a className={styles.navItem}>{item.title}</a>
            </Link>
          ))}
        </nav>
        <select
          name="theme"
          value={theme}
          onChange={onChangeTheme}
          className={styles.themeSelect}
        >
          <option value="system">System preferences</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </header>
    </div>
  );
};

export default Header;
