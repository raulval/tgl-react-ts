import { ICartBets } from "shared/interfaces";

export const cartCurrencyFormat = (items: ICartBets[]) => {
  return items
    .reduce((acc, curr) => acc + curr.price, 0)
    .toFixed(2)
    .replace(".", ",");
};

export const currencyFormat = (value: number) => {
  return value.toFixed(2).replace(".", ",");
};

export const removeAccents = (string: string) => {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
