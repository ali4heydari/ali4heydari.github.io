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

  return (
    <>
      <Styled.MainNav open={open}>
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
      <Styled.ToogleMainNav open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Styled.ToogleMainNav>
    </>
  );
};

export default MainNav;
