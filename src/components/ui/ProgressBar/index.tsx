import React from "react";
import styles from "./ProgressBar.module.css";

interface Props {
  title: string;
  percentage: number;
}

const ProgressBar: React.FC<Props> = ({ title, percentage }) => (
  <div className={styles.progressBar}>
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <h3 className={styles.percentage}>{percentage}%</h3>
    </div>
    <div className={styles.barWrapper}>
      <div className={styles.bar} style={{ width: `${percentage}%` }} />
    </div>
  </div>
);

export default ProgressBar;
