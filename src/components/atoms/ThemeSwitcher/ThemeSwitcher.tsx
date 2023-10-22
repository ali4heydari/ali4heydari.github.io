import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";
import classNames from "classnames";
import { useMemo } from "react";
import {
  MoonIcon as MoonIconOutline,
  SunIcon as SunIconOutline,
  ComputerDesktopIcon as ComputerDesktopIconOutline,
} from "@heroicons/react/24/outline";
import {
  MoonIcon as MoonIconSolid,
  SunIcon as SunIconSolid,
  ComputerDesktopIcon as ComputerDesktopIconSolid,
} from "@heroicons/react/24/solid";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const themes = useMemo(
    () => [
      {
        name: "Light",
        value: "light",
        svgIconOutline: (
          <SunIconOutline width={16} height={16} className="mx-auto" />
        ),
        svgIconSolid: (
          <SunIconSolid width={16} height={16} className="mx-auto" />
        ),
      },
      {
        name: "System",
        value: "system",
        svgIconOutline: (
          <ComputerDesktopIconOutline
            width={16}
            height={16}
            className="mx-auto"
          />
        ),
        svgIconSolid: (
          <ComputerDesktopIconSolid
            width={16}
            height={16}
            className="mx-auto"
          />
        ),
      },
      {
        name: "Dark",
        value: "dark",
        svgIconOutline: (
          <MoonIconOutline width={16} height={16} className="mx-auto" />
        ),
        svgIconSolid: (
          <MoonIconSolid width={16} height={16} className="mx-auto" />
        ),
      },
    ],
    [],
  );

  return (
    <div
      className="relative flex max-w-fit items-center justify-center space-x-2 rounded-2xl border border-gray-300 bg-none text-center shadow-none dark:border-gray-700"
      role="radiogroup"
    >
      {themes.map((it) => (
        <button
          key={it.value}
          aria-checked="false"
          aria-label={it.name}
          onClick={() => setTheme(it.value || "light")}
          className={twMerge(
            classNames(
              "h-8 w-8 cursor-pointer rounded-full p-1 text-gray-900 transition duration-300 ease-in-out dark:text-gray-100",
              "focus:bg-gray-300 focus:outline-none hocus:bg-gray-300 dark:focus:bg-gray-600 dark:hocus:bg-gray-600",
              theme === it.value && "bg-gray-200 dark:bg-gray-700",
            ),
          )}
          role="radio"
          type="button"
        >
          {theme === it.value ? it.svgIconSolid : it.svgIconOutline}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
