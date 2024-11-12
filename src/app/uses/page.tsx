import React from "react";
import StyledLink from "src/components/atoms/Link";
import TitleSection from "src/components/atoms/TitleSection";
import { BASE_URL } from "src/constants";
import { software, hardware } from "src/constants/uses";
import { getStaticMetadata } from "src/utils/metadata";
import { buildOgImageUrl } from "src/utils/opengraph";
import Image from "next/image";
import Link from "next/link";

export const metadata = getStaticMetadata({
  description:
    "Get to know about my setup, hardware, software and tools I use on a daily basis",
  exactUrl: `${BASE_URL}/uses`,
  image: buildOgImageUrl("uses"),
  keywords: [
    "hardware",
    "software",
    "apps",
    "tools",
    "extensions",
    "stack",
    "website",
    "tech",
    "uses",
  ],
  title: "Uses – Ali Heydari",
});

const Uses = () => {
  return (
    <section>
      <TitleSection>Uses</TitleSection>
      <h2 className="p-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
        Hardware
      </h2>
      <p className="mb-4 text-xl text-gray-600 dark:text-gray-400">
        These are the hardware I use on a daily basis.
      </p>
      <div className="mb-3 grid grid-cols-1 gap-6 pb-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        {hardware.map((hardware) => (
          <div
            key={hardware.name}
            className="flex max-w-sm items-center gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 lg:flex-col lg:justify-center"
          >
            <Image
              className="h-26 w-36 rounded-2xl object-cover p-1"
              placeholder="blur"
              src={hardware.image}
              alt={hardware.name}
              width={200}
              height={150}
            />
            <div className="m-2 space-y-1">
              <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                {hardware.name}
              </h5>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {hardware.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="p-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
        Software
      </h2>
      <p className="mb-4 text-xl text-gray-600 dark:text-gray-400">
        These are the software I use on a daily basis.
      </p>
      <div className="m-2 flex flex-wrap justify-center gap-2 py-3">
        {["All", ...new Set(software.flatMap((s) => s.tags))].map((tag) => (
          <span
            key={tag}
            className="rounded-lg border border-gray-200 bg-gray-100 px-2 py-1 text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 pb-2 md:grid-cols-2 lg:grid-cols-6 lg:gap-2">
        {software.map((software) => (
          <Link key={software.name} href={software.href} target="_blank">
            <div className="flex h-full max-w-sm items-center gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 lg:flex-col lg:justify-center">
              <Image
                className="h-26 w-36 rounded-2xl object-cover p-1"
                placeholder="blur"
                src={software.image}
                alt={software.name}
                width={200}
                height={150}
              />
              <div className="m-2 space-y-1">
                <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  {software.name}
                </h5>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {software.description}
                </p>
                <p className="flex flex-wrap justify-center gap-2">
                  {software.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-gray-200 bg-gray-100 px-1.5 py-0.5 text-xs font-light text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Uses;
