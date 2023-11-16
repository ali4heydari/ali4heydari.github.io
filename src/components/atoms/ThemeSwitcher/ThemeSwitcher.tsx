import MonitorIcon from "mdi-react/MonitorIcon";
import WeatherNightIcon from "mdi-react/WeatherNightIcon";
import WeatherSunnyIcon from "mdi-react/WeatherSunnyIcon";
import { useMemo } from "react";
import classNames from "classnames";
import { useTheme } from "next-themes";
import { twMerge } from "tailwind-merge";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const themes = useMemo(
    () => [
      {
        name: "Light",
        value: "light",
        icon: <WeatherSunnyIcon className="mx-auto h-4 w-4" />,
      },
      {
        name: "System",
        value: "system",
        icon: <MonitorIcon className="mx-auto h-4 w-4" />,
      },
      {
        name: "Dark",
        value: "dark",
        icon: <WeatherNightIcon className="mx-auto h-4 w-4" />,
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
          {it.icon}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
