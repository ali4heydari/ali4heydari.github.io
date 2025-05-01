import { twMerge } from "tailwind-merge";

export interface TimeRangeSelectProps {
  setTimeRange: (timeRange: string) => void;
  timeRange: string;
}

const TimeRangeSelect = ({ setTimeRange, timeRange }: TimeRangeSelectProps) => {
  return (
    <div className="mb-4 flex justify-center">
      <div className="inline-flex rounded-md shadow-xs" role="group">
        <button
          type="button"
          onClick={() => {
            setTimeRange("short_term");
          }}
          className={twMerge(
            "rounded-l-lg border border-gray-900 bg-transparent px-4 py-2 text-sm font-medium text-gray-900",
            "hover:bg-gray-900 hover:text-white focus:z-10 focus:bg-gray-900 focus:text-white focus:ring-2 focus:ring-gray-500",
            "dark:border-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700",
            timeRange === "short_term" &&
              "bg-gray-500 text-white dark:bg-gray-700",
          )}
        >
          Short Term
        </button>
        <button
          type="button"
          onClick={() => {
            setTimeRange("medium_term");
          }}
          className={twMerge(
            "border-t border-b border-gray-900 bg-transparent px-4 py-2 text-sm font-medium text-gray-900",
            "hover:bg-gray-900 hover:text-white focus:z-10 focus:bg-gray-900 focus:text-white focus:ring-2 focus:ring-gray-500",
            "dark:border-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700",
            timeRange === "medium_term" &&
              "bg-gray-500 text-white dark:bg-gray-700",
          )}
        >
          Medium Term
        </button>
        <button
          type="button"
          onClick={() => {
            setTimeRange("long_term");
          }}
          className={twMerge(
            "rounded-r-md border border-gray-900 bg-transparent px-4 py-2 text-sm font-medium text-gray-900",
            "hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500",
            "focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700",
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
