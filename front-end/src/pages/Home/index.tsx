import { useEffect, useState } from "react";
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

const Home = () => {
  const [bets, setBets] = useState([]);
  const token =
    "MQ.XNbjj7Gpeh3cTITtnyWC9o1sRNQO0wO3vgHa5C2yKg6Jy4-LRFNVT6oCtUim";

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    api
      .get("bet/all-bets", config)
      .then((res) => {
        setBets(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.errors[0].message);
      });
  }, []);

  return (
    <HomeContainer>
      <NavBar home />
      <HomeHeader>
        <RecentGames>Recent Games</RecentGames>
        <FiltersContainer>
          <FiltersText>Filters</FiltersText>
          <GameButton title="Test" />
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
