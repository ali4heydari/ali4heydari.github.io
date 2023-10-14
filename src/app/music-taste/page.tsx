"use client";
import { NextPage } from "next";
import TitleSection from "../../components/TitleSection";
import Image from "next/image";
import Link from "../../components/atoms/Link";
import { getJson } from "../../utils";
import { baseUrl } from "../../constants";
import useMasterQuery from "../../hooks/useMasterQuery";
import { useState } from "react";

const MusicTastePage: NextPage = () => {
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

  const { data: topArtistsData, isLoading: isLoadingTopArtists } =
    useMasterQuery(["/api/spotify/top/artists", timeRange], () =>
      getJson<
        {
          image: string;
          href: string;
          name: string;
          genres: string[];
        }[]
      >(`${baseUrl}/api/spotify/top/artists?time_range=${timeRange}`),
    );

  const { data: showsData, isLoading: isLoadingShows } = useMasterQuery(
    ["/api/spotify/shows?limit=50"],
    () =>
      getJson<
        {
          image: string;
          href: string;
          name: string;
          publisher: string;
          description: string;
        }[]
      >(`${baseUrl}/api/spotify/shows?limit=50`),
  );

  return (
    <section>
      <TitleSection>Musics</TitleSection>
      <div className="flex justify-center mb-4">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setTimeRange("short_term")}
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            Short Term
          </button>
          <button
            type="button"
            onClick={() => setTimeRange("medium_term")}
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            Medium Term
          </button>
          <button
            type="button"
            onClick={() => setTimeRange("long_term")}
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            Long Term
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl p-3">
        Top Tracks
      </h2>
      <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-2 mb-3">
        {(topTracksData?.data ?? new Array(10).fill(null)).map(
          (track, index) =>
            isLoadingTopTracks ? (
              <div
                key={index}
                role="status"
                className="max-w-sm rounded shadow animate-pulse dark:bg-gray-800 dark:border-gray-700 border border-gray-200 p-4 md:p-6"
              >
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>

                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <Link
                key={track.title}
                href={track.url}
                title={`Listen to "${track.title}" on Spotify`}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center gap-2 p-4 lg:flex-col lg:justify-center"
              >
                <Image
                  className="rounded-2xl w-36 h-36 object-cover p-1"
                  src={track.image}
                  alt={track.title}
                  width={200}
                  height={200}
                />
                <div className="m-2 space-y-1 text-center">
                  <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                    {track.title}
                  </h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {track.artist}
                  </p>
                </div>
              </Link>
            ),
        )}
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl p-3">
        Top Artists
      </h2>
      <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-2 mb-3">
        {(topArtistsData?.data ?? new Array(10).fill(null)).map(
          (artist, index) =>
            isLoadingTopArtists ? (
              <div
                key={index}
                role="status"
                className="max-w-sm rounded shadow animate-pulse dark:bg-gray-800 dark:border-gray-700 border border-gray-200 p-4 md:p-6"
              >
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                <p className="text-xs text-gray-500 dark:text-gray-400 flex flex-wrap justify-center gap-1 mt-2">
                  <span className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-10" />
                  <span className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-10" />
                  <span className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-10" />
                </p>

                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <Link
                key={artist.name}
                href={artist.href}
                title={`Listen to "${artist.name}" on Spotify`}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center gap-2 p-4 lg:flex-col lg:justify-center"
              >
                <Image
                  className="rounded-2xl w-36 h-36 object-cover p-1"
                  src={artist.image}
                  alt={artist.name}
                  width={200}
                  height={200}
                />
                <div className="m-2 space-y-1 text-center">
                  <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                    {artist.name}
                  </h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400 flex flex-wrap justify-center gap-1 mt-2">
                    {artist.genres?.slice(0, 4).map((genre) => (
                      <span
                        key={genre}
                        className="px-2 py-0.5 mx-1 text-xs font-medium tracking-wide text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-200"
                      >
                        {genre}
                      </span>
                    ))}
                  </p>
                </div>
              </Link>
            ),
        )}
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl p-3">
        Podcasts
      </h2>
      <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-2 mb-3">
        {(showsData?.data ?? new Array(10).fill(null)).map((show, index) =>
          isLoadingShows ? (
            <div
              key={index}
              role="status"
              className="max-w-sm rounded shadow animate-pulse dark:bg-gray-800 dark:border-gray-700 border border-gray-200 p-4 md:p-6"
            >
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
              <p className="text-xs text-gray-500 dark:text-gray-400 flex flex-wrap justify-center gap-1 mt-2">
                <span className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-10" />
                <span className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-10" />
                <span className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-10" />
              </p>

              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <Link
              key={show.name}
              href={show.href}
              title={`Listen to "${show.name}" on Spotify`}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center gap-2 p-4 lg:flex-col lg:justify-center"
            >
              <Image
                className="rounded-2xl w-36 h-36 object-cover p-1"
                src={show.image}
                alt={show.name}
                width={200}
                height={200}
              />
              <div className="m-2 space-y-1 text-center">
                <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  {show.name}
                </h5>
                <p className="text-xs text-gray-500 dark:text-gray-400 flex flex-wrap justify-center gap-1 mt-2">
                  {show.publisher}
                </p>
              </div>
            </Link>
          ),
        )}
      </div>
    </section>
  );
};

export default MusicTastePage;
