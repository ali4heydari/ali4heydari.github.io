import { NextResponse } from "next/server";

import * as spotifyApi from "src/api/spotify";
import { GetUsersTopItemsRequest } from "../../../../../api/spotify/@types/requests/top";

const GET = async (request: Request) => {
  const requestSearchParams = new URL(request.url).searchParams;

  try {
    const { data, status } = await spotifyApi.getTopArtists({
      ...(requestSearchParams.has("time_range")
        ? {
            time_range: requestSearchParams.get(
              "time_range",
            ) as GetUsersTopItemsRequest["time_range"],
          }
        : {}),
      ...(requestSearchParams.has("offset")
        ? {
            offset: parseInt(requestSearchParams.get("offset") as string, 10),
          }
        : {}),
      ...(requestSearchParams.has("limit")
        ? {
            limit: parseInt(requestSearchParams.get("limit") as string, 10),
          }
        : {}),
    });

    const artists = data.items.slice(0, 10).map((artist) => ({
      image: artist.images[0].url,
      href: artist.external_urls.spotify,
      name: artist.name,
      genres: artist.genres,
    }));

    return NextResponse.json(artists, {
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
