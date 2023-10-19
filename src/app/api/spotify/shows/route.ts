import { NextResponse } from "next/server";

import * as spotifyApi from "src/api/spotify";

const GET = async (request: Request) => {
  const requestSearchParams = new URL(request.url).searchParams;

  try {
    const { data, status } = await spotifyApi.getShows({
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

    const shows = data.items.map(({ show }) => ({
      image: show.images[0].url,
      href: show.external_urls.spotify,
      name: show.name,
      publisher: show.publisher,
      description: show.description,
    }));

    return NextResponse.json(shows, {
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