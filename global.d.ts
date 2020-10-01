import React from "react";

declare module "*.jpg";
declare module "*.png";
declare module "*.jpg";
declare module "*.json";

import { CSSProp } from "styled-components";

declare module "react" {
  interface Attributes {
    css?: CSSProp;
    // https://github.com/emotion-js/emotion/issues/1137#issuecomment-615571356
    as?: React.ElementType | keyof JSX.IntrinsicElements;
  }
  declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
  }
}
