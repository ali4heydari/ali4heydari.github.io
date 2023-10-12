import { NextResponse } from "next/server";
import * as spotifyApi from "src/api/spotify";
import {
  EpisodeDto,
  SongDto,
} from "../../../../api/spotify/@types/responses/current-playing";

const GET = async (_: Request) => {
  const headers = {
    "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
  };

  try {
    const { data: media, status } = await spotifyApi.getNowPlaying({
      additional_types: "track,episode",
    });

    if (status === 204) {
      return await NextResponse.json(
        {
          isPlaying: false,
        },
        {
          status,
          headers,
        },
      );
    }

    if (media.currently_playing_type === "ad") {
      return await NextResponse.json(
        {},
        {
          status: 204,
          headers,
        },
      );
    }

    if (media.currently_playing_type === "episode") {
      media.item = media.item as EpisodeDto;
      const isPlaying = media.is_playing;
      const title = media.item.name;
      const artist = media.item.show.name;
      const album = media.item.show.publisher;
      const albumImageUrl = media.item.show.images[0].url;
      const songUrl = media.item.external_urls.spotify;

      return await NextResponse.json(
        {
          album,
          albumImageUrl,
          artist,
          isPlaying,
          songUrl,
          title,
        },
        {
          status: 200,
          headers,
        },
      );
    }

    if (media.currently_playing_type === "track") {
      media.item = media.item as SongDto;
      const isPlaying = media.is_playing;
      const title = media.item.name;
      const artist = media.item.artists
        .map((_artist) => _artist.name)
        .join(", ");
      const album = media.item.album.name;
      const albumImageUrl = media.item.album.images[0].url;
      const songUrl = media.item.external_urls.spotify;

      return await NextResponse.json(
        {
          album,
          albumImageUrl,
          artist,
          isPlaying,
          songUrl,
          title,
        },
        {
          status: 200,
          headers,
        },
      );
    }

    return await NextResponse.json({}, { status: 500, headers });
  } catch (error) {
    return await NextResponse.json(
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
