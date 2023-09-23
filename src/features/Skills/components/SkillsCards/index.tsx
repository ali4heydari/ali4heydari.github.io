import React from "react";

import { skillCards } from "../../constants";

export const SkillsCards: React.FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <div>
      <div className={"flex flex-wrap items-stretch justify-center gap-1"}>
        {skillCards.map(({ icon, title, description }, i) => (
          <div
            key={i}
            className="flex w-full max-w-sm flex-col items-center rounded-lg border bg-white p-1 shadow-md dark:border-gray-700 dark:bg-gray-800 md:w-1/2  md:max-w-xl md:flex-row lg:w-1/3"
          >
            <div>{icon}</div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
