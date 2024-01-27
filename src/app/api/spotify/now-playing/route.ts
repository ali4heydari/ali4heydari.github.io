import * as spotifyApi from "src/lib/spotify";
import type { EpisodeDto, SongDto } from "src/lib/spotify";
import type { GetNowListeningResponse } from "./@types";
import * as Sentry from "@sentry/nextjs";
import { NextResponse } from "next/server";

export const runtime = "edge";

export const fetchCache = "force-no-store";

const GET = async () => {
  const headers = {
    "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
  };

  try {
    const { data: media, status } = await spotifyApi.getNowListening({
      additional_types: "track,episode",
    });

    if (status === 204 || media === null) {
      return new Response(null, {
        status: 204,
        headers,
      });
    }

    if (media.currently_playing_type === "ad") {
      return new Response(null, {
        status: 204,
        headers,
      });
    }

    if (media.currently_playing_type === "episode") {
      media.item = media.item as EpisodeDto;
      const isPlaying = media.is_playing;
      const title = media.item.name;
      const artist = media.item.show.name;
      const album = media.item.show.publisher;
      const albumImage = media.item.show.images[0].url;
      const href = media.item.external_urls.spotify;

      const nextResponse = {
        album,
        albumImage,
        artist,
        isPlaying,
        href,
        title,
      };
      return NextResponse.json<GetNowListeningResponse>(nextResponse, {
        status: 200,
        headers,
      });
    }

    if (media.currently_playing_type === "track") {
      media.item = media.item as SongDto;
      const isPlaying = media.is_playing;
      const title = media.item.name;
      const artist = media.item.artists
        .map((_artist) => _artist.name)
        .join(", ");
      const album = media.item.album.name;
      const albumImage = media.item.album.images[0].url;
      const href = media.item.external_urls.spotify;

      const nextResponse = {
        album,
        albumImage,
        artist,
        isPlaying,
        href,
        title,
      };
      return NextResponse.json<GetNowListeningResponse>(nextResponse, {
        status: 200,
        headers,
      });
    }

    return NextResponse.json(
      {
        isPlaying: false,
      },
      {
        status,
        headers,
      },
    );
  } catch (error) {
    Sentry.captureException(error);
    console.error({ error });
    return NextResponse.json(
      {
        error,
      },
      {
        status: 500,
        headers,
      },
    );
  }
};

export { GET };
