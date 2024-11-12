import type { PropsWithChildren } from "react";
import React from "react";
import Mdx from "src/components/atoms/Mdx";
import TitleSection from "src/components/atoms/TitleSection";
import Timeline from "src/components/organism/Timeline";
import type { TimelineProps } from "src/components/organism/Timeline/@types";
import type { Career } from "@/content";
import Link from "next/link";

const Careers = ({
  careers,
  rootClassName,
}: PropsWithChildren<{
  careers: Career[];
  rootClassName?: string;
}>) => {
  const events = careers
    .map<TimelineProps["events"][number]>(
      ({
        code,
        company: title,
        companySite,
        endDate,
        position: subtitle,
        stack,
        startDate,
        tags,
      }) => ({
        bottomTags: stack,
        children: <Mdx code={code} />,
        endDate,
        startDate,
        subtitle,
        title: companySite ? (
          <Link
            className="text-indigo-500 underline hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
            target="_blank"
            rel="noopener noreferrer"
            href={companySite}
          >
            {title}
          </Link>
        ) : (
          title
        ),
        topTags: tags,
      }),
    )
    .sort((a, b) => (new Date(a.startDate) > new Date(b.startDate) ? 1 : -1));

  return (
    <section className={rootClassName}>
      <TitleSection center>Experience</TitleSection>
      <Timeline events={events} />
    </section>
  );
};

export default Careers;
