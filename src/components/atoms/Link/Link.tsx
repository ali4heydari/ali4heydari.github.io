"use client";
import type { ComponentProps } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const Link = ({ className, ...props }: ComponentProps<typeof NextLink>) => {
  const pathname = usePathname();
  return (
    <NextLink
      className={twMerge(
        "rounded-lg px-3 py-1 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700",
        pathname === props.href
          ? "bg-gray-300 underline dark:bg-gray-800"
          : "text-gray-900",
        className
      )}
      {...props}
    />
  );
};

export default Link;
