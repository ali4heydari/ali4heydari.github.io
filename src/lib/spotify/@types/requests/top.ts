export type TimeRange = "short_term" | "medium_term" | "long_term";

export type GetUsersTopItemsRequest = SpotifyPaginatedRequest & {
  time_range?: TimeRange;
};

export interface SpotifyPaginatedRequest {
  limit?: number;
  offset?: number;
}
