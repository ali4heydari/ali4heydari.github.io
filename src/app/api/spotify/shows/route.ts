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
      description: show.description,
      href: show.external_urls.spotify,
      image: show.images.at(-1).url,
      name: show.name,
      publisher: show.publisher,
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
