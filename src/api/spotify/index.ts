import axios from "axios";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN || "";

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

enum SpotifyEndpoints {
  TOP_TRACKS_ENDPOINT = "/v1/me/top/tracks",
  NOW_PLAYING_ENDPOINT = "/me/player/currently-playing",
  RECENTLY_PLAYED_ENDPOINT = "/me/player/recently-played",
  PLAYER_ENDPOINT = "/me/player",
}

const getAccessToken = async () => {
  const { data } = await axios.post(
    "https://accounts.spotify.com/api/token",
    null,
    {
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }),
    }
  );

  return data;
};

const spotifyClient = axios.create({
  baseURL: "https://api.spotify.com/v1",

  // https://stackoverflow.com/a/68774331/8777320
  timeout: 5 * 1000 - 100,
});

spotifyClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      const { access_token } = await getAccessToken();

      return axios.request({
        ...error.config,
        headers: {
          ...error.config.headers,
          Authorization: `Bearer ${access_token}`,
        },
      });
    }

    return Promise.reject(error);
  }
);

export const getTopTracks = () =>
  spotifyClient.get(SpotifyEndpoints.TOP_TRACKS_ENDPOINT);

export const getNowPlaying = (params = {}) =>
  spotifyClient.get(SpotifyEndpoints.NOW_PLAYING_ENDPOINT, {
    params,
  });

export const getRecentlyPlayed = () =>
  spotifyClient.get(SpotifyEndpoints.RECENTLY_PLAYED_ENDPOINT);
