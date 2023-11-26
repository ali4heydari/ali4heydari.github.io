import * as spotifyApi from "src/lib/spotify";
import type { ShowDto } from "./@types";
import * as Sentry from "@sentry/nextjs";
import { NextResponse } from "next/server";

const GET = async (request: Request) => {
  const requestSearchParams = new URL(request.url).searchParams;

  try {
    const { data, status } = await spotifyApi.getShows({
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

    const shows = data.items.map(({ show }) => ({
      image: show.images[0].url,
      href: show.external_urls.spotify,
      name: show.name,
      publisher: show.publisher,
      description: show.description,
    }));

    return NextResponse.json<ShowDto[]>(shows, {
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
