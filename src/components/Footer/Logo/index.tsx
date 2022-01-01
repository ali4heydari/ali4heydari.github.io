import React from "react";
import Link from "next/link";
import styles from "./Logo.module.css";

const Logo: React.FC = () => {
  return (
    <Link href={"/"}>
      <a>
        {/*<img className={styles.image} src={logoImage} alt={logoTitle} />*/}
        {/*<h1 className={styles.text}>{logoTitle}</h1>*/}
      </a>
    </Link>
  );
};

export default Logo;
