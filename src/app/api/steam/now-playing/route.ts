import * as steamApi from "src/lib/steam";
import { NextResponse } from "next/server";

const GET = async (_: Request) => {
  const headers = {
    "Cache-Control": `public, s-maxage=${60 * 5}, stale-while-revalidate=${60}`,
  };

  try {
    const response = await steamApi.getNowPlaying();

    const {
      response: {
        players: [playerData],
      },
    } = await response.json();

    const profileUrl = playerData.profileurl;
    const isPlaying = !!playerData?.gameid;
    const personName = playerData.personaname;
    const profileState = playerData.profilestate;
    const gameName = isPlaying ? playerData.gameextrainfo : null;
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
