import { env } from "src/env";
import type { GetPlayerSummariesResponse } from "./@types";

const steamApiKey = env.STEAM_API_KEY;
const steamId = env.STEAM_ID;
const GET_PLAYER_SUMMARIES_ENDPOINT =
  "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002";

export const getNowPlaying = async (): Promise<GetPlayerSummariesResponse> => {
  const url = new URL(GET_PLAYER_SUMMARIES_ENDPOINT);
  const params = {
    key: steamApiKey,
    steamids: String(steamId),
  };
  url.search = new URLSearchParams(params).toString();

  return fetch(url.toString()).then<GetPlayerSummariesResponse>((response) =>
    response.json(),
  );
};
