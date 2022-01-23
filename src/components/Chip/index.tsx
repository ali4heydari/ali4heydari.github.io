import React from "react";
import styles from "./Chip.module.css";
import classNames from "classnames";

interface ChipProps {
  children?: React.ReactNode;
  rounded?: boolean;
  className?: string;
  type?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info";
}

const Chip: React.FC<ChipProps> = ({
  children,
  rounded = true,
  className,
  type = "default",
}: ChipProps) => {
  return (
    <div
      className={classNames(
        styles.root,
        styles[type],
        {
          "rounded-full": rounded,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Chip;
