import type { NextApiRequest, NextApiResponse } from "next";

import * as steamApi from "src/lib/steam";

const nowPlaying = async (_: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    "Cache-Control",
    `public, s-maxage=${60 * 5}, stale-while-revalidate=${60}`
  );

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

    return res.status(200).json({
      profileUrl,
      gameName,
      isPlaying,
      personName,
      profileState,
      gameUrl,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

export default nowPlaying;
