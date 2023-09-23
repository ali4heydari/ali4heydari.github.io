import { NextResponse } from "next/server";
import * as spotifyApi from "src/api/spotify";

const GET = async (_: Request) => {
  const headers = {
    "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
  };

  try {
    const { data: song, status } = await spotifyApi.getNowPlaying({
      additional_types: "track,episode",
    });

    if (status === 204) {
      return await NextResponse.json(
        {},
        {
          status: 204,
          headers,
        },
      );
    }

    if (song.currently_playing_type === "ad") {
      return await NextResponse.json(
        {},
        {
          status: 204,
          headers,
        },
      );
    }

    if (song.currently_playing_type === "episode") {
      const isPlaying = song.is_playing;
      const title = song.item.name;
      const artist = song.item.show.name;
      const album = song.item.show.publisher;
      const albumImageUrl = song.item.show.images[0].url;
      const songUrl = song.item.external_urls.spotify;

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

    if (song.currently_playing_type === "track") {
      const isPlaying = song.is_playing;
      const title = song.item.name;
      const artist = song.item.artists
        .map((_artist) => _artist.name)
        .join(", ");
      const album = song.item.album.name;
      const albumImageUrl = song.item.album.images[0].url;
      const songUrl = song.item.external_urls.spotify;

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
