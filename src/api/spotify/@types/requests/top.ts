export type TimeRange = "short_term" | "medium_term" | "long_term";

export type GetUsersTopItemsRequest = {
  time_range?: TimeRange;
  offset?: number;
  limit?: number;
};
