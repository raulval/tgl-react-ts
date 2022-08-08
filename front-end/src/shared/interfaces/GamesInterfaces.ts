export interface IListGamesResponse {
  data: GameData;
}

export interface GameData {
  min_cart_value: number;
  types: Game[];
}

export interface Game {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
}
