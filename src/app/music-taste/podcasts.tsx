"use client";

import { useQuery } from "@tanstack/react-query";
import Card from "src/components/molecules/Card";
import { BASE_URL } from "src/constants";
import { getJson } from "src/utils";
import type { WithStatus } from "src/utils";

const Podcasts = () => {
  const { data: showsData, isLoading: isLoadingShows } = useQuery<
    WithStatus<
      {
        description: string;
        href: string;
        image: string;
        name: string;
        publisher: string;
      }[]
    >
  >({
    queryFn: () => getJson(`${BASE_URL}/api/spotify/shows?limit=50`),
    queryKey: ["/api/spotify/shows?limit=50"],
  });
  return (
    <div>
      <h2 className="p-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
        Podcasts
      </h2>
      <p className="mb-4 text-xl text-gray-600 dark:text-gray-400">
        I&#39;m enthusiastic about podcasts. Podcasts are a great way to learn
        new things and get inspired. Listening to podcasts helps me to learn
        none-tech stuff and get inspired by other people&#39;s stories. Apart
        from Tech, I mostly like History, Science, Psychology, and Economics
        podcasts. I listen to podcasts while I&#39;m working, driving, or doing
        chores. Here is a list of podcasts that I followed on Spotify. Do you
        have any podcasts to recommend? 🤔
      </p>
      <div className="mb-3 grid grid-cols-1 gap-6 pb-2 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
        {(showsData?.data ?? new Array(10).fill(null)).map((show, index) => (
          <Card
            key={index}
            title={show?.name}
            subtitle={show?.publisher}
            imageSrc={show?.image}
            imageAlt={show?.name}
            href={show?.href}
            loading={isLoadingShows}
          />
        ))}
      </div>
    </div>
  );
};

export default Podcasts;
