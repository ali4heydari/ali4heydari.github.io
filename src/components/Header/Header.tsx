"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import Bitmoji from "../atoms/Logo";
import StyledLink from "../atoms/Link";
import { navigation } from "../../constants";
import ThemeSwitcher from "../atoms/ThemeSwitcher";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 right-0 left-0 z-50 bg-gray-100 dark:bg-gray-800 dark:shadow-blue-400">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Bitmoji className="h-8 w-8 lg:h-10 lg:w-10" />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-6 w-6  text-gray-500 dark:text-gray-400"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-5">
          {navigation.primary.map((item) => (
            <StyledLink
              key={item.name}
              href={item.href}
              className="rounded-lg px-3 py-1 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 dark:hover:bg-gray-700"
            >
              {item.name}
            </StyledLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeSwitcher />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 dark:bg-gray-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-between">
                <Bitmoji />
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon
                    className="h-6 w-6 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div>
                  <div className="space-y-2 py-6">
                    <div className="space-y-2 border-b border-gray-500/10 pb-2">
                      {navigation.secondary.map((item) => (
                        <StyledLink
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 border border-gray-300"
                        >
                          <item.svgIcon className="w-6 h-6 mr-2 inline-block" />
                          {item.name}
                        </StyledLink>
                      ))}
                    </div>
                    <div className="space-y-2 border-b border-gray-500/10 py-4">
                      {navigation.tertiary.map((item) => (
                        <StyledLink
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 border border-gray-300"
                        >
                          <item.svgIcon className="w-6 h-6 mr-2 inline-block" />
                          {item.name}
                        </StyledLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-6">
              <ThemeSwitcher />
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
