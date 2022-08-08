import { api } from "services/api";
import { IListGamesResponse } from "shared/interfaces";

import { IGames } from "./interfaces";

const gamesService = (): IGames => {
  const listGames = async (): Promise<IListGamesResponse> => {
    return api.get("cart_games");
  };

  return { listGames };
};

export default gamesService;
