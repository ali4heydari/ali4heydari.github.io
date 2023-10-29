export type TimeRange = "short_term" | "medium_term" | "long_term";

export interface GetUsersTopItemsRequest {
  limit?: number;
  offset?: number;
  time_range?: TimeRange;
}
