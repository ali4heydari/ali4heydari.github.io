import React from "react";
import { mainNavItems } from "src/constants";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { useRouter } from "next/router";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const onChangeTheme = (event) => {
    setTheme(event.target?.value || "light");
  };

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
                      <Link href={item.slug} key={item.title}>
                        <a
                          key={item.title}
                          className={classNames(
                            router.pathname === item.slug
                              ? "bg-blue-800 text-white dark:bg-blue-500"
                              : "bg-blue-200 text-blue-900 hover:text-white dark:bg-blue-200",
                            "rounded-md px-3 py-2 text-sm font-medium hover:shadow-2xl"
                          )}
                          aria-current={
                            router.pathname === item.slug ? "page" : undefined
                          }
                        >
                          {item.title}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <select
                  name="theme"
                  value={theme}
                  onChange={onChangeTheme}
                  className={classNames(
                    "mt-1 block rounded-md border-gray-300 py-1 px-3 text-base text-sm",
                    "text-blue-700 focus:border-blue-300 focus:outline-none focus:ring-blue-300",
                    "dark:bg-gray-700 dark:text-blue-100 dark:focus:border-blue-700 dark:focus:outline-none dark:focus:ring-blue-700"
                  )}
                >
                  <option value="system">System</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
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
                    router.pathname === item.slug
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={
                    router.pathname === item.slug ? "page" : undefined
                  }
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
