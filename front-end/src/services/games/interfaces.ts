import { IListGamesResponse } from "shared/interfaces";

export interface IGames {
  listGames: () => Promise<IListGamesResponse>;
}
