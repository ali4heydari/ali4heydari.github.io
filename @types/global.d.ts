import React from "react";

declare module "*.jpg";
declare module "*.png";
declare module "*.jpg";
declare module "*.json";

declare module "react" {

  declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
  }
}
