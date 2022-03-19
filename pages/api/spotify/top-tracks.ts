import type { NextApiRequest, NextApiResponse } from "next";

import * as spotifyApi from "src/lib/spotify";

const topTracks = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await spotifyApi.getTopTracks();
    const { items } = await response.json();

    const tracks = items.slice(0, 10).map((track) => ({
      artist: track.artists.map((_artist) => _artist.name).join(", "),
      songUrl: track.external_urls.spotify,
      title: track.name,
    }));
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=86400, stale-while-revalidate=43200"
    );
    return res.status(200).json({ tracks });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default topTracks;
