import type { PropsWithChildren } from "react";
import React from "react";
import TitleSection from "src/components/atoms/TitleSection";
import Timeline from "src/components/organism/Timeline";
import type { TimelineProps } from "src/components/organism/Timeline/@types";
import type { Career } from ".contentlayer/generated";
import Link from "next/link";

const Careers = ({
  allCareers,
  rootClassName,
}: PropsWithChildren<{
  allCareers: Career[];
  rootClassName?: string;
}>) => {
  const events = allCareers
    .map<TimelineProps["events"][number]>(
      ({
        position: subtitle,
        company: title,
        companySite,
        startDate,
        endDate,
        body: { html },
        stack,
        tags,
      }) => ({
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
        subtitle,
        startDate,
        endDate,
        children: <div dangerouslySetInnerHTML={{ __html: html }} />,
        topTags: tags,
        bottomTags: stack,
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
