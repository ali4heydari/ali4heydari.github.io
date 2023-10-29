import axios from "axios";

const steamApiKey = process.env.STEAM_API_KEY!;
const steamId = process.env.STEAM_ID!;
const GET_PLAYER_SUMMARIES_ENDPOINT = "/ISteamUser/GetPlayerSummaries/v0002";

const BASE_URL = "https://api.steampowered.com";
const TIMEOUT = 5 * 1000 - 100;
const steamClient = axios.create({
  baseURL: BASE_URL,

  // https://stackoverflow.com/a/68774331/8777320
  timeout: TIMEOUT,
});

export const getNowPlaying = async () => {
  const response = await fetch(
    BASE_URL +
      GET_PLAYER_SUMMARIES_ENDPOINT +
      "?" +
      new URLSearchParams({
        key: steamApiKey,
        steamids: steamId,
      }).toString(),
  );

  const data = await response.json();

  return {
    data,
    status: response.status,
  };
};
