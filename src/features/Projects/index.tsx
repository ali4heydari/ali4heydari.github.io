import React from "react";
import Container from "src/components/Container";
import TitleSection from "src/components/TitleSection";
import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";
import Link from "next/link";
import { allProjects } from ".contentlayer/data";
import type { Project } from ".contentlayer/types";

import { Chip } from "src/components/Chip";

const Projects: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <Container section maxWidth="lg">
      <TitleSection
        title={"Projects"}
        subtitle={"Some of my Projects"}
        center
      />
      <div className={styles.posts}>
        {allProjects.map((item: Project) => {
          const {
            title,
            cover,
            description,
            startDate,
            endDate,
            tags = [],
            _id,
            slug,
          } = item;

          return (
            <div className={styles.post} key={_id}>
              <Link href={`/projects/${slug}`}>
                <div className={styles.postWrapper}>
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
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Projects;
