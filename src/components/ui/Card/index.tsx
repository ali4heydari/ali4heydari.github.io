import React, { ComponentType } from "react";
import styles from "./Card.module.css";

interface CardProps {
  icon: React.ReactElement | ComponentType<any>;
  title: string;
  description: React.ReactElement | string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
}: CardProps) => {
  return (
    <div className={styles.root}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.content}>
        <span className={styles.title}>{title}</span>
        <p className={styles.description}>{description}</p>
      </span>
    </div>
  );
};
