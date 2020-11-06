import React, { useState } from "react";

import * as Styled from "./styles";

interface MainNavItem {
  title: string;
  slug: string;
}

const mainNavItems: MainNavItem[] = [
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
    title: "Contact Me",
    slug: "/contact/",
  },
];

const MainNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Styled.MainNav open={open}>
        <Styled.ToggleMode
          onClick={() => {
            const root = window.document.documentElement;

            root.classList.remove(!darkMode ? "light" : "dark");

            root.classList.add(darkMode ? "light" : "dark");

            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? (
            <svg
              className="w-8 h-8 md:w-10 md:h-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8 md:w-10 md:h-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </Styled.ToggleMode>
        {mainNavItems.map((item, index) => (
          <Styled.MainNavItem
            key={item.slug}
            to={item.slug}
            activeClassName="active"
            whileTap={{ scale: 0.9 }}
          >
            {item.title}
          </Styled.MainNavItem>
        ))}
      </Styled.MainNav>
      <Styled.ToggleMainNav open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Styled.ToggleMainNav>
    </>
  );
};

export default MainNav;
