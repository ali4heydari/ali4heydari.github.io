import Container from "src/components/ui/Container";
import TitleSection from "src/components/ui/TitleSection";
import React from "react";
import styles from "./ContactInfo.module.css";

import { socialMedias } from "src/socialMedias";
import SiteConfigs from "SiteConfigs";

const ContactInfo: React.FC = () => {
  return (
    <Container section maxWidth="lg">
      <TitleSection
        title={"Contacts"}
        subtitle={"For more info contact me"}
        center
      />
      <img className={styles.image} src={""} alt={SiteConfigs.SHORT_NAME} />
      <div className={styles.links}>
        {socialMedias.map((media) => {
          return (
            <a
              className={styles.link}
              key={media.link}
              href={media.link}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label={`link to authors'${media.name} account`}
            >
              <media.icon className={"w-16 h-16 m-1"} />
            </a>
          );
        })}
      </div>
    </Container>
  );
};

export default ContactInfo;
