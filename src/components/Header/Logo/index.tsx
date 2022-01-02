import React from "react";
import styles from "./Logo.module.css";
import Link from "next/link";
import SiteConfigs from "../../../../SiteConfigs";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <a className={styles.link}>
        <figure className={styles.image}>
          <img src={""} alt={SiteConfigs.SITE_TITLE} />
        </figure>
        <h1 className={styles.text}>{SiteConfigs.SITE_TITLE}</h1>
      </a>
    </Link>
  );
};

export default Logo;
