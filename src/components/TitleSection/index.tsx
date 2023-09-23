import React, { PropsWithChildren } from "react";
import styles from "./TitleSection.module.css";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

interface Props {
  center?: boolean;
}

const TitleSection: React.FC<
  React.PropsWithChildren<PropsWithChildren<Props>>
> = ({ center, children }) => (
  <h2
    className={twMerge(
      "mb-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl",
      "text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-indigo-400",
      center && "text-center"
    )}
  >
    {children}
  </h2>
);

export default TitleSection;
