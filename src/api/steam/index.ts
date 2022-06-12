import axios from "axios";

const steamApiKey = process.env.STEAM_API_KEY as string;
const steamId = process.env.STEAM_ID as string;
const GET_PLAYER_SUMMARIES_ENDPOINT = "/ISteamUser/GetPlayerSummaries/v0002";

const steamClient = axios.create({
  baseURL: "https://api.steampowered.com",

  // https://stackoverflow.com/a/68774331/8777320
  timeout: 5 * 1000 - 100,
});

export const getNowPlaying = () =>
  steamClient.get(GET_PLAYER_SUMMARIES_ENDPOINT, {
    params: {
      key: steamApiKey,
      steamids: steamId
    }
  });
