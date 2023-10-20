import React from "react";
import TitleSection from "../../components/TitleSection";
import Image from "next/image";
import { getStaticMetadata } from "../../utils/metadata";
import { buildOgImageUrl } from "../../utils/opengraph";
import StyledLink from "../../components/atoms/Link";
import { softwares, hardwares } from "../../constants/uses";

export const metadata = getStaticMetadata({
  title: "Uses – Ali Heydari",
  description:
    "Get to know about my setup, hardware, software and tools I use on a daily basis",
  exactUrl: "https://ali4heydari.tech/uses",
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
  image: buildOgImageUrl("uses"),
});

const Uses = () => {
  return (
    <section>
      <TitleSection>Uses</TitleSection>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl p-3">
        Hardware
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
        These are the hardware I use on a daily basis.
      </p>
      <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-2 mb-3">
        {hardwares.map((hardware) => (
          <div
            key={hardware.name}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center gap-2 p-4 lg:flex-col lg:justify-center"
          >
            <Image
              className="rounded-2xl w-36 h-26 object-cover p-1"
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
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl p-3">
        Software
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
        These are the software I use on a daily basis.
      </p>
      <div className="flex justify-center gap-2 flex-wrap py-3 m-2">
        {["All", ...new Set(softwares.flatMap((s) => s.tags))].map((tag) => (
          <span
            key={tag}
            className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 rounded-lg px-2 py-1 border border-gray-200 dark:border-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-2">
        {softwares.map((software) => (
          <StyledLink key={software.name} href={software.href} target="_blank">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center gap-2 p-4 lg:flex-col lg:justify-center h-full">
              <Image
                className="rounded-2xl w-36 h-26 object-cover p-1"
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
                <p className="flex justify-center gap-2 flex-wrap">
                  {software.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-light text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 rounded-lg px-1.5 py-0.5 border border-gray-200 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </StyledLink>
        ))}
      </div>
    </section>
  );
};

export default Uses;
