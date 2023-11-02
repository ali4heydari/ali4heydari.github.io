type Additional_types = "track" | "episode";

export interface GetCurrentPlayingRequest {
  additional_types?:
    | Additional_types
    | `${Additional_types},${Additional_types}`;
  market?: string;
}
