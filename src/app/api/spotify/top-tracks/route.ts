import { NextResponse } from "next/server";

import * as spotifyApi from "src/api/spotify";

const GET = async (_: Request) => {
  const headers = {
    "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
  };

  try {
    const {
      data: { items },
    } = await spotifyApi.getTopTracks();

    const tracks = items.slice(0, 10).map((track) => ({
      artist: track.artists.map((_artist) => _artist.name).join(", "),
      songUrl: track.external_urls.spotify,
      title: track.name,
    }));

    return NextResponse.json(
      { tracks },
      {
        status: 200,
        headers,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error },
      {
        status: 500,
        headers,
      }
    );
  }
};

export { GET };
