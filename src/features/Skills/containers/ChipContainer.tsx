export const ChipContainer = ({
  projects,
  title = "Related open source projects:",
}: {
  projects: {
    emoji?: string;
    href: string;
    name: string;
  }[];
  title?: string;
}) => {
  return (
    <div>
      <div className={"dark:text-gray-50"}>{title}</div>
      <div className={"flex flex-wrap justify-center"}>
        {projects.map(({ emoji, href, name }) => (
          <a key={name} href={href}>
            <span
              key={name}
              className="text-sm font-medium text-gray-900 dark:text-gray-50"
            >
              <span role="img" aria-label={`${name}'s emoji`}>
                {emoji}{" "}
              </span>
              {name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
