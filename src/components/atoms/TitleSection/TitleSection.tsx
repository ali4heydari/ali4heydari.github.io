import type { PropsWithChildren } from "react";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  center?: boolean;
}

const TitleSection = ({ center, children }: PropsWithChildren<Props>) => (
  <h2
    className={twMerge(
      "mb-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl",
      "bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent",
      center && "text-center",
    )}
  >
    {children}
  </h2>
);

export default TitleSection;
