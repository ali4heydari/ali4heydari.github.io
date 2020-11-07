import React from "react";

import { ThemeProvider } from "./ThemeContext";

export const App: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
