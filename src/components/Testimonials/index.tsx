import Loadable from "@loadable/component";

import Container from "src/components/ui/Container";
import TitleSection from "src/components/ui/TitleSection";
import React from "react";
import { SectionTitle } from "src/definitions";
import styles from "./Testimonials.module.css";

const Carousel = Loadable(() => import("src/components/ui/Carousel"));

interface Testimonial {
  node: {
    id: string;
    body: string;
    frontmatter: {
      title: string;
      cover: string;
    };
  };
}

const Testimonials: React.FC = () => {
  // @ts-ignore
  const sectionTitle: SectionTitle = {};
  const testimonials: Testimonial[] = [];

  return (
    <Container section maxWidth="lg">
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      <div className={styles.testimonials}>
        <Carousel>
          {testimonials.map((item) => {
            const {
              id,
              body,
              frontmatter: { cover, title },
            } = item.node;

            return (
              <div className={styles.testimonial} key={id}>
                <figure className={styles.image}>
                  <img src={cover} alt={title} />
                </figure>
                <h3 className={styles.title}>{title}</h3>
                {/*<MDXRenderer>{body}</MDXRenderer>*/}
              </div>
            );
          })}
        </Carousel>
      </div>
    </Container>
  );
};

export default Testimonials;
