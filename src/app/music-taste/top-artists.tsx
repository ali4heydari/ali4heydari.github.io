"use client";

import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Card from "src/components/molecules/Card";
import TimeRangeSelect from "src/components/molecules/TimeRangeSelect/TimeRangeSelect";
import { BASE_URL } from "src/constants";
import { getJson } from "src/utils";
import type { WithStatus } from "src/utils";

const TopArtists = () => {
  const [timeRange, setTimeRange] = useState("short_term");

  const { data: topArtistsData, isLoading: isLoadingTopArtists } = useQuery<
    WithStatus<
      {
        genres: string[];
        href: string;
        image: string;
        name: string;
      }[]
    >
  >({
    queryKey: ["/api/spotify/top/artists", timeRange],

    queryFn: () =>
      getJson(`${BASE_URL}/api/spotify/top/artists?time_range=${timeRange}`),
  });
  return (
    <div>
      <h2 className="p-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
        Top Artists
      </h2>
      <p className="mb-4 text-xl text-gray-600 dark:text-gray-400">
        These are my top artists on Spotify. Do we have any artists in common?
        👀
      </p>
      <TimeRangeSelect timeRange={timeRange} setTimeRange={setTimeRange} />
      <div className="mb-3 grid grid-cols-1 gap-6 pb-2 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
        {(topArtistsData?.data ?? new Array(10).fill(null)).map(
          (artist, index) => (
            <Card
              key={index}
              title={artist?.name}
              subtitle={artist?.genres.join(", ")}
              imageSrc={artist?.image}
              imageAlt={artist?.name}
              href={artist?.href}
              hrefTitle={`Listen to ${artist?.name} on Spotify`}
              loading={isLoadingTopArtists}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default TopArtists;
