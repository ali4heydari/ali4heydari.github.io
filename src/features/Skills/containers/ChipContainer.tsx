import Chip from "src/components/Chip";
import React from "react";

export const ChipContainer = ({
  projects,
  title = "Related open source projects:",
}: {
  projects: {
    name: string;
    href: string;
    emoji?: string;
  }[];
  title?: string;
}) => {
  return (
    <div>
      <div className={"dark:text-gray-50"}>{title}</div>
      <div className={"flex flex-wrap justify-center"}>
        {projects.map(({ name, href, emoji }) => (
          <a key={name} href={href}>
            <Chip key={name}>
              <span role="img" aria-label={`${name}'s emoji`}>
                {emoji}{" "}
              </span>
              {name}
            </Chip>
          </a>
        ))}
      </div>
    </div>
  );
};
