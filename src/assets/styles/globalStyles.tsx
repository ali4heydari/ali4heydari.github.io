import { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

export default createGlobalStyle`
  body {
    ${tw`m-0 text-interactive bg-primary`};
  }

  a {
    ${tw`text-interactive hover:text-interactive`};
  }

  p + p {
    ${tw`mt-3`};
  }
`;
