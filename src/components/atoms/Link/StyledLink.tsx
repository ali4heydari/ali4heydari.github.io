"use client";

import type { ComponentProps } from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const isLocalLink = (href?: string) =>
  href && (href.startsWith("/") || href.startsWith("#"));

export type LinkProps = ComponentProps<typeof NextLink> & {
  openInNewTab?: boolean;
};

const StyledLink = ({
  className,
  href,
  title,
  openInNewTab = !isLocalLink(
    typeof href !== "string" ? href.toString() : href,
  ),
  ...props
}: LinkProps) => {
  const pathname = usePathname();
  return (
    <NextLink
      aria-label={title}
      href={href}
      {...(openInNewTab
        ? {
            target: "_blank",
            rel: `${props.rel || ""} noopener noreferrer`.trim(),
          }
        : {})}
      className={twMerge(
        classNames(
          "rounded-lg px-3 py-1 text-sm font-semibold leading-6 hover:bg-gray-200 hover:underline dark:hover:bg-gray-700",
          pathname === href
            ? "bg-gray-300 text-indigo-600 dark:bg-gray-700 dark:text-indigo-400"
            : "text-gray-900  dark:text-gray-100",
          className,
        ),
      )}
      {...props}
    />
  );
};

export default StyledLink;
