"use client";
import React, { useState } from "react";
import { getJson, WithStatus } from "../../utils";
import { baseUrl } from "../../constants";
import Card from "../../components/molecules/Card";
import TimeRangeSelect from "../../components/molecules/TimeRangeSelect/TimeRangeSelect";
import { useQuery } from "@tanstack/react-query";

const TopArtists = () => {
  const [timeRange, setTimeRange] = useState("short_term");

  const { data: topArtistsData, isLoading: isLoadingTopArtists } = useQuery<
    WithStatus<
      {
        image: string;
        href: string;
        name: string;
        genres: string[];
      }[]
    >
  >({
    queryKey: ["/api/spotify/top/artists", timeRange],

    queryFn: () =>
      getJson(`${baseUrl}/api/spotify/top/artists?time_range=${timeRange}`),
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
              loading={isLoadingTopArtists}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default TopArtists;
