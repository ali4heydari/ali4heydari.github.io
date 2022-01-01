import MainNav from "./MainNav";
import Logo from "./Logo";

import React from "react";
import Container from "../ui/Container";
import styles from "./Header.module.css";
interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <header className={styles.header}>
    <Container className={styles.wrapper}>
      <Logo />
      <MainNav />
    </Container>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
