const steamApiKey = process.env.STEAM_API_KEY as string;
const steamId = process.env.STEAM_ID as string;
const GET_PLAYER_SUMMARIES_ENDPOINT =
  "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002";

export const getNowPlaying = async () => {
  const url = new URL(GET_PLAYER_SUMMARIES_ENDPOINT);
  const params = {
    key: steamApiKey,
    steamids: steamId,
  };
  url.search = new URLSearchParams(params).toString();

  return fetch(url.toString());
};
