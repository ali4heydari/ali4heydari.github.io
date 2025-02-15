import type {
  Artist,
  ArtistDetailed,
  Context,
  Device,
  ExternalIds,
  ExternalUrls,
  Image,
  Restrictions,
} from "./shared";

export interface GetCurrentlyPlayingResponse {
  actions: Actions;
  context: Context;
  currently_playing_type: "track" | "episode" | "ad";
  device: Device;
  is_playing: boolean;
  item: SongDto | EpisodeDto;
  progress_ms: number;
  repeat_state: string;
  shuffle_state: boolean;
  timestamp: number;
}

export interface SongDto {
  album: AlbumDetailed;
  artists: ArtistDetailed[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  linked_from: LinkedFrom;
  name: string;
  popularity: number;
  preview_url: string;
  restrictions: Restrictions;
  track_number: number;
  type: string;
  uri: string;
}

export interface EpisodeDto {
  audio_preview_url: string;
  description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  html_description: string;
  id: string;
  images: Image[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  language: string;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: string;
  show: Show;
  type: string;
  uri: string;
}

export interface Show {
  available_markets: string[];
  copyrights: unknown[];
  description: string;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  html_description: string;
  id: string;
  images: Image[];
  is_externally_hosted: boolean;
  languages: string[];
  media_type: string;
  name: string;
  publisher: string;
  total_episodes: number;
  type: string;
  uri: string;
}

export interface AlbumDetailed {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: Restrictions;
  total_tracks: number;
  type: string;
  uri: string;
}

export type LinkedFrom = unknown;

export interface Actions {
  interrupting_playback: boolean;
  pausing: boolean;
  resuming: boolean;
  seeking: boolean;
  skipping_next: boolean;
  skipping_prev: boolean;
  toggling_repeat_context: boolean;
  toggling_repeat_track: boolean;
  toggling_shuffle: boolean;
  transferring_playback: boolean;
}
