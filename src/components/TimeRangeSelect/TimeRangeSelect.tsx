import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export type TimeRangeSelectProps = {
  setTimeRange: (timeRange: string) => void;
  timeRange: string;
};
const TimeRangeSelect = ({ setTimeRange, timeRange }) => {
  return (
    <div className="flex justify-center mb-4">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          onClick={() => setTimeRange("short_term")}
          className={twMerge(
            "px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg",
            "hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white",
            "dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700",
            timeRange === "short_term" &&
              "bg-gray-500 text-white dark:bg-gray-700",
          )}
        >
          Short Term
        </button>
        <button
          type="button"
          onClick={() => setTimeRange("medium_term")}
          className={twMerge(
            "px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900",
            "hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white",
            "dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700",
            timeRange === "medium_term" &&
              "bg-gray-500 text-white dark:bg-gray-700",
          )}
        >
          Medium Term
        </button>
        <button
          type="button"
          onClick={() => setTimeRange("long_term")}
          className={twMerge(
            "px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md",
            "hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500",
            "focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700",
            timeRange === "long_term" &&
              "bg-gray-500 text-white dark:bg-gray-700",
          )}
        >
          Long Term
        </button>
      </div>
    </div>
  );
};

export default TimeRangeSelect;
