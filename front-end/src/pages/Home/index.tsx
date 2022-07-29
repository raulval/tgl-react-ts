import Games from "../../components/Bets";
import GameButton from "../../components/GameButton";
import NavBar from "../../components/NavBar";
import {
  ArrowRight,
  BetsPlayedContainer,
  FiltersContainer,
  FiltersText,
  HomeContainer,
  HomeHeader,
  NewBetLink,
  RecentGames,
} from "./styles";

const Home = () => {
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
        <Games />
      </BetsPlayedContainer>
    </HomeContainer>
  );
};

export default Home;
