import React from "react";

import * as Styled from "./styles";

const Logo: React.FC = () => {
  return (
    <Styled.Logo to="/">
      <Styled.Image>
        {/*<GatsbyImage image={logoImage} alt={logoTitle} />*/}
      </Styled.Image>
      {/*<Styled.Text>{logoTitle}</Styled.Text>*/}
    </Styled.Logo>
  );
};

export default Logo;
