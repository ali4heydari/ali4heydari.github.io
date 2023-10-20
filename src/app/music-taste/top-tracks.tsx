"use client";
import React, { useState } from "react";
import StyledLink from "../../components/atoms/Link";
import useMasterQuery from "../../hooks/useMasterQuery";
import { getJson } from "../../utils";
import { baseUrl } from "../../constants";
import Image from "next/image";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Card from "../../components/molecules/Card";
import TimeRangeSelect from "../../components/molecules/TimeRangeSelect/TimeRangeSelect";

const TopTracks = () => {
  const [timeRange, setTimeRange] = useState("short_term");

  const { data: topTracksData, isLoading: isLoadingTopTracks } = useMasterQuery(
    ["/api/spotify/top/tracks", timeRange],
    () =>
      getJson<
        {
          artist: string;
          image: string;
          url: string;
          title: string;
        }[]
      >(`${baseUrl}/api/spotify/top/tracks?time_range=${timeRange}`),
  );

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl p-3">
        Top Tracks
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
        These are my top tracks on Spotify. I listen to music while I&#39;m
        working, I&#39;m a big fan of Instrumental music, and I mostly listen to
        them while I&#39;m working. I also listen to Pop, Rock, Metal,
        Alternative, classical/traditional Persian music, and sometimes Rap.
      </p>
      <TimeRangeSelect timeRange={timeRange} setTimeRange={setTimeRange} />
      <div className="mx-auto">
        <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 pb-2 mb-3">
          {(topTracksData?.data ?? new Array(10).fill(null)).map(
            (track, index) => (
              <Card
                key={index}
                title={track?.title}
                subtitle={track?.artist}
                imageSrc={track?.image}
                imageAlt={track?.title}
                href={track?.url}
                loading={isLoadingTopTracks}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default TopTracks;
