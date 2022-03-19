import type { NextApiRequest, NextApiResponse } from "next";

import * as spotifyApi from "src/lib/spotify";

const nowPlaying = async (_: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  try {
    const response = await spotifyApi.getNowPlaying();
    if (response.status === 204) {
      return res.status(204);
    }
    const song = await response.json();
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    if (!song || song.currently_playing_type == "ad") {
      return res.status(204);
    }

    return res.status(200).json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

export default nowPlaying;
