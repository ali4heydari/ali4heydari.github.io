import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";
import { motion } from "framer-motion";

interface ButtonProps {
  primary?: boolean;
  block?: boolean;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ primary, block, children }) => (
  <motion.button
    className={classNames(styles.btnBase, {
      [styles.primary]: primary,
      [styles.block]: block,
    })}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
);

export default Button;
