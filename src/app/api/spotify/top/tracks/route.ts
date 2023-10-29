import * as spotifyApi from "src/api/spotify";
import type { GetUsersTopItemsRequest } from "src/api/spotify/@types/requests/top";
import { NextResponse } from "next/server";

const GET = async (request: Request) => {
  const requestSearchParams = new URL(request.url).searchParams;

  try {
    const { data, status } = await spotifyApi.getTopTracks({
      ...(requestSearchParams.has("time_range")
        ? {
            time_range: requestSearchParams.get(
              "time_range",
            ) as GetUsersTopItemsRequest["time_range"],
          }
        : {}),
      ...(requestSearchParams.has("offset")
        ? {
            offset: parseInt(requestSearchParams.get("offset")!, 10),
          }
        : {}),
      ...(requestSearchParams.has("limit")
        ? {
            limit: parseInt(requestSearchParams.get("limit")!, 10),
          }
        : {}),
    });

    const tracks = data.items.slice(0, 10).map((track) => ({
      artist: track.artists.map((_artist) => _artist.name).join(", "),
      image: track.album.images[0].url,
      url: track.external_urls.spotify,
      title: track.name,
    }));

    return NextResponse.json(tracks, {
      status,
    });
  } catch (error) {
    console.error({ error });
    return NextResponse.json(
      { error },
      {
        status: 500,
      },
    );
  }
};

export { GET };
