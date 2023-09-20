import React from "react";
import { mainNavItems } from "src/constants";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import ThemeToggle from "../atoms/ThemeToggle/ThemeToggle";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const pathname = usePathname();

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 left-0 right-0 z-50 w-full bg-gray-100 dark:bg-gray-800 dark:shadow-blue-400"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {mainNavItems.map((item) => (
                      <Link
                        href={item.slug}
                        key={item.title}
                        className={classNames(
                          pathname === item.slug
                            ? "border border-blue-800 bg-blue-600 text-white dark:border-blue-100 dark:bg-gray-700"
                            : "bg-blue-200 text-gray-900 hover:text-white dark:bg-blue-100",
                          "rounded-md px-3 py-2 text-sm font-medium hover:shadow-2xl"
                        )}
                        aria-current={
                          pathname === item.slug ? "page" : undefined
                        }
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ThemeToggle />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {mainNavItems.map((item) => (
                <Disclosure.Button
                  key={item.title}
                  as="a"
                  href={item.slug}
                  className={classNames(
                    pathname === item.slug
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={pathname === item.slug ? "page" : undefined}
                >
                  {item.title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
