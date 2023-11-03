import type { GetPlayerSummariesResponse } from "./@types";

const steamApiKey = process.env.STEAM_API_KEY!;
const steamId = process.env.STEAM_ID!;
const GET_PLAYER_SUMMARIES_ENDPOINT =
  "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002";

export const getNowPlaying = async (): Promise<GetPlayerSummariesResponse> => {
  const url = new URL(GET_PLAYER_SUMMARIES_ENDPOINT);
  const params = {
    key: steamApiKey,
    steamids: steamId,
  };
  url.search = new URLSearchParams(params).toString();

  return fetch(url.toString()).then<GetPlayerSummariesResponse>((response) =>
    response.json(),
  );
};
