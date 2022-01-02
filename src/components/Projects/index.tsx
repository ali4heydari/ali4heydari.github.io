import { motion } from "framer-motion";
import React from "react";
import Container from "src/components/ui/Container";
import TitleSection from "src/components/ui/TitleSection";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "src/definitions";
import styles from "./Projects.module.css";
import Link from "next/link";

import { Chip } from "../ui/Chip";

interface Project {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      description: string;
      startDate: string;
      endDate: string;
      tags: string[];
      cover: string;
    };
  };
}

const Projects: React.FC = () => {
  const { i18n } = useTranslation();

  // @ts-ignore
  const sectionTitle: SectionTitle = {};
  const posts: Project[] = [];

  return (
    <Container section maxWidth="lg">
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      <div className={styles.posts}>
        {posts.map((item) => {
          const {
            id,
            fields: { slug },
            frontmatter: {
              title,
              cover,
              description,
              startDate,
              endDate,
              tags,
            },
          } = item.node;

          return (
            <div className={styles.post} key={id}>
              <Link href={slug}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1 }}
                >
                  <div className={styles.card}>
                    <figure className={styles.image}>
                      <img src={cover} alt={title} />
                    </figure>
                    <div className={styles.content}>
                      <time className={styles.date}>
                        {new Date(startDate).toLocaleDateString(i18n.language, {
                          year: "numeric",
                          month: "short",
                        })}
                        {" - "}
                        {new Date(endDate).toLocaleDateString(i18n.language, {
                          year: "numeric",
                          month: "short",
                        })}
                      </time>
                      <h3 className={styles.title}>{title}</h3>
                      <p>{description}</p>
                    </div>
                    <div className={styles.tags}>
                      {tags.map((item) => (
                        <Chip key={item}>{item}</Chip>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Projects;
