import { TimelineProps } from "./@types";

import classNames from "classnames";
import React from "react";
import { isValidDate } from "../../../utils";

const Timeline = ({ events, wrapperClassName }: TimelineProps) => {
  const getDate = (dateStr) => {
    return isValidDate(dateStr)
      ? new Date(dateStr).toLocaleDateString("en-GB", {
          year: "numeric",
          month: "short",
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
          title,
          subtitle,
          topTags,
          startDate,
          endDate,
          children,
          bottomTags,
        } = event;
        return (
          <li key={index} className="mb-10 ml-4 text-gray-900 dark:text-white">
            <div
              className={
                "absolute -left-2 mt-0.6 h-4 w-4 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
              }
            />
            {index === 0 && (
              <span className="animate-ping bg-indigo-500 dark:bg-indigo-400 absolute -left-2 mt-0.6 h-4 w-4 rounded-full" />
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
              <div className="inline-flex flex-wrap gap-2 mx-2">
                {topTags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-0.5 border-gray-900 dark:border-gray-400 px-1.5 py-0.7 text-xs dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div
              className={classNames(
                "m-4 text-base font-normal text-gray-500 dark:text-gray-400",
                "prose prose-headings:underline prose-a:text-indigo-600 prose-a:underline prose-img:rounded-xl dark:text-white",
              )}
            >
              {children}
            </div>
            {bottomTags && (
              <div className="inline-flex flex-wrap gap-2 mx-2">
                {bottomTags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-gray-900 dark:border-gray-400 px-1.5 py-0.7 text-xs bg-indigo-50 dark:bg-indigo-700 dark:text-gray-200"
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
