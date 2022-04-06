import Container from "src/components/Container";

import React from "react";
import MainNav from "./MainNav";
import { socialMedias } from "src/constants/socialMedias";
import styles from "./Footer.module.css";
import Link from "next/link";
import classNames from "classnames";
import SpotifyNowPlaying from "./components/SpotifyNowPlaying";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg">
        <SpotifyNowPlaying />
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
                  <media.icon className={"m-1 h-6 w-6"} />
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
