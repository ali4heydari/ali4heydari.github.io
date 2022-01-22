import Container from "src/components/Container";

import React from "react";
import MainNav from "./MainNav";
import { socialMedias } from "src/constants/socialMedias";
import { NowPlaying } from "../Spotify";
import styles from "./Footer.module.css";
import Link from "next/link";
import classNames from "classnames";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg">
        <div className={styles.nowPlaying}>{/*<NowPlaying />*/}</div>
        <div className={styles.links}>
          {socialMedias.map((media) => {
            return (
              <Link
                key={media.link}
                href={media.link}
                aria-label={`link to authors'${media.name} account`}
              >
                <a
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className={styles.link}
                >
                  <media.icon className={"w-6 h-6 m-1"} />
                </a>
              </Link>
            );
          })}
        </div>
        <h2 className={classNames(styles.separator, "mx-auto")} />
        <MainNav />
      </Container>
    </footer>
  );
};

export default Footer;
