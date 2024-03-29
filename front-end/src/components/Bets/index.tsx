import moment from "moment";
import { currencyFormat } from "shared/utils";
import {
  BetDateAndPrice,
  BetGameType,
  BetNumbers,
  BetsContainer,
  BetsWrapper,
  Separator,
} from "./styles";
import { FaCoins } from "react-icons/fa";
import { useTheme } from "styled-components";

interface GameData {
  id: number;
  user_id: number;
  game_id: number;
  choosen_numbers: string;
  price: number;
  created_at: Date;
  type: {
    id: number;
    type: string;
    color: string;
  };
}

interface BetsProps {
  data: GameData;
}

const Bets = (props: BetsProps) => {
  const { colors } = useTheme();
  return (
    <BetsContainer>
      <Separator color={props.data.type.color} />
      <BetsWrapper>
        <BetNumbers>{props.data.choosen_numbers}</BetNumbers>
        <BetDateAndPrice>
          {moment(props.data.created_at).format("L")} - (
          {currencyFormat(props.data.price)}
          <FaCoins
            size={13}
            color={colors.secundary.text}
            style={{ marginLeft: "5px" }}
          />
          )
        </BetDateAndPrice>
        <BetGameType color={props.data.type.color}>
          {props.data.type.type}
        </BetGameType>
      </BetsWrapper>
    </BetsContainer>
  );
};

export default Bets;
