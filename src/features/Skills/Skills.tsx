import React from "react";
import { skills } from "./constants";
import TitleSection from "../../components/atoms/TitleSection";

export const Skills = ({ rootClassName }: { rootClassName?: string }) => {
  return (
    <section className={rootClassName}>
      <TitleSection center>Skills</TitleSection>
      <div className="flex flex-wrap items-center justify-center text-sm py-5">
        {skills.map((s) => (
          <span
            key={s.title}
            className="flex items-center border border-gray-300 dark:border-gray-700 rounded-md px-4 py-1 m-2"
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
