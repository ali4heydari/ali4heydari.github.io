import * as spotifyApi from "src/lib/spotify";
import type { GetUsersTopItemsRequest } from "src/lib/spotify/@types/requests/top";
import type { ArtistDto } from "./@types";
import * as Sentry from "@sentry/nextjs";
import { NextResponse } from "next/server";

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
            offset: parseInt(requestSearchParams.get("offset")!, 10),
          }
        : {}),
      ...(requestSearchParams.has("limit")
        ? {
            limit: parseInt(requestSearchParams.get("limit")!, 10),
          }
        : {}),
    });

    const artists = data.items.slice(0, 10).map((artist) => ({
      image: artist.images[0].url,
      href: artist.external_urls.spotify,
      name: artist.name,
      genres: artist.genres,
    }));

    return NextResponse.json<ArtistDto[]>(artists, {
      status,
    });
  } catch (error) {
    Sentry.captureException(error);
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
