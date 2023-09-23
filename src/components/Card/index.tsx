import React, { ComponentType } from "react";
import styles from "./Card.module.css";

interface CardProps {
  icon: any;
  title: string;
  description: React.ReactElement | string;
}

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
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

export default Card;
