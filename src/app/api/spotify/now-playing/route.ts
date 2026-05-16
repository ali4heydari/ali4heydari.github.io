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
        headers,
        status: 204,
      });
    }

    if (media.currently_playing_type === "ad") {
      return new Response(null, {
        headers,
        status: 204,
      });
    }

    if (media.currently_playing_type === "episode") {
      const mediaItem = media.item as EpisodeDto;
      const isPlaying = media.is_playing;
      const title = mediaItem.name;
      const artist = mediaItem.show.name;
      const album = mediaItem.show.publisher;
      const albumImage = mediaItem.show.images[0].url;
      const href = mediaItem.external_urls.spotify;

      const nextResponse = {
        album,
        albumImage,
        artist,
        href,
        isPlaying,
        title,
      };
      return NextResponse.json<GetNowListeningResponse>(nextResponse, {
        headers,
        status: 200,
      });
    }

    if (media.currently_playing_type === "track") {
      const mediaItem = media.item as SongDto;
      const isPlaying = media.is_playing;
      const title = mediaItem.name;
      const artist = mediaItem.artists
        .map((_artist) => _artist.name)
        .join(", ");
      const album = mediaItem.album.name;
      const albumImage = mediaItem.album.images[0].url;
      const href = mediaItem.external_urls.spotify;

      const nextResponse = {
        album,
        albumImage,
        artist,
        href,
        isPlaying,
        title,
      };
      return NextResponse.json<GetNowListeningResponse>(nextResponse, {
        headers,
        status: 200,
      });
    }

    return NextResponse.json(
      {
        isPlaying: false,
      },
      {
        headers,
        status,
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
        headers,
        status: 500,
      },
    );
  }
};

export { GET };
