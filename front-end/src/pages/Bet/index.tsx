import {
  BetNumbers,
  CartBets,
  DeleteModal,
  GameButton,
  NavBar,
} from "components";
import { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bets } from "services";
import { Game, ICartBets } from "shared/interfaces";
import { cartCurrencyFormat } from "shared/utils";
import { setBets } from "store/betSlice";
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

const Bet = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { newBet } = bets();
  const { gamesData } = useSelector((state: any) => state.games);
  const { isLogged } = useSelector((state: any) => state.user);
  const [selectedGame, setSelectedGame] = useState<Game>(gamesData.types[0]);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [cartBets, setCartBets] = useState<ICartBets[]>([]);
  const [selectedBet, setSelectedBet] = useState<ICartBets | undefined>();
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

  const onClickGameButton = (game: Game) => {
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
      toast.error(
        `You must select more ${
          selectedGame.max_number - selectedNumbers.length
        } numbers`
      );
    }
  };

  const onDeleteBet = (bet: ICartBets) => {
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
      const response = await toast.promise(newBet(betData), {
        pending: "Saving bets...",
        success: "Bets saved successfully",
      });
      setCartBets([]);
      navigate("/home");
      dispatch(setBets(response.bet));
    } catch (error: any) {
      console.log(error.response.data);

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
            {gamesData.types.length > 0 ? (
              gamesData.types.map((game: Game) => {
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
                cartBets.map((bet: ICartBets) => {
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
                <NoBet style={{ marginLeft: "20px" }}>
                  No bet found, add one first
                </NoBet>
              )}
            </CartBetsContainer>
            <CartTotalPrice>
              <Bold>Cart</Bold> Total:{" "}
              {cartBets.length > 0 ? cartCurrencyFormat(cartBets) : "0,00"}
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
