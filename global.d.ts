import React from "react";

declare module "*.jpg";
declare module "*.png";
declare module "*.jpg";
declare module "*.json";

import { CSSProp } from "styled-components";

declare module "react" {
  interface Attributes {
    css?: CSSProp;
  }
  declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
  }
}
