import React, { useMemo } from "react";
import classNames from "classnames";
import styles from "./Container.module.css";

interface ContainerProps {
  section?: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

const Container: React.FC<ContainerProps> = ({
  section,
  children,
  maxWidth = "md",
}) => {
  const screenWidths = useMemo(
    () => ({
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
    }),
    []
  );

  return (
    <div
      className={classNames(styles.container, screenWidths[maxWidth], {
        "py-8 sm:py-16": section,
      })}
    >
      {children}
    </div>
  );
};
export default Container;
