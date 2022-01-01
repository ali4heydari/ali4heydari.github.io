import React from "react";

import * as Styled from "./styles";

const MainNav: React.FC = () => {
  return (
    <Styled.MainNav>
      {[].map((item, index) => (
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
