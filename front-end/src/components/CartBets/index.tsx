import {
  BetGameType,
  BetNumbers,
  BetPrice,
  BetsContainer,
  BetsWrapper,
  DeleteBetButton,
  Separator,
  TypePriceWrapper,
} from "./styles";

import { IoTrashOutline } from "react-icons/io5";
import { currencyFormat } from "shared/utils";

interface BetsProps {
  game_id: number;
  numbers: number[];
  color: string;
  type: string;
  price: number;
  onDelete: () => void;
}

const CartBets = (props: BetsProps) => {
  return (
    <BetsContainer>
      <DeleteBetButton onClick={props.onDelete}>
        <IoTrashOutline />
      </DeleteBetButton>
      <Separator color={props.color} />
      <BetsWrapper>
        <BetNumbers>{props.numbers.toString()}</BetNumbers>
        <TypePriceWrapper>
          <BetGameType color={props.color}>{props.type}</BetGameType>
          <BetPrice>{currencyFormat(props.price)}</BetPrice>
        </TypePriceWrapper>
      </BetsWrapper>
    </BetsContainer>
  );
};

export default CartBets;
