import { ToggleMode as ToggleModeButtonBase } from "./styles";
import React, { useState } from "react";

type Theme = "dark" | "light";

const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs as "dark" | "light";
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  // If you want to use light theme as the default, return "light" instead
  return "dark";
};

export const ToggleMode = ({
  initialTheme = getInitialTheme(),
}: {
  initialTheme?: Theme;
}) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  const rawSetTheme = (theme) => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      const isDark = theme === "dark";

      root.classList.remove(isDark ? "light" : "dark");
      root.classList.add(theme);

      localStorage.setItem("color-theme", theme);
    }
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ToggleModeButtonBase
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <svg
          className="w-8 h-8 md:w-10 md:h-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg
          className="w-8 h-8 md:w-10 md:h-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </ToggleModeButtonBase>
  );
};
