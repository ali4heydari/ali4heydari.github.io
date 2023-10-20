"use client";
import Link from "next/link";
import { navigation } from "../../../constants";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const BottomNavigation = () => {
  const pathname = usePathname();
  return (
    <div className="sticky bottom-0 left-0 z-50 w-full h-16 border-t border-gray-200 bg-gray-100 dark:bg-gray-800 dark:shadow-blue-400 dark:border-gray-600 lg:hidden">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {navigation.primary.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            prefetch
            className={classNames(
              "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-700 group",
              pathname === item.href && "bg-gray-50 dark:bg-gray-700",
            )}
          >
            <item.svgIcon
              className={classNames(
                "w-5 h-5 mb-2 text-gray-500 dark:text-gray-400",
                pathname === item.href && "text-blue-600 dark:text-blue-500",
              )}
            />
            <span
              className={classNames(
                "text-sm text-gray-500 dark:text-gray-400",
                pathname === item.href && "text-blue-600 dark:text-blue-500",
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
