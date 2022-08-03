import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
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

  const onClickGameButton = (game: Games) => {
    setSelectedGame(game);
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
            <BetNumbers range={selectedGame.range}></BetNumbers>
          </NumbersContainer>

          <ButtonsContainer>
            <CompleteGameButton>Complete game</CompleteGameButton>
            <ClearGameButton>Clear game</ClearGameButton>
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
