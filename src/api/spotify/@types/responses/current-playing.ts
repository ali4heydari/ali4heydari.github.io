export interface GetCurrentlyPlaying {
  device: Device;
  repeat_state: string;
  shuffle_state: boolean;
  context: Context;
  timestamp: number;
  progress_ms: number;
  is_playing: boolean;
  item: SongDto | EpisodeDto;
  currently_playing_type: string;
  actions: Actions;
}

export interface Device {
  id: string;
  is_active: boolean;
  is_private_session: boolean;
  is_restricted: boolean;
  name: string;
  type: string;
  volume_percent: number;
  supports_volume: boolean;
}

export interface Context {
  type: string;
  href: string;
  external_urls: ExternalUrls;
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
  is_playable: boolean;
  linked_from: LinkedFrom;
  restrictions: Restrictions2;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

export interface EpisodeDto {
  audio_preview_url: string;
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls2;
  href: string;
  id: string;
  images: Image[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  language: string;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  uri: string;
  show: Show;
}

export interface Show {
  available_markets: string[];
  copyrights: any[];
  description: string;
  html_description: string;
  explicit: boolean;
  external_urls: ExternalUrls3;
  href: string;
  id: string;
  images: Image2[];
  is_externally_hosted: boolean;
  languages: string[];
  media_type: string;
  name: string;
  publisher: string;
  type: string;
  uri: string;
  total_episodes: number;
}

export interface Album {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls2;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: Restrictions;
  type: string;
  uri: string;
  artists: Artist[];
}

export interface ExternalUrls2 {
  spotify: string;
}

export interface Image {
  url: string;
  height: number;
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
  url: string;
  height: number;
  width: number;
}

export interface ExternalIds {
  isrc: string;
  ean: string;
  upc: string;
}

export interface ExternalUrls5 {
  spotify: string;
}

export interface LinkedFrom {}

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
  toggling_shuffle: boolean;
  toggling_repeat_track: boolean;
  transferring_playback: boolean;
}
