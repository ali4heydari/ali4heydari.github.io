"use client";

import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Card from "src/components/molecules/Card";
import TimeRangeSelect from "src/components/molecules/TimeRangeSelect/TimeRangeSelect";
import { BASE_URL } from "src/constants";
import { getJson } from "src/utils";
import type { WithStatus } from "src/utils";

const TopTracks = () => {
  const [timeRange, setTimeRange] = useState("short_term");

  const { data: topTracksData, isLoading: isLoadingTopTracks } = useQuery<
    WithStatus<
      {
        artist: string;
        href: string;
        image: string;
        title: string;
      }[]
    >
  >({
    queryKey: ["/api/spotify/top/tracks", timeRange],
    queryFn: () =>
      getJson(`${BASE_URL}/api/spotify/top/tracks?time_range=${timeRange}`),
  });

  return (
    <div>
      <h2 className="p-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
        Top Tracks
      </h2>
      <p className="mb-4 text-xl text-gray-600 dark:text-gray-400">
        These are my top tracks on Spotify. I listen to music while I&#39;m
        working, I&#39;m a big fan of Instrumental music, and I mostly listen to
        them while I&#39;m working. I also listen to Pop, Rock, Metal,
        Alternative, classical/traditional Persian music, and sometimes Rap.
      </p>
      <TimeRangeSelect timeRange={timeRange} setTimeRange={setTimeRange} />
      <div className="mx-auto">
        <div className="mb-3 grid grid-cols-1 gap-6 pb-2 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {(topTracksData?.data ?? new Array(10).fill(null)).map(
            (track, index) => (
              <Card
                key={index}
                title={track?.title}
                subtitle={track?.artist}
                imageSrc={track?.image}
                imageAlt={track?.title}
                href={track?.href}
                hrefTitle={`Listen to ${track?.title} on Spotify`}
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
