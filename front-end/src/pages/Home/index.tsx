import { Bets, GameButton, LeagueButton, NavBar, SportBets } from "components";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bets as betsService } from "services";
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
import { selectUser } from "store/userSlice";
import { useGetLeagues, useGetSportBets } from "services/sports";
import { ISportBet, League } from "services/sports/types";
import { setLeagues } from "store/leagueSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { listGames } = gamesService();
  const { listBets } = betsService();
  const { isLogged } = useSelector(selectUser);
  const { data: leaguesData, status: leaguesStatus } = useGetLeagues();
  const [bets, setBets] = useState<IBets[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<string[]>([]);
  const { data: sportBets, refetch: refetchSportBets } =
    useGetSportBets(selectedGame);

  let config = {};

  if (selectedGame.length > 0 && isLogged) {
    config = {
      params: {
        "type[]": [...selectedGame],
      },
    };
  }

  const combinedBets = [...bets, ...(sportBets || [])];

  combinedBets.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB.getTime() - dateA.getTime();
  });

  useEffect(() => {
    if (leaguesStatus === "success") {
      dispatch(setLeagues(leaguesData));
    }
  }, [leaguesStatus]);

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
    refetchSportBets();
  }, [selectedGame]);

  const onClickGameButton = (game: Game) => {
    if (selectedGame.includes(game.type)) {
      setSelectedGame(selectedGame.filter((type) => type !== game.type));
    } else {
      setSelectedGame([...selectedGame, game.type]);
    }
  };

  const onClickLeagueButton = (league: League) => {
    if (selectedGame.includes(league.short_name)) {
      setSelectedGame(
        selectedGame.filter((type) => type !== league.short_name)
      );
    } else {
      setSelectedGame([...selectedGame, league.short_name]);
    }
  };

  return (
    <HomeContainer>
      <NavBar home />
      <HomeHeader>
        <RecentGames>Recent Bets</RecentGames>
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
          {leaguesData && leaguesData.leagues.length > 0
            ? leaguesData.leagues.map((league: League) => {
                const isActive = selectedGame.includes(league.short_name)
                  ? true
                  : false;
                return (
                  <LeagueButton
                    key={league.id}
                    active={isActive}
                    onClick={() => onClickLeagueButton(league)}
                    name={league.name}
                  />
                );
              })
            : undefined}
        </FiltersContainer>
      </HomeHeader>
      <BetsPlayedContainer>
        {combinedBets.length > 0 ? (
          combinedBets.map((item: IBets | ISportBet) => {
            if ("match_id" in item) {
              return (
                <SportBets
                  key={`${item.id}-${item.match_id}`}
                  data={item as ISportBet}
                />
              );
            } else {
              return <Bets key={item.id} data={item as IBets} />;
            }
          })
        ) : (
          <NoBet>No bets yet, make one!</NoBet>
        )}
      </BetsPlayedContainer>
    </HomeContainer>
  );
};

export default Home;
