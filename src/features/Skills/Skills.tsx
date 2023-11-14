import React from "react";
import classNames from "classnames";
import TitleSection from "src/components/atoms/TitleSection";
import { skills } from "./constants";
import Link from "next/link";

export const Skills = ({ rootClassName }: { rootClassName?: string }) => {
  return (
    <section className={rootClassName}>
      <TitleSection center>Skills</TitleSection>
      <div className="flex flex-wrap items-center justify-center py-5 text-sm">
        {skills.map((s) => (
          <Link
            href={s.href}
            key={s.title}
            title={`Learn more about ${s.title}`}
            target="_blank"
            className={classNames(
              "m-2 flex items-center rounded-md border border-gray-300 px-4 py-1 transition-colors duration-200",
              "hover:border-gray-400 hover:bg-gray-50 hover:shadow-sm dark:border-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800 dark:hover:shadow-md",
            )}
          >
            {s.icon}
            <span className="ml-4">{s.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Skills;
