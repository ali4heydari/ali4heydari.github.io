import type { NextApiRequest, NextApiResponse } from "next";

import * as spotifyApi from "src/api/spotify";
import * as steamApi from "src/api/steam";

const nowPlaying = async (_: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  try {
    const [steamPromiseResult, spotifyPromiseResult] = await Promise.allSettled(
      [steamApi.getNowPlaying(), spotifyApi.getNowPlaying()]
    );

    let steamData: any = null;
    let spotifyData: any = null;

    if (steamPromiseResult.status === "fulfilled") {
      const {
        data: {
          response: {
            players: [playerData],
          },
        },
      } = steamPromiseResult.value;

      const profileUrl = playerData.profileurl;
      const isPlaying = !!playerData?.gameid;
      const personName = playerData.personaname;
      const profileState = playerData.profilestate;
      const gameName = isPlaying ? playerData.gameextrainfo : null;
      const gameUrl = isPlaying
        ? `https://store.steampowered.com/app/${playerData.gameid}`
        : null;

      steamData = {
        profileUrl,
        gameName,
        isPlaying,
        personName,
        profileState,
        gameUrl,
      };
    }

    if (spotifyPromiseResult.status === "fulfilled") {
      const { status, data: media } = spotifyPromiseResult.value;
      if (status === 204) {
        return res.status(204);
      }

      if (media.currently_playing_type === "ad") {
        return res.status(204);
      }

      if (media.currently_playing_type === "episode") {
        const isPlaying = media.is_playing;
        const title = media.item.name;
        const artist = media.item.show.name;
        const album = media.item.show.publisher;
        const albumImageUrl = media.item.show.images[0].url;
        const songUrl = media.item.external_urls.spotify;

        spotifyData = {
          isPlaying,
          title,
          artist,
          album,
          albumImageUrl,
          songUrl,
        };
      }

      if (media.currently_playing_type === "track") {
        const isPlaying = media.is_playing;
        const title = media.item.name;
        const artist = media.item.artists
          .map((_artist) => _artist.name)
          .join(", ");
        const album = media.item.album.name;
        const albumImageUrl = media.item.album.images[0].url;
        const songUrl = media.item.external_urls.spotify;

        spotifyData = {
          album,
          albumImageUrl,
          artist,
          isPlaying,
          songUrl,
          title,
        };
      }
    }

    return res.status(200).json({
      spotify: spotifyData,
      steam: steamData,
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      steam: null,
      spotify: null,
      error,
    });
  }
};

export default nowPlaying;
