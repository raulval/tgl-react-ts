import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BetNumbers from "../../components/BetNumbers";
import GameButton from "../../components/GameButton";
import NavBar from "../../components/NavBar";
import { ArrowRight, NoBet } from "../Home/styles";
import {
  AddToCartButton,
  BetContainer,
  Bold,
  ButtonsContainer,
  Cart,
  CartBetsContainer,
  CartContainer,
  CartSaveButton,
  CartTitle,
  CartTotalPrice,
  ChooseGameText,
  ClearGameButton,
  CompleteGameButton,
  FillBetText,
  GameDescription,
  GamesDiv,
  MainContainer,
  MainTitle,
  NumbersContainer,
} from "./styles";

interface Games {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
}

const Bet = () => {
  const { gamesData } = useSelector((state: { games: any }) => state.games);
  const [selectedGame, setSelectedGame] = useState<Games>(gamesData[0]);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const onClickGameButton = (game: Games) => {
    setSelectedGame(game);
  };

  const onClickBetNumber = (e: any) => {
    if (selectedNumbers.length < selectedGame.max_number) {
      const newSelectedNumbers = [
        ...selectedNumbers,
        Number(e.target.value),
      ].sort((a, b) => a - b);
      setSelectedNumbers(newSelectedNumbers);
    } else if (selectedNumbers.includes(Number(e.target.value))) {
      setSelectedNumbers(
        selectedNumbers.filter((number) => number !== Number(e.target.value))
      );
    } else {
      toast.error(`You can only select ${selectedGame.max_number} numbers`);
    }
  };

  console.log(selectedNumbers);

  const onClickCompleteGame = () => {};

  const onClickClearGame = () => {
    setSelectedNumbers([]);
  };

  return (
    <>
      <NavBar />
      <BetContainer>
        <MainContainer>
          <MainTitle>
            <Bold>New bet</Bold> for {selectedGame.type}
          </MainTitle>
          <ChooseGameText>Choose a game</ChooseGameText>
          <GamesDiv>
            {gamesData.length > 0 ? (
              gamesData.map((game: Games) => {
                const isActive = selectedGame.type === game.type ? true : false;
                return (
                  <GameButton
                    key={game.id}
                    active={isActive}
                    onClick={() => onClickGameButton(game)}
                    type={game.type}
                    color={game.color}
                  />
                );
              })
            ) : (
              <NoBet>No game found, create one first</NoBet>
            )}
          </GamesDiv>
          <FillBetText>Fill your bet</FillBetText>
          <GameDescription>{selectedGame.description}</GameDescription>
          <NumbersContainer>
            <BetNumbers
              range={selectedGame.range}
              onClick={onClickBetNumber}
              selectedNumbers={selectedNumbers}
            ></BetNumbers>
          </NumbersContainer>

          <ButtonsContainer>
            <CompleteGameButton onClick={onClickCompleteGame}>
              Complete game
            </CompleteGameButton>
            <ClearGameButton onClick={onClickClearGame}>
              Clear game
            </ClearGameButton>
            <AddToCartButton>
              <MdOutlineShoppingCart />
              Add to cart
            </AddToCartButton>
          </ButtonsContainer>
        </MainContainer>

        <CartContainer>
          <Cart>
            <CartTitle>Cart</CartTitle>
            <CartBetsContainer>No bets yet, make one!</CartBetsContainer>
            <CartTotalPrice>
              <Bold>Cart</Bold> Total: R$ {}
            </CartTotalPrice>
            <CartSaveButton>
              Save <ArrowRight />
            </CartSaveButton>
          </Cart>
        </CartContainer>
      </BetContainer>
    </>
  );
};

export default Bet;
