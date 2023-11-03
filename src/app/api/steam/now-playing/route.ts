import * as steamApi from "src/lib/steam";
import { NextResponse } from "next/server";

export const runtime = "edge";
export const fetchCache = "force-no-store";

const GET = async () => {
  const headers = {
    "Cache-Control": `public, s-maxage=${60 * 5}, stale-while-revalidate=${60}`,
  };

  try {
    const response = await steamApi.getNowPlaying();

    if (!response.response.players[0])
      return NextResponse.json(
        {
          error: "No player found",
        },
        {
          status: 404,
        },
      );

    const playerData = response.response.players[0];

    const profileUrl = playerData.profileurl;
    const isPlaying = !!playerData?.gameid;
    const personName = playerData.personaname;
    const profileState = playerData.profilestate;
    const gameName = isPlaying ? playerData.profilestate : null;
    const gameUrl = isPlaying
      ? `https://store.steampowered.com/app/${playerData.gameid}`
      : null;

    return NextResponse.json(
      {
        profileUrl,
        gameName,
        isPlaying,
        personName,
        profileState,
        gameUrl,
      },
      {
        status: 200,
        headers,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      {
        status: 500,
        headers,
      },
    );
  }
};

export { GET };
