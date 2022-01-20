import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

interface ButtonProps {
  primary?: boolean;
  block?: boolean;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ primary, block, children }) => (
  <button
    className={classNames(styles.btnBase, {
      [styles.primary]: primary,
      [styles.block]: block,
    })}
  >
    {children}
  </button>
);

export default Button;
