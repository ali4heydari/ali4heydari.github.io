import React from "react";

import * as Styled from "./styles";
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

  return (
    <Styled.MainNav>
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
  );
};

export default MainNav;
