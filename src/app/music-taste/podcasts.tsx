import React from "react";
import useMasterQuery from "../../hooks/useMasterQuery";
import { getJson } from "../../utils";
import { baseUrl } from "../../constants";
import Link from "../../components/atoms/Link";
import Image from "next/image";
import Card from "src/components/Card";
import * as spotifyApi from "../../api/spotify";

const Podcasts = async () => {
  const { data } = await spotifyApi.getShows({
    limit: 50,
    offset: 0,
  });

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl p-3">
        Podcasts
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
        I&#39;m enthusiastic about podcasts. Podcasts are a great way to learn
        new things and get inspired. Listening to podcasts helps me to learn
        none-tech stuff and get inspired by other people&#39;s stories. Apart
        from Tech, I mostly like History, Science, Psychology, and Economics
        podcasts. I listen to podcasts while I&#39;m working, driving, or doing
        chores. Here is a list of podcasts that I followed on Spotify. Do you
        have any podcasts to recommend? 🤔
      </p>
      <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 pb-2 mb-3">
        {data.items.map(({ show }) => (
          <Card
            key={show}
            title={show.name}
            subtitle={show.publisher}
            imageSrc={show.images[0].url}
            imageAlt={show.name}
            href={show.external_urls.spotify}
          />
        ))}
      </div>
    </div>
  );
};

export default Podcasts;
