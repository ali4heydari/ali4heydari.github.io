import { PhotoIcon } from "@heroicons/react/24/solid";
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export interface CardProps {
  height?: number;
  href?: string;
  imageAlt: string;
  imageSrc: string;
  loading?: boolean;
  rootClassName?: string;
  subtitle: string;
  title: string;
  width?: number;
}

const Card = (props: CardProps) => {
  const {
    title,
    subtitle,
    imageSrc,
    imageAlt,
    width = 200,
    height = 200,
    href,
    loading,
    rootClassName = "bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center gap-2 p-4 md:flex-col md:justify-center",
  } = props;

  const Body = useMemo(
    () => (
      <>
        <Image
          className="h-36 w-36 rounded-2xl object-cover p-1"
          src={imageSrc}
          alt={imageAlt}
          width={width}
          height={height}
        />
        <div className="m-2 w-1/2 space-y-1 text-center md:w-full">
          <h5
            className={
              "text-md font-bold tracking-tight text-gray-900 dark:text-white"
            }
          >
            {title}
          </h5>
          <p
            className={
              "mt-2 flex flex-wrap justify-center gap-1 text-xs text-gray-500 dark:text-gray-400"
            }
          >
            {subtitle}
          </p>
        </div>
      </>
    ),
    [height, imageAlt, imageSrc, subtitle, title, width],
  );

  if (loading) {
    return (
      <div
        role="status"
        className="flex animate-pulse items-center justify-between gap-2 rounded border border-gray-200 p-4 shadow dark:border-gray-700 dark:bg-gray-800 md:block md:p-6"
      >
        <div className="mb-4 flex h-48 w-1/2 items-center justify-center rounded bg-gray-300 dark:bg-gray-700 md:w-full">
          <PhotoIcon className="h-10 w-10 text-gray-200 dark:text-gray-600" />
        </div>
        <div className="w-1/2 md:w-full">
          <div className="mb-4 h-5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (href) {
    return (
      <Link href={href} className={rootClassName}>
        {Body}
      </Link>
    );
  }

  return <div className={rootClassName}>{Body}</div>;
};

export default Card;
