import React from "react";
import styles from "./Quote.module.css";
import Link from "next/link";
import QuotesLeftIconBase from "mdi-react/FormatQuoteOpenIcon";
import classNames from "classnames";

type Props = {
  quote: string;
  className?: string;
};

const Quote = ({ quote, className }: Props) => (
  <div className={classNames(styles.wrapper, className)}>
    <span className={styles.topQuoteMark}>“</span>
    <blockquote className={styles.quote}>{quote}</blockquote>
    <span className={styles.bottomQuoteMark}>”</span>
  </div>
);

export default Quote;
