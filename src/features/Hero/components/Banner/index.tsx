import Container from "src/components/Container";

import Typist from "react-typist";
import React from "react";
import { socialMedias } from "src/constants/socialMedias";
import styles from "./Banner.module.css";
import classNames from "classnames";
import SvgDecoratorBlob1 from "mdi-react/DragIcon";
import QuotesLeftIconBase from "mdi-react/FormatQuoteOpenIcon";

interface Props {
  heading: string;
  subheading?: string;
  description: React.ReactNode;
  linkTo: string;
  linkText: string;
  imageDecoratorBlob?: boolean;
  quote?: string;
  image: string;
}

const Banner: React.FC<Props> = ({
  heading,
  subheading,
  description,
  linkTo,
  linkText,
  imageDecoratorBlob,
  quote,
  image,
}) => {
  return (
    <section className={styles.banner}>
      <Container section>
        <div className={styles.row}>
          <div className={styles.textColumn}>
            <Typist startDelay={500} cursor={{ show: false }}>
              <h2 className={styles.sectionHeading}>{heading}</h2>
              <h2 className={classNames(styles.sectionHeading, styles.heading)}>
                {subheading}
              </h2>
            </Typist>
            <p
              className={classNames(
                styles.sectionDescription,
                styles.description
              )}
            >
              {description}
            </p>
            <a
              className={classNames(styles.button, "rounded-full")}
              href={linkTo}
            >
              {linkText}
            </a>
            <div className={styles.links}>
              {socialMedias.map((media) => {
                return (
                  <a
                    className={styles.link}
                    key={media.link}
                    href={media.link}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label={`link to author's ${media.name} account`}
                  >
                    <media.icon className={"w-8 h-8 m-1"} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              {image ? (
                <img className={styles.image} src={image} alt={"banner"} />
              ) : null}
              {imageDecoratorBlob && (
                <SvgDecoratorBlob1 className={styles.imageDecoratorBlob} />
              )}
              {quote ? (
                <div className={styles.testimonial}>
                  <>
                    <QuotesLeftIconBase className={styles.quotesLeftIcon} />
                    <blockquote className={styles.quote}>{quote}</blockquote>
                  </>
                </div>
              ) : null}
            </div>
            <div className={styles.offsetBackground} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
