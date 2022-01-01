import { useTranslation } from "react-i18next";
import React from "react";
import styles from "./Timeline.module.css";

interface Props {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  startDate: string;
  endDate: string;
}

const Timeline: React.FC<Props> = ({
  title,
  subtitle,
  content,
  startDate,
  endDate,
}) => {
  const { i18n } = useTranslation();

  return (
    <div className={styles.timeline}>
      <span className={styles.point} />
      <div className={styles.details}>
        <time className={styles.date}>
          {new Date(startDate).toLocaleDateString(i18n.language, {
            year: "numeric",
            month: "short",
          })}
          {" - "}
          {/* Dates after 2100 are assumed to be present */}
          {new Date(endDate).getFullYear() >= 2100
            ? "Present"
            : new Date(endDate).toLocaleDateString(i18n.language, {
                year: "numeric",
                month: "short",
              })}
        </time>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subtitle}</div>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default Timeline;
