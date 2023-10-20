import Image from "next/image";
import React, { useMemo } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export type CardProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  width?: number;
  height?: number;
  href?: string;
  loading?: boolean;
  rootClassName?: string;
};

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
          className="rounded-2xl w-36 h-36 object-cover p-1"
          src={imageSrc}
          alt={imageAlt}
          width={width}
          height={height}
        />
        <div className="m-2 space-y-1 text-center w-1/2 md:w-full">
          <h5
            className={
              "text-md font-bold tracking-tight text-gray-900 dark:text-white"
            }
          >
            {title}
          </h5>
          <p
            className={
              "text-xs text-gray-500 dark:text-gray-400 flex flex-wrap justify-center gap-1 mt-2"
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
        className="rounded shadow animate-pulse dark:bg-gray-800 dark:border-gray-700 border border-gray-200 p-4 md:p-6 flex gap-2 items-center justify-between md:block"
      >
        <div className="w-1/2 md:w-full flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
          <PhotoIcon className="w-10 h-10 text-gray-200 dark:text-gray-600" />
        </div>
        <div className="w-1/2 md:w-full">
          <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
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
