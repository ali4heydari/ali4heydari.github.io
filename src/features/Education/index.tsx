import type { PropsWithChildren } from "react";
import React from "react";
import Mdx from "src/components/atoms/Mdx";
import TitleSection from "src/components/atoms/TitleSection";
import Timeline from "src/components/organism/Timeline";
import type { Education } from "@/content";

const Educations = ({
  educations,
  rootClassName,
}: PropsWithChildren<{
  educations: Education[];
  rootClassName?: string;
}>) => {
  const events = educations
    .map(({ code, endDate, startDate, subtitle, tags, title }) => ({
      children: <Mdx code={code} />,
      endDate,
      startDate,
      subtitle,
      title,
      topTags: tags,
    }))
    .sort((a, b) => (a.startDate > b.startDate ? -1 : 1));

  return (
    <div className={rootClassName}>
      <TitleSection center>Education and teaching</TitleSection>
      <Timeline pingLastEvent={false} events={events} />
    </div>
  );
};

export default Educations;
