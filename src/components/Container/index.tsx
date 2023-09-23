import React, { useMemo } from "react";
import classNames from "classnames";
import styles from "./Container.module.css";

type ContainerProps = {
  section?: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl";
} & React.HTMLAttributes<HTMLDivElement>;

const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  section,
  children,
  maxWidth,
  className,
  ...rest
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
      className={classNames(
        className,
        styles.container,
        maxWidth ? screenWidths[maxWidth] : null,
        {
          "py-8 sm:py-16": section,
        }
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
export default Container;
