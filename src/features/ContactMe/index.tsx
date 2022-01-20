import React from "react";
import EmailIllustrationSrc from "src/assets/svg/email-illustration.svg";
import Container from "src/components/Container";
import SiteConfigs from "SiteConfigs";
import styles from "./ContactMeForm.module.css";
import classNames from "classnames";

export const ContactMe = ({ submitButtonText = "Send", textOnLeft = true }) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <div className={styles.twoColumn}>
        <div className={styles.imageColumn}>
          <EmailIllustrationSrc className={styles.emailIllustration} />
        </div>
        <div
          className={classNames(
            styles.column,
            styles.textColumn,
            textOnLeft ? styles.textOnLeft : styles.textOnRight
          )}
        >
          <div className={styles.textContent}>
            <h5 className={styles.subheading}>{"Contact me"}</h5>
            <h2 className={styles.heading}>
              Feel free to{" "}
              <span className={"dark:text-gray-50"}>get in touch</span>
              <wbr />
              with me.
            </h2>
            <p className={styles.description}>{"I'll try to respond ASAP!"}</p>
            <form
              className={styles.form}
              action={`https://getform.io/f/${SiteConfigs.CONTACT_GET_FORM_ID}`}
              method="POST"
            >
              <input
                className={styles.input}
                required
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                className={styles.input}
                required
                type="email"
                name="email"
                placeholder="eMail"
              />
              <textarea
                className={styles.textarea}
                required
                name="message"
                placeholder="Your Message Here"
              />
              <button className={styles.submitButton} type="submit">
                {submitButtonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};
