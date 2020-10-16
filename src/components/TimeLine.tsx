import React, { Component } from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";
import { HighlightedText } from "./misc/Typography";
import { SectionHeading } from "./misc/Headings";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export function TimeLine({ alignStart }: { alignStart?: boolean }) {
  const { i18n } = useTranslation();

  const events = [
    {
      date: new Date(2015, 6),
      title: "Scientific diploma",
      description: "Shahid Beheshti High School",
    },
    {
      date: new Date(2016, 9),
      title: "Sharif University of Technology",
      description:
        "B.S. in chemical engineering. (I left Sharif University to change my field of study)",
    },
    {
      date: new Date(2017, 9),
      title: "Iran University of Science and Technology",
      description: "B.S. in computer engineering",
    },
    {
      date: new Date(2019, 2),
      title: "Iran University of Science and Technology",
      description:
        "Head teacher assistant in Advanced programming (C#) course in IUST",
    },
    {
      date: new Date(2020, 5),
      title: (
        <OutboundLink href="https://efarda.ir">
          eFarda eCommerce company
        </OutboundLink>
      ),
      description: "Fullstack developer",
    },
  ];

  const getEventCircleStyle = (index: number, length: number) => {
    switch (index) {
      case 0:
        return tw`items-start`;
      case length - 1:
        return tw`items-end`;
      default:
        return tw`items-center`;
    }
  };

  return (
    <div css={tw`min-h-screen`}>
      <SectionHeading>
        <HighlightedText css={tw`mb-6`}>TimeLine</HighlightedText>
      </SectionHeading>
      <div css={tw`min-h-screen flex justify-center`}>
        <div css={tw`sm:w-full md:w-2/3 mx-auto`}>
          {events?.map((event, idx) => {
            const eventCircle = (
              <div css={tw`w-1/5 flex justify-center`}>
                <div
                  css={[
                    tw`relative flex h-full w-1 bg-primary-300 justify-center`,
                    getEventCircleStyle(idx, events.length),
                  ]}
                >
                  <div
                    css={tw`absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-primary-300 leading-none text-center z-10 bg-white font-thin`}
                  >
                    <div>
                      {event.date.toLocaleDateString(i18n.language, {
                        month: "long",
                      })}
                    </div>
                    <div>
                      {event.date.toLocaleDateString(i18n.language, {
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );

            return (
              <div css={tw`flex flex-row w-full`} key={`${event.title}-${idx}`}>
                {idx % 2 === 0 || alignStart ? (
                  <>
                    <div css={tw`w-2/5 px-2 py-5`} />
                    {eventCircle}
                  </>
                ) : null}

                <div
                  css={
                    alignStart
                      ? tw`w-4/5 sm:ps-4 md:ps-1 py-10`
                      : tw`w-2/5 ps-2 py-10`
                  }
                >
                  <div
                    css={tw`flex flex-col w-full rounded-lg shadow bg-white px-4 py-5`}
                  >
                    <div css={tw`text-primary-400 mb-2 flex justify-between`}>
                      <div css={tw`font-bold`}>{event.title}</div>
                    </div>
                    <div css={tw`text-gray-600`}>{event.description}</div>
                  </div>
                </div>
                {idx % 2 !== 0 && !alignStart ? (
                  <>
                    {eventCircle}
                    <div css={tw`w-2/5 px-2 py-10`} />
                  </>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
