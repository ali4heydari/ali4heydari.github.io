const BASE_URL = `https://api-ali4heydari.herokuapp.com`;

const NOW_PLAYING_ENDPOINT = `${BASE_URL}/musics/getNowPlaying`;
const TOP_TRACKS_ENDPOINT = `${BASE_URL}/musics/getTopTracks`;
const TOP_ARTISTS_ENDPOINT = `${BASE_URL}/musics/getTopArtists`;

export const getNowPlaying = async () => {
  return fetch(NOW_PLAYING_ENDPOINT);
};

export const getTopTracks = async () => {
  return fetch(TOP_TRACKS_ENDPOINT);
};

export const getTopArtists = async () => {
  return fetch(TOP_ARTISTS_ENDPOINT);
};
