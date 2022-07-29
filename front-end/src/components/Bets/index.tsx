import {
  BetDateAndPrice,
  BetGameType,
  BetNumbers,
  BetsContainer,
  BetsWrapper,
  Separator,
} from "./styles";

type GameData = {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
};

interface BetsProps {
  data?: GameData;
}

const Bets = (props: BetsProps) => {
  return (
    <BetsContainer>
      <Separator />
      <BetsWrapper>
        <BetNumbers>01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25</BetNumbers>
        <BetDateAndPrice>30/11/2020 - (R$ 2,50)</BetDateAndPrice>
        <BetGameType>Lotofácil</BetGameType>
      </BetsWrapper>
    </BetsContainer>
  );
};

export default Bets;
