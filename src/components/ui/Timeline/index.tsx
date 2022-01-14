import { useTranslation } from "react-i18next";
import React from "react";
import styles from "./Timeline.module.css";
import { useMDXComponent } from "next-contentlayer/hooks";

interface Props {
  title: string;
  subtitle: string;
  code: string;
  startDate: string;
  endDate: string;
}

const Timeline: React.FC<Props> = ({
  title,
  subtitle,
  code,
  startDate,
  endDate,
}) => {
  const { i18n } = useTranslation();
  const Component = useMDXComponent(code);

  const isValidDate = (date: string | number) =>
    Object.prototype.toString.call(date) === "[object Date]" &&
    !Number.isNaN(date);

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
          {isValidDate(endDate)
            ? new Date(endDate).toLocaleDateString(i18n.language, {
                year: "numeric",
                month: "short",
              })
            : endDate}
        </time>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subtitle}</div>
      </div>
      <div className={styles.content}>
        <Component />
      </div>
    </div>
  );
};

export default Timeline;
