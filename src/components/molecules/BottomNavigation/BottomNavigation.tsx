"use client";

import classNames from "classnames";
import { navigation } from "../../../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNavigation = () => {
  const pathname = usePathname();
  return (
    <div className="sticky bottom-0 left-0 z-50 h-16 w-full border-t border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:shadow-indigo-400 lg:hidden">
      <div className="mx-auto grid h-full max-w-lg grid-cols-4 font-medium">
        {navigation.primary.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            prefetch
            className={classNames(
              "group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-700",
              pathname === item.href && "bg-gray-50 dark:bg-gray-700",
            )}
          >
            <item.svgIcon
              className={classNames(
                "mb-2 h-5 w-5 text-gray-500 dark:text-gray-400",
                pathname === item.href &&
                  "text-indigo-600 dark:text-indigo-500",
              )}
            />
            <span
              className={classNames(
                "text-sm text-gray-500 dark:text-gray-400",
                pathname === item.href &&
                  "text-indigo-600 dark:text-indigo-500",
              )}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
