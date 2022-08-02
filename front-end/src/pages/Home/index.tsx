import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Bets from "../../components/Bets";
import GameButton from "../../components/GameButton";
import NavBar from "../../components/NavBar";
import { api } from "../../services/api";
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

interface Bets {
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

interface Games {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
}

const Home = () => {
  const navigate = useNavigate();
  const [bets, setBets] = useState([]);
  const [games, setGames] = useState([]);
  const [gameType, setGameType] = useState<string | null>();
  const { isLogged, userData } = useSelector((state: any) => state.user);

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
      toast.error("You must be logged in to see this page", {
        toastId: "loginError1",
      });
    }
  }, []);

  let config: {};

  if (gameType && isLogged) {
    config = {
      headers: { Authorization: `Bearer ${userData.token.token}` },
      params: { "type[]": `${gameType}` },
    };
  } else if (isLogged) {
    config = {
      headers: { Authorization: `Bearer ${userData.token.token}` },
    };
  }

  useEffect(() => {
    api
      .get("cart_games")
      .then((res) => {
        setGames(res.data.types);
      })
      .catch((err) => {});
  }, [isLogged]);

  useEffect(() => {
    api
      .get("bet/all-bets", config)
      .then((res) => {
        setBets(res.data);
      })
      .catch((err) => {});
  }, [gameType]);

  return (
    <HomeContainer>
      <NavBar home />
      <HomeHeader>
        <RecentGames>Recent Games</RecentGames>
        <FiltersContainer>
          <FiltersText>Filters</FiltersText>
          {games.length > 0 ? (
            games.map((game: Games) => {
              return (
                <GameButton
                  key={game.id}
                  onFocus={() => setGameType(game.type)}
                  onBlur={() => setGameType(null)}
                  type={game.type}
                  color={game.color}
                />
              );
            })
          ) : (
            <NoBet>No game found, create one first</NoBet>
          )}
        </FiltersContainer>
        <NewBetLink to="/new-bet">
          New Bet <ArrowRight />
        </NewBetLink>
      </HomeHeader>
      <BetsPlayedContainer>
        {bets.length > 0 ? (
          bets.map((bet: Bets) => {
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
