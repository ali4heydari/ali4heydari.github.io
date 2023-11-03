export interface GetPlayerSummariesResponse {
  response: Response;
}

export interface Response {
  players: Player[];
}

export enum PersonaState {
  OFFLINE,
  ONLINE,
  BUSY,
  AWAY,
  SNOOZE,
  LOOKING_TO_TRADE,
  LOOKING_TO_PLAY,
}

export enum CommunityVisibilityState {
  PRIVATE = 1,
  PUBLIC = 2,
}

export enum ProfileState {
  NOT_CONFIGURED = 0,
  CONFIGURED = 1,
}

export interface Player {
  avatar: string;
  avatarfull: string;
  avatarhash: string;
  avatarmedium: string;
  communityvisibilitystate: CommunityVisibilityState;
  gameextrainfo: string;
  gameid: string;
  gameserverip: string;
  lastlogoff: number;
  loccityid: number;
  loccountrycode: string;
  locstatecode: string;
  personaname: string;
  personastate: PersonaState;
  personastateflags: number;
  primaryclanid: string;
  profilestate: ProfileState;
  profileurl: string;
  realname: string;
  steamid: string;
  timecreated: number;
}
