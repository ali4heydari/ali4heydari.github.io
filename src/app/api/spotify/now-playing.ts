import type { NextApiRequest, NextApiResponse } from "next";

import * as spotifyApi from "src/api/spotify";

const nowPlaying = async (_: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  try {
    const { data: song, status } = await spotifyApi.getNowPlaying({
      additional_types: "track,episode",
    });

    if (status === 204) {
      return res.status(204);
    }

    if (song.currently_playing_type === "ad") {
      return res.status(204);
    }

    if (song.currently_playing_type === "episode") {
      const isPlaying = song.is_playing;
      const title = song.item.name;
      const artist = song.item.show.name;
      const album = song.item.show.publisher;
      const albumImageUrl = song.item.show.images[0].url;
      const songUrl = song.item.external_urls.spotify;

      return res.status(200).json({
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
      });
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

      return res.status(200).json({
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
      });
    }
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

export default nowPlaying;
