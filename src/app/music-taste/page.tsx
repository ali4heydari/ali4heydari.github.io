import { NextPage } from "next";
import TitleSection from "../../components/TitleSection";
import Image from "next/image";
import Link from "../../components/atoms/Link";
import { getJson } from "../../utils";
import { baseUrl } from "../../constants";

const MusicTastePage: NextPage = async () => {
  const { data: topTracksData } = await getJson(
    `${baseUrl}/api/spotify/top/tracks?time_range=short_term`,
  );
  const { data: topArtistsData } = await getJson(
    `${baseUrl}/api/spotify/top/artists?time_range=short_term`,
  );

  if (!topTracksData && !topArtistsData) {
    return null;
  }

  return (
    <section>
      <TitleSection>Musics</TitleSection>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl p-3">
        Top Tracks
      </h2>
      <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-2 mb-3">
        {topTracksData.tracks.map((track) => (
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
        ))}
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl p-3">
        Top Artists
      </h2>
      <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-2 mb-3">
        {topArtistsData.artists?.map((artist) => (
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
        ))}
      </div>
    </section>
  );
};

export default MusicTastePage;
