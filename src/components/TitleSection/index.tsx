import React from "react";
import styles from "./TitleSection.module.css";
import classNames from "classnames";

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const TitleSection: React.FC<Props> = ({ center, title, subtitle }) => (
  <div className={styles.titleSection}>
    {subtitle && (
      <h4 className={classNames(styles.title, { "text-center": center })}>
        {title}
      </h4>
    )}
    <h2 className={classNames(styles.subTitle, { "text-center": center })}>
      {subtitle}
    </h2>
    <h2 className={classNames(styles.separator, { "mx-auto": center })} />
  </div>
);

export default TitleSection;
