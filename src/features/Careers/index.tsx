import type { PropsWithChildren } from "react";
import React from "react";
import TitleSection from "src/components/atoms/TitleSection";
import Timeline from "src/components/organism/Timeline";
import type { TimelineProps } from "src/components/organism/Timeline/@types";
import type { Career } from ".contentlayer/generated";

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
        startDate,
        endDate,
        body: { html },
        stack,
        tags,
      }) => ({
        title,
        subtitle,
        startDate,
        endDate,
        children: <div dangerouslySetInnerHTML={{ __html: html }} />,
        topTags: tags,
        bottomTags: stack,
      }),
    )
    .sort((a, b) => (a.startDate > b.startDate ? -1 : 1));

  return (
    <section className={rootClassName}>
      <TitleSection center>Experience</TitleSection>
      <Timeline events={events} />
    </section>
  );
};

export default Careers;
