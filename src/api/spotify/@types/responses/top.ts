export interface GetUsersTopItemsResponse<TItem extends ArtistDto | TrackDto> {
  href: string;
  items: TItem[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface ArtistDto {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface TrackDto {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url?: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Album {
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
  total_tracks: number;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface ExternalIds {
  isrc: string;
}

export interface Followers {
  href: string;
  total: number;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}
