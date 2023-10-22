"use client";
import { RWebShare } from "react-web-share";
import React, { ComponentProps } from "react";
import { ShareIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";

const WebShare = (
  props: Omit<ComponentProps<typeof RWebShare>, "children">,
) => {
  return (
    <RWebShare {...props}>
      <ShareIcon
        className={classNames(
          "h-full w-full p-2 text-gray-500 dark:text-gray-400",
          "hover:text-gray-900 dark:hover:text-gray-100",
          "transition-colors duration-200 ease-in-out",
          "cursor-pointer",
          "rounded-full border border-gray-500 dark:border-gray-400",
        )}
      />
    </RWebShare>
  );
};

export default WebShare;
