import { env } from "src/env";
import type {
  GetUsersTopItemsRequest,
  SpotifyPaginatedRequest,
} from "src/lib/spotify/@types/requests/top";
import type { GetCurrentlyPlayingResponse } from "src/lib/spotify/@types/responses/current-playing";
import { getJson } from "src/utils";
import type {
  RefreshTokenResponse,
  TrackDto,
  ArtistDetailed,
  SpotifyPaginatedResponse,
  GetCurrentPlayingRequest,
} from "./@types";

const client_id = env.SPOTIFY_CLIENT_ID;
const client_secret = env.SPOTIFY_CLIENT_SECRET;
const refresh_token = env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

enum SpotifyEndpoints {
  NOW_PLAYING_ENDPOINT = "/me/player/currently-playing",
  PLAYER_ENDPOINT = "/me/player",
  RECENTLY_PLAYED_ENDPOINT = "/me/player/recently-played",
  SHOWS = "/me/shows",
  TOP_ARTISTS = "/me/top/artists",
  TOP_TRACKS = "/me/top/tracks",
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

  const response = await getJson<RefreshTokenResponse>(
    "https://accounts.spotify.com/api/token" + "?" + urlSearchParams.toString(),
    {
      headers,
      method: "POST",
    },
  );

  if (!response.data) {
    throw new Error("Could not get access token");
  }

  return response;
};

const BASE_URL = "https://api.spotify.com/v1";

export const getTopTracks = async ({
  limit = 10,
  offset = 0,
  time_range = "long_term",
}: GetUsersTopItemsRequest) => {
  const {
    data: { access_token, token_type },
  } = await getAccessToken();

  const searchParams = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString(),
    time_range,
  });

  const url =
    BASE_URL + SpotifyEndpoints.TOP_TRACKS + "?" + searchParams.toString();
  return await getJson<SpotifyPaginatedResponse<TrackDto>>(url, {
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  });
};

export const getTopArtists = async ({
  limit = 10,
  offset = 0,
  time_range = "long_term",
}: GetUsersTopItemsRequest) => {
  const {
    data: { access_token, token_type },
  } = await getAccessToken();

  const searchParams = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString(),
    time_range,
  });

  const url =
    BASE_URL + SpotifyEndpoints.TOP_ARTISTS + "?" + searchParams.toString();
  return await getJson<SpotifyPaginatedResponse<ArtistDetailed>>(url, {
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  });
};

export const getShows = async ({
  limit = 10,
  offset = 0,
}: SpotifyPaginatedRequest) => {
  const {
    data: { access_token, token_type },
  } = await getAccessToken();

  const searchParams = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString(),
  });

  const url = BASE_URL + SpotifyEndpoints.SHOWS + "?" + searchParams.toString();
  return await getJson(url, {
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  });
};

export const getNowListening = async (
  params: GetCurrentPlayingRequest = {},
) => {
  const {
    data: { access_token, token_type },
  } = await getAccessToken();
  const searchParams = new URLSearchParams({
    ...params,
  });

  return await getJson<GetCurrentlyPlayingResponse>(
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
