import { useTranslation } from "react-i18next";
import React from "react";
import styles from "./Event.module.css";
import { EventProps } from "../../@types";

const Event: React.FC<EventProps> = ({
  title,
  subtitle,
  startDate,
  endDate,
  children,
}) => {
  const { i18n } = useTranslation();

  const isValidDate = (date: string | number) =>
    Object.prototype.toString.call(date) === "[object Date]" &&
    !Number.isNaN(date);

  const getDate = (dateStr) => {
    return isValidDate(dateStr)
      ? new Date(dateStr).toLocaleDateString(i18n.language, {
          year: "numeric",
          month: "short",
        })
      : dateStr;
  };

  return (
    <div className={styles.timeline}>
      <span className={styles.point} />
      <div className={styles.details}>
        <time className={styles.date}>
          {getDate(startDate)}
          {" - "}
          {getDate(endDate)}
        </time>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subtitle}</div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Event;
