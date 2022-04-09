import { TimelineProps } from "./@types";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import React from "react";

const Timeline = ({ events, wrapperClassName }: TimelineProps) => {
  const { i18n } = useTranslation();

  const isValidDate = (date: string | number) =>
    Object.prototype.toString.call(date) === "[object Date]" &&
    !Number.isNaN(date);

  const getDate = (dateStr) => {
    return isValidDate(dateStr)
      ? new Date(dateStr).toLocaleDateString(i18n.language, {
          year: "numeric",
          month: "short",
        })
      : dateStr;
  };

  return (
    <ol
      className={classNames(
        "relative border-l border-gray-200 dark:border-gray-700",
        wrapperClassName
      )}
    >
      {events.map(({ title, startDate, endDate, children }) => (
        <li key={title} className="mb-10 ml-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
          <time className="mb-1 rounded-xl border border-gray-200 px-2 py-0.5 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {getDate(startDate)}
            {" - "}
            {getDate(endDate)}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <div
            className={classNames(
              "mb-4 text-base font-normal text-gray-500 dark:text-gray-400",
              "prose prose-headings:underline prose-a:text-blue-600 prose-a:underline prose-img:rounded-xl dark:text-white"
            )}
          >
            {children}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
