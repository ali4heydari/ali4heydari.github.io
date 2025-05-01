"use client";

import { useQuery } from "@tanstack/react-query";
import { FaSpotify as SpotifyIcon } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import ids from "config/ids.json";
import type { GetNowListeningResponse } from "src/app/api/spotify/now-playing/@types";
import { getJson } from "src/utils";
import Image from "next/image";
import Link from "next/link";

export interface Props {
  album?: string;
  albumImageUrl?: string;
  artist?: string;
  isPlaying?: boolean;
  songUrl?: string;
  title?: string;
}

export default function SpotifyNowListening() {
  const { data, isLoading } = useQuery<
    GetNowListeningResponse | Record<string, never>
  >({
    queryFn: () =>
      getJson<GetNowListeningResponse>("/api/spotify/now-playing").then(
        (res) => res.data,
      ),
    queryKey: ["/api/spotify/now-playing"],
    refetchInterval: 30_0000,
  });

  if (isLoading) return <div>Loading...</div>;

  if (!data) return null;

  const { album, albumImage, artist, href, isPlaying, title } = data ?? {};

  const scrollingText = isPlaying
    ? `${title} • ${artist}`
    : "Not listening to anything • Spotify";
  const animationDuration = scrollingText.length * 0.325;

  const scrollingTextClassName = twMerge(
    "motion-safe:[animation-play-state:running] group-hocus/music:underline motion-safe:group-hocus/music:[animation-play-state:paused]",
    isPlaying
      ? "motion-safe:animate-scroll"
      : "motion-safe:animate-none truncate",
  );
  return (
    <Link
      className={twMerge(
        "text-tertiary-txt text-2xs m-1 mx-auto inline-flex w-full flex-1 items-center gap-6 text-green-500",
        "hocus:text-secondary-txt group/music hocus:no-underline max-w-xs truncate font-normal md:max-w-sm",
      )}
      title={
        isPlaying
          ? `Listen to "${title}" by "${artist}" on Spotify`
          : "My Spotify Profile"
      }
      href={
        isPlaying ? href : `https://open.spotify.com/user/${ids.SPOTIFY_ID}`
      }
      target="_blank"
    >
      {isPlaying ? (
        <Image
          height={26}
          width={26}
          src={albumImage}
          alt={`Image for album: "${album}" by "${artist}"`}
          className={"border-accent-dark/[0.12] border"}
        />
      ) : (
        <SpotifyIcon
          className={"-p-1 rounded-full text-green-400 dark:text-gray-300"}
          size={30}
        />
      )}
      <div
        className={twMerge(
          "flex max-w-full flex-1 gap-24 overflow-x-hidden [mask-position:center] [mask-repeat:no-repeat]",
          isPlaying
            ? "[mask-image:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_25%,rgba(0,0,0,1)_75%,rgba(0,0,0,0)_100%)]"
            : "[mask-image:none]",
        )}
        style={{ animationDuration: `${animationDuration}s` }}
      >
        <span className={scrollingTextClassName}>{scrollingText}</span>
        {Boolean(isPlaying) && (
          <>
            <span
              aria-hidden={true}
              className={twMerge(
                "pointer-events-none select-none",
                isPlaying && scrollingTextClassName,
              )}
            >
              {scrollingText}
            </span>
            <span
              aria-hidden={true}
              className={twMerge(
                "pointer-events-none select-none",
                isPlaying && scrollingTextClassName,
              )}
            >
              {scrollingText}
            </span>
          </>
        )}
      </div>
    </Link>
  );
}
