import axios from "axios";
import { getJson } from "../../utils";
import { GetUsersTopItemsRequest } from "./@types/requests/top";
import { GetCurrentlyPlaying } from "./@types/responses/current-playing";
import {
  ArtistDto,
  GetUsersTopItemsResponse,
  TrackDto,
} from "./@types/responses/top";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN || "";

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

enum SpotifyEndpoints {
  TOP_TRACKS = "/me/top/tracks",
  TOP_ARTISTS = "/me/top/artists",
  NOW_PLAYING_ENDPOINT = "/me/player/currently-playing",
  SHOWS = "/me/shows",
  RECENTLY_PLAYED_ENDPOINT = "/me/player/recently-played",
  PLAYER_ENDPOINT = "/me/player",
}

const getAccessToken = async () => {
  const headers = {
    "Authorization": `Basic ${basic}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const urlSearchParams = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token,
  });

  const response = await fetch(
    "https://accounts.spotify.com/api/token" + "?" + urlSearchParams.toString(),
    {
      method: "POST",
      headers,
    },
  );

  const data = await response.json();
  return { data, status: response.status };
};

const BASE_URL = "https://api.spotify.com/v1";
const TIMEOUT = 5 * 1000 - 100;
const spotifyClient = axios.create({
  baseURL: BASE_URL,

  // https://stackoverflow.com/a/68774331/8777320
  timeout: TIMEOUT,
});

spotifyClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      const {
        data: { access_token },
      } = await getAccessToken();

      return axios.request({
        ...error.config,
        headers: {
          ...error.config.headers,
          Authorization: `Bearer ${access_token}`,
        },
      });
    }

    return Promise.reject(error);
  },
);

export const getTopTracks = async ({
  time_range = "long_term",
  offset = 0,
  limit = 10,
}: GetUsersTopItemsRequest) => {
  const {
    data: { access_token, token_type },
  } = await getAccessToken();

  const searchParams = new URLSearchParams({
    time_range,
    offset: offset.toString(),
    limit: limit.toString(),
  });

  const url =
    BASE_URL + SpotifyEndpoints.TOP_TRACKS + "?" + searchParams.toString();
  return await getJson<GetUsersTopItemsResponse<TrackDto>>(url, {
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  });
};

export const getTopArtists = async ({
  time_range = "long_term",
  offset = 0,
  limit = 10,
}: GetUsersTopItemsRequest) => {
  const {
    data: { access_token, token_type },
  } = await getAccessToken();

  const searchParams = new URLSearchParams({
    time_range,
    offset: offset.toString(),
    limit: limit.toString(),
  });

  const url =
    BASE_URL + SpotifyEndpoints.TOP_ARTISTS + "?" + searchParams.toString();
  return await getJson<GetUsersTopItemsResponse<ArtistDto>>(url, {
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  });
};

export const getShows = async ({
  offset = 0,
  limit = 10,
}: Omit<GetUsersTopItemsRequest, "time_range">) => {
  const {
    data: { access_token, token_type },
  } = await getAccessToken();

  const searchParams = new URLSearchParams({
    offset: offset.toString(),
    limit: limit.toString(),
  });

  const url = BASE_URL + SpotifyEndpoints.SHOWS + "?" + searchParams.toString();
  return await getJson(url, {
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  });
};

export const getNowPlaying = async (params = {}) => {
  const {
    data: { access_token, token_type },
  } = await getAccessToken();
  const searchParams = new URLSearchParams({
    ...params,
  });

  return await getJson<GetCurrentlyPlaying>(
    BASE_URL +
      SpotifyEndpoints.NOW_PLAYING_ENDPOINT +
      "?" +
      searchParams.toString(),
    {
      headers: {
        Authorization: `${token_type} ${access_token}`,
      },
    },
  );
};

export const getRecentlyPlayed = async () => {
  const {
    data: { access_token, token_type },
  } = await getAccessToken();

  return await getJson(BASE_URL + SpotifyEndpoints.RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  });
};
