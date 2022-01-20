import Container from "src/components/Container";
import Button from "src/components/Button";
import TitleSection from "src/components/TitleSection";
import { SectionTitle } from "src/definitions";
import React from "react";
import styles from "./Newsletter.module.css";

interface Newsletter extends SectionTitle {
  namePlaceholder: string;
  emailPlaceholder: string;
  submitPlaceholder: string;
}

const Newsletter: React.FC = () => {
  // @ts-ignore
  const newsletter: Newsletter = {};

  return (
    <section className={styles.newsletter}>
      <Container section maxWidth="lg">
        <TitleSection
          title={newsletter.title}
          subtitle={newsletter.subtitle}
          center
        />
        <div className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder={newsletter.namePlaceholder}
          />
          <input
            className={styles.input}
            type="email"
            placeholder={newsletter.emailPlaceholder}
          />
          <Button primary block>
            {newsletter.submitPlaceholder}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
