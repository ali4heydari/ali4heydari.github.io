import Link from "next/link";
import React from "react";
import Container from "src/components/Container";
import TitleSection from "src/components/TitleSection";
import { useTranslation } from "react-i18next";
import styles from "./BlogPost.module.css";

import Chip from "src/components/Chip";

const BlogPosts: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <Container section maxWidth="lg">
      <TitleSection
        title={"Blog"}
        subtitle={"Read our latest blog posts"}
        center
      />
      <div className={styles.posts}>
        {[].map((item) => {
          const {
            id,
            fields: { slug },
            frontmatter: { title, cover, description, date, tags },
            // @ts-ignore
          } = item.node;

          return (
            <div className={styles.post} key={id}>
              <Link href={slug} legacyBehavior>
                <div>
                  <div className={styles.card}>
                    <figure className={styles.image}>
                      <img src={cover} alt={title} />
                    </figure>
                    <div className={styles.content}>
                      <time className={styles.date}>
                        {new Date(date).toLocaleDateString(i18n.language, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                      <h3 className={styles.title}>{title}</h3>
                      <p className={styles.description}>{description}</p>
                    </div>
                    <div className={styles.tags}>
                      {tags.map((item) => (
                        <Chip key={item}>{item}</Chip>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default BlogPosts;
