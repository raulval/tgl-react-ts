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

interface BetsProps {
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
          <BetPrice>R$ {props.price.toFixed(2).replace(".", ",")}</BetPrice>
        </TypePriceWrapper>
      </BetsWrapper>
    </BetsContainer>
  );
};

export default CartBets;
