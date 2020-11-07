import React, { useCallback } from "react";

import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from "../../constants";

type Mode = "light" | "dark";

export type ContextType = {
  setColorMode?: (value: Mode) => void;
  colorMode?: Mode;
};

export const ThemeContext = React.createContext<ContextType>({});

export const ThemeProvider: React.FC = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState<Mode | undefined>(
    undefined
  );

  const setColorMode = useCallback(
    (newValue: Mode) => {
      const root = window.document.documentElement;

      localStorage.setItem(COLOR_MODE_KEY, newValue);

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;

        root.style.setProperty(cssVarName, colorByTheme[newValue]);
      });

      rawSetColorMode(newValue);
    },
    [colorMode, rawSetColorMode]
  );

  const contextValue = React.useMemo(() => {
    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  React.useEffect(() => {
    const root = window.document.documentElement;

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    ) as Mode;

    setColorMode(initialColorValue);
  }, []);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
