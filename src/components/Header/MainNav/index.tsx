import React, { useState } from "react";

import * as Styled from "./styles";
import { ToggleMode } from "./ToggleMode";
import { graphql, useStaticQuery } from "gatsby";

const MainNav: React.FC = () => {
  const {
    site: {
      siteMetadata: { mainNavItems },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          mainNavItems {
            title
            slug
          }
        }
      }
    }
  `);

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
      <ToggleMode />
      <Styled.ToggleMainNav open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Styled.ToggleMainNav>
    </>
  );
};

export default MainNav;
