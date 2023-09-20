import Container from "src/components/Container";

import React from "react";
import MainNav from "./MainNav";
import { socialMedias } from "src/constants/socialMedias";
import styles from "./Footer.module.css";
import Link from "next/link";
import classNames from "classnames";
import SpotifyNowListening from "./components/SpotifyNowListening";
import SteamNowPlaying from "./components/SteamNowPlaying";
import useMasterQuery from "../../hooks/useMasterQuery";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  const { data } = useMasterQuery(["/api/now-playing"], () =>
    fetch("/api/now-playing", {}).then((res) => res.json())
  );
  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg">
        <SpotifyNowListening {...data?.spotify} />
        <SteamNowPlaying {...data?.steam} />
        <div className={styles.links}>
          {socialMedias.map((media) => {
            return (
              <Link
                key={media.link}
                href={media.link}
                aria-label={`link to authors'${media.name} account`}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={styles.link}
              >
                <media.icon className={"m-1 h-6 w-6"} />
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
