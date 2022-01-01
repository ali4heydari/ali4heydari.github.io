import React from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id?: string;
  description?: string;
  heading: string | React.ReactNode;
  subheading?: string;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  heading,
  subheading,
  description,
  children,
  id,
}: SectionProps) => {
  return (
    <div className={"relative"} id={id}>
      <div className={styles.sectionContainer}>
        {subheading ? (
          <h5 className={styles.sectionSubheading}>{subheading}</h5>
        ) : null}
        <h2 className={styles.sectionHeading}>{heading}</h2>
        {description ? (
          <p className={styles.sectionHeading}>{description}</p>
        ) : null}
        {children}
      </div>
      {/*<div*/}
      {/*  className={`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}*/}
      {/*/>*/}
    </div>
  );
};
