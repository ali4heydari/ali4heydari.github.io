import axios from "axios";

const steamApiKey = process.env.STEAM_API_KEY as string;
const steamId = process.env.STEAM_ID as string;
const GET_PLAYER_SUMMARIES_ENDPOINT = "/ISteamUser/GetPlayerSummaries/v0002";

const steamClient = axios.create({
  baseURL: "http://api.steampowered.com",
});

export const getNowPlaying = () =>
  steamClient.get(GET_PLAYER_SUMMARIES_ENDPOINT, {
    params: {
      key: steamApiKey,
      steamids: steamId,
    },
  });
