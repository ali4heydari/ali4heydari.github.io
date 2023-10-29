export interface GetCurrentlyPlaying {
  actions: Actions;
  context: Context;
  currently_playing_type: string;
  device: Device;
  is_playing: boolean;
  item: SongDto | EpisodeDto;
  progress_ms: number;
  repeat_state: string;
  shuffle_state: boolean;
  timestamp: number;
}

export interface Device {
  id: string;
  is_active: boolean;
  is_private_session: boolean;
  is_restricted: boolean;
  name: string;
  supports_volume: boolean;
  type: string;
  volume_percent: number;
}

export interface Context {
  external_urls: ExternalUrls;
  href: string;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface SongDto {
  album: Album;
  artists: Artist2[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls5;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  linked_from: LinkedFrom;
  name: string;
  popularity: number;
  preview_url: string;
  restrictions: Restrictions2;
  track_number: number;
  type: string;
  uri: string;
}

export interface EpisodeDto {
  audio_preview_url: string;
  description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls2;
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
  copyrights: any[];
  description: string;
  explicit: boolean;
  external_urls: ExternalUrls3;
  href: string;
  html_description: string;
  id: string;
  images: Image2[];
  is_externally_hosted: boolean;
  languages: string[];
  media_type: string;
  name: string;
  publisher: string;
  total_episodes: number;
  type: string;
  uri: string;
}

export interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls2;
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

export interface ExternalUrls2 {
  spotify: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Restrictions {
  reason: string;
}

export interface Artist {
  external_urls: ExternalUrls3;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalUrls3 {
  spotify: string;
}

export interface Artist2 {
  external_urls: ExternalUrls4;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image2[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface ExternalUrls4 {
  spotify: string;
}

export interface Followers {
  href: string;
  total: number;
}

export interface Image2 {
  height: number;
  url: string;
  width: number;
}

export interface ExternalIds {
  ean: string;
  isrc: string;
  upc: string;
}

export interface ExternalUrls5 {
  spotify: string;
}

export type LinkedFrom = unknown;

export interface Restrictions2 {
  reason: string;
}

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
