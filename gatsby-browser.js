/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "tailwindcss/dist/base.min.css";
import React from "react";

import { App } from "./src/components/App";

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
