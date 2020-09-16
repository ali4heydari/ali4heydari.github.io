declare module "*.svg";
declare module "*.jpg";
declare module "*.png";
declare module "*.jpg";
declare module "*.json";

import { CSSProp } from "styled-components";

declare module "react" {
  interface Attributes {
    css?: CSSProp;
  }
}
