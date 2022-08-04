import { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BetNumbers from "../../components/BetNumbers";
import CartBets from "../../components/CartBets";
import DeleteModal from "../../components/DeleteModal";
import GameButton from "../../components/GameButton";
import NavBar from "../../components/NavBar";
import { api } from "../../services/api";
import { setBets } from "../../store/betSlice";
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

interface CartBets {
  game_id: number;
  numbers: number[];
  color: string;
  type: string;
  price: number;
}

const Bet = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { gamesData } = useSelector((state: { games: any }) => state.games);
  const { isLogged, userData } = useSelector((state: any) => state.user);
  const [selectedGame, setSelectedGame] = useState<Games>(gamesData[0]);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [cartBets, setCartBets] = useState<CartBets[]>([]);
  const [selectedBet, setSelectedBet] = useState<CartBets | undefined>();
  const [modalShow, setModalShow] = useState<boolean>(false);

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
      toast.error("You must be logged in to see this page", {
        toastId: "loginError1",
      });
    }
  }),
    [isLogged];

  const config = {
    headers: { Authorization: `Bearer ${userData.token.token}` },
  };

  const onClickGameButton = (game: Games) => {
    setSelectedGame(game);
  };

  const onClickBetNumber = (e: any) => {
    if (selectedNumbers.length < selectedGame.max_number) {
      if (selectedNumbers.includes(Number(e.target.value))) {
        setSelectedNumbers(
          selectedNumbers.filter((number) => number !== Number(e.target.value))
        );
      } else {
        const newSelectedNumbers = [
          ...selectedNumbers,
          Number(e.target.value),
        ].sort((a, b) => a - b);
        setSelectedNumbers(newSelectedNumbers);
      }
    } else if (selectedNumbers.length === selectedGame.max_number) {
      if (selectedNumbers.includes(Number(e.target.value))) {
        setSelectedNumbers(
          selectedNumbers.filter((number) => number !== Number(e.target.value))
        );
      } else {
        toast.error(`You can only select ${selectedGame.max_number} numbers`);
      }
    }
  };

  const onClickCompleteGame = () => {
    let choosenNumbers: number[] = selectedNumbers;
    const generatesRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * selectedGame.range) + 1;
      if (choosenNumbers.includes(randomNumber)) {
        generatesRandomNumber();
      } else {
        choosenNumbers.push(randomNumber);
      }
    };
    while (choosenNumbers.length < selectedGame.max_number) {
      generatesRandomNumber();
    }
    setSelectedNumbers([...choosenNumbers.sort((a, b) => a - b)]);
  };

  const onClickClearGame = () => {
    setSelectedNumbers([]);
  };

  const onClickAddToCart = () => {
    if (selectedNumbers.length === selectedGame.max_number) {
      const addToCartData = {
        game_id: selectedGame.id,
        numbers: selectedNumbers,
        color: selectedGame.color,
        type: selectedGame.type,
        price: selectedGame.price,
      };
      setCartBets([...cartBets, addToCartData]);
      setSelectedNumbers([]);
    } else {
      toast.error(`You must select ${selectedGame.max_number} numbers`);
    }
  };

  const onDeleteBet = (bet: CartBets) => {
    setModalShow(true);
    setSelectedBet(bet);
  };

  const onClickSaveBets = async () => {
    const betData = {
      games: cartBets.map((bet) => {
        return {
          game_id: bet.game_id,
          numbers: bet.numbers,
        };
      }),
    };
    try {
      const response = await toast.promise(
        api.post("bet/new-bet", betData, config),
        {
          pending: "Saving bets...",
          success: "Bets saved successfully",
        }
      );
      setCartBets([]);
      dispatch(setBets(response.data));
      navigate("/home");
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <NavBar />
      {modalShow && (
        <DeleteModal
          setClose={() => setModalShow(false)}
          deleteBet={() =>
            setCartBets(cartBets.filter((cart) => cart !== selectedBet))
          }
          type={selectedBet?.type}
          numbers={selectedBet?.numbers}
        />
      )}
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
            <AddToCartButton onClick={onClickAddToCart}>
              <MdOutlineShoppingCart />
              Add to cart
            </AddToCartButton>
          </ButtonsContainer>
        </MainContainer>

        <CartContainer>
          <Cart>
            <CartTitle>Cart</CartTitle>
            <CartBetsContainer>
              {cartBets.length > 0 ? (
                cartBets.map((bet: CartBets) => {
                  return (
                    <CartBets
                      key={bet.numbers.toString()}
                      onDelete={() => onDeleteBet(bet)}
                      game_id={bet.game_id}
                      numbers={bet.numbers}
                      color={bet.color}
                      type={bet.type}
                      price={bet.price}
                    />
                  );
                })
              ) : (
                <NoBet>No bet found, add one first</NoBet>
              )}
            </CartBetsContainer>
            <CartTotalPrice>
              <Bold>Cart</Bold> Total: R${" "}
              {cartBets.length > 0
                ? cartBets
                    .reduce((acc, curr) => acc + curr.price, 0)
                    .toFixed(2)
                    .replace(".", ",")
                : "0,00"}
            </CartTotalPrice>
            <CartSaveButton onClick={onClickSaveBets}>
              Save <ArrowRight />
            </CartSaveButton>
          </Cart>
        </CartContainer>
      </BetContainer>
    </>
  );
};

export default Bet;
