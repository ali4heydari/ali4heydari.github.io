import React from "react";
import styles from "./Chip.module.css";
import classNames from "classnames";

interface ChipProps {
  children?: React.ReactNode;
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
  type = "default",
}: ChipProps) => {
  return (
    <div className={classNames(styles.root, styles[type])}>{children}</div>
  );
};

export default Chip;
