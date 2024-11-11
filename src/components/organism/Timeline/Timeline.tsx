import React from "react";
import classNames from "classnames";
import { isValidDate } from "src/utils";
import type { TimelineProps } from "./@types";

const Timeline = ({
  events,
  pingLastEvent = true,
  wrapperClassName,
}: TimelineProps) => {
  const getDate = (dateStr) => {
    return isValidDate(dateStr)
      ? new Date(dateStr).toLocaleDateString("en-GB", {
          month: "short",
          year: "numeric",
        })
      : dateStr;
  };

  return (
    <ol
      className={classNames(
        "relative border-l border-gray-200 dark:border-gray-700",
        wrapperClassName,
      )}
    >
      {events.map((event, index) => {
        const {
          bottomTags,
          children,
          endDate,
          startDate,
          subtitle,
          title,
          topTags,
        } = event;
        return (
          <li key={index} className="mb-10 ml-4 text-gray-900 dark:text-white">
            <div
              className={
                "mt-0.6 absolute -left-2 size-4 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
              }
            />
            {pingLastEvent && index === 0 && (
              <span className="mt-0.6 absolute -left-2 size-4 animate-ping rounded-full bg-indigo-500 dark:bg-indigo-400" />
            )}
            <h3 className="mx-2 text-2xl font-semibold">{title}</h3>
            {subtitle && <h4 className="mx-2 text-lg">{subtitle}</h4>}
            <div>
              <time className="mx-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                {getDate(startDate)}
                {" - "}
                {getDate(endDate)}
              </time>
            </div>
            {topTags && (
              <div className="mx-2 inline-flex flex-wrap gap-2">
                {topTags.map((tag) => (
                  <span
                    key={tag}
                    className="border-0.5 py-0.7 rounded-lg border border-gray-900 px-1.5 text-xs dark:border-gray-400 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div
              className={classNames(
                "m-4 text-base font-normal text-gray-500 dark:text-gray-400",
                "prose dark:prose-invert prose-headings:underline prose-a:text-indigo-600 prose-a:underline prose-img:rounded-xl dark:text-white prose-a:dark:text-indigo-400",
              )}
            >
              {children}
            </div>
            {bottomTags && (
              <div className="mx-2 inline-flex flex-wrap gap-2">
                {bottomTags.map((tag) => (
                  <span
                    key={tag}
                    className="py-0.7 rounded-lg border border-gray-900 bg-indigo-50 px-1.5 text-xs dark:border-gray-400 dark:bg-indigo-500 dark:text-gray-50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
};
export default Timeline;
