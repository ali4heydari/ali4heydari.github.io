import React from "react";
import styles from "./Chip.module.css";

interface ChipProps {
  href?: string;
  children?: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({ children, href }: ChipProps) => {
  return (
    <div className={styles.root}>
      <a className={styles.content} href={href}>
        {children}
      </a>
    </div>
  );
};
