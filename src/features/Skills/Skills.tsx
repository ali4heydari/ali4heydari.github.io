import React from "react";
import { skills } from "./constants";
import TitleSection from "../../components/atoms/TitleSection";

export const Skills = ({ rootClassName }: { rootClassName?: string }) => {
  return (
    <section className={rootClassName}>
      <TitleSection center>Skills</TitleSection>
      <div className="flex flex-wrap items-center justify-center py-5 text-sm">
        {skills.map((s) => (
          <span
            key={s.title}
            className="m-2 flex items-center rounded-md border border-gray-300 px-4 py-1 dark:border-gray-700"
          >
            {s.icon}
            <span className="ml-4">{s.title}</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
