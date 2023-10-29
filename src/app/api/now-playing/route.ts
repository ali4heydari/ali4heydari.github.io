import * as spotifyApi from "src/api/spotify";
import type {
  EpisodeDto,
  SongDto,
} from "src/api/spotify/@types/responses/current-playing";
import * as steamApi from "src/api/steam";
import { NextResponse } from "next/server";

export const runtime = "edge";
export const fetchCache = "force-no-store";

const GET = async (_: Request) => {
  const headers = {
    "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
  };

  try {
    const [steamPromiseResult, spotifyPromiseResult] = await Promise.allSettled(
      [
        steamApi.getNowPlaying(),
        spotifyApi.getNowPlaying({ additional_types: "track,episode" }),
      ],
    );

    let steamData: any = null;
    let spotifyData: any = null;

    let steamError: any = null;
    let spotifyError: any = null;

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
        return NextResponse.json(
          {},
          {
            status: 204,
            headers,
          },
        );
      }

      if (media.currently_playing_type === "ad") {
        return NextResponse.json(
          {},
          {
            status: 204,
            headers,
          },
        );
      }

      if (media.currently_playing_type === "episode") {
        media.item = media.item as EpisodeDto;
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
        media.item = media.item as SongDto;
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
    if (spotifyPromiseResult.status === "rejected") {
      spotifyError = spotifyPromiseResult.reason;
    }
    if (steamPromiseResult.status === "rejected") {
      steamError = steamPromiseResult.reason;
    }

    if (steamError || spotifyError) {
      return NextResponse.json(
        {
          spotify: spotifyData,
          steam: steamData,
          error: {
            spotifyError,
            steamError,
          },
        },
        {
          status: 500,
          headers,
        },
      );
    }

    return NextResponse.json(
      {
        spotify: spotifyData,
        steam: steamData,
      },
      {
        status: 200,
        headers,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        steam: null,
        spotify: null,
        error,
      },
      {
        status: 500,
        headers,
      },
    );
  }
};

export { GET };
