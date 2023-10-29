import type { PropsWithChildren } from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Footer from "src/components/organism/Footer";
import Header from "src/components/organism/Header";
import BottomNavigation from "../components/molecules/BottomNavigation/BottomNavigation";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

const MainLayout = ({
  children,
}: PropsWithChildren<{}>): JSX.Element | null => {
  return (
    <div className={classNames("min-h-screen", vazirmatn.className)}>
      <Header />
      <hr />
      <div className="dark:bg-gradient-to-b-dark relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14 dark:from-gray-800">
        <div
          className={twMerge(
            "dark:bg-gray-900 dark:shadow-gray-800/10 dark:ring-gray-800/10 sm:-mr-80 lg:-mr-96",
            "absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50",
          )}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-1 sm:py-2 lg:px-8">
          {children}
        </div>
        <div className="dark:bg-gradient-to-t-dark absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-gray-900 sm:h-32" />
      </div>
      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default MainLayout;
