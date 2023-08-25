import { Bets, GameButton, NavBar } from "components";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { bets as betsService, user } from "services";
import gamesService from "services/games";
import { Game, IBets } from "shared/interfaces";
import { getGames } from "store/gameSlice";
import {
  ArrowRight,
  BetsPlayedContainer,
  FiltersContainer,
  FiltersText,
  HomeContainer,
  HomeHeader,
  NewBetLink,
  NoBet,
  RecentGames,
} from "./styles";
import { selectUser, setCredits } from "store/userSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getUser } = user();
  const { listGames } = gamesService();
  const { listBets } = betsService();
  const { isLogged } = useSelector(selectUser);
  const [bets, setBets] = useState<IBets[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<string[]>([]);

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
      toast.error("You must be logged in to see this page", {
        toastId: "loginError1",
      });
    }
    const getUserCredits = async () => {
      try {
        const response = await getUser();
        dispatch(setCredits(response.data.credits));
      } catch (err) {
        console.log(err);
      }
    };
    getUserCredits();
  }, []);

  let config = {};

  if (selectedGame.length > 0 && isLogged) {
    config = {
      params: {
        "type[]": [...selectedGame],
      },
    };
  }

  useEffect(() => {
    listGames()
      .then((res) => {
        setGames(res.data.types);
        dispatch(getGames(res.data));
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    listBets(config)
      .then((res) => {
        setBets(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedGame]);

  const onClickGameButton = (game: Game) => {
    if (selectedGame.includes(game.type)) {
      setSelectedGame(selectedGame.filter((type) => type !== game.type));
    } else {
      setSelectedGame([...selectedGame, game.type]);
    }
  };

  return (
    <HomeContainer>
      <NavBar home />
      <HomeHeader>
        <RecentGames>Recent Games</RecentGames>
        <FiltersContainer>
          <FiltersText>Filters</FiltersText>
          {games.length > 0 ? (
            games.map((game: Game) => {
              const isActive = selectedGame.includes(game.type) ? true : false;
              return (
                <GameButton
                  key={game.id}
                  onClick={() => onClickGameButton(game)}
                  active={isActive}
                  type={game.type}
                  color={game.color}
                />
              );
            })
          ) : (
            <NoBet>No game found, create one first</NoBet>
          )}
        </FiltersContainer>
        <NewBetLink to="/bet">
          New Bet <ArrowRight />
        </NewBetLink>
      </HomeHeader>
      <BetsPlayedContainer>
        {bets.length > 0 ? (
          bets.map((bet: IBets) => {
            return <Bets key={bet.id} data={bet} />;
          })
        ) : (
          <NoBet>No bets yet, make one!</NoBet>
        )}
      </BetsPlayedContainer>
    </HomeContainer>
  );
};

export default Home;
