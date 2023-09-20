import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";
import type { ChangeEventHandler } from "react";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const onChangeTheme: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setTheme(event.target?.value || "light");
  };

  return (
    <select
      value={theme}
      onChange={onChangeTheme}
      className={twMerge(
        "block rounded-md border-gray-300 px-3 py-1 text-base text-sm",
        "text-blue-700 focus:border-blue-300 focus:outline-none focus:ring-blue-300",
        "dark:bg-gray-700 dark:text-blue-100 dark:focus:border-blue-700 dark:focus:outline-none dark:focus:ring-blue-700"
      )}
    >
      <option value={systemTheme}>System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
};

export default ThemeToggle;
