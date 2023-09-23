import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { useTheme } from "styled-components";

import { useGetLotteryResults, useGetSportResults } from "services/results";
import { Game } from "shared/interfaces";
import { selectGames } from "store/gameSlice";
import { removeAccents } from "shared/utils";
import { selectLeagues } from "store/leagueSlice";
import { League } from "services/sports/types";

import {
  GameButton,
  LeagueButton,
  LotteryResultCard,
  NavBar,
  SportResultCard,
} from "components";

import {
  FiltersContainer,
  FiltersText,
  LastResults,
  ResultContainer,
  ResultsContainer,
  ResultsHeader,
} from "./styles";
import { NoBet } from "pages/Home/styles";
import { ISportResult } from "services/results/types";

const Results = () => {
  const { colors } = useTheme();
  const { gamesData } = useSelector(selectGames);
  const [selectedGame, setSelectedGame] = useState(gamesData.types[0].type);
  const [selectedLeague, setSelectedLeague] = useState("");
  const lotteryName = removeAccents(selectedGame);
  const { leaguesData } = useSelector(selectLeagues);
  const {
    data: lotteryResults,
    isLoading: isLoadingLotteryResults,
    refetch: refetchLotteryResults,
    isRefetching: isRefetchingLotteryResults,
  } = useGetLotteryResults(lotteryName);
  const {
    data: sportResults,
    isLoading: isLoadingSportResults,
    refetch: refetchSportResults,
    isRefetching: isRefetchingSportResults,
  } = useGetSportResults(selectedLeague || "");

  useEffect(() => {
    if (selectedGame) {
      refetchLotteryResults();
    }
    if (selectedLeague) {
      refetchSportResults();
    }
  }, [selectedGame, selectedLeague]);

  const onClickFilterButton = (item: Game | League) => {
    if ("type" in item) {
      setSelectedGame(item.type);
      setSelectedLeague("");
    } else {
      setSelectedLeague(item.short_name);
      setSelectedGame("");
    }
  };

  return (
    <ResultsContainer>
      <NavBar />
      <ResultsHeader>
        <LastResults>Last Results</LastResults>
        <FiltersContainer>
          <FiltersText>Filters</FiltersText>
          {gamesData.types.length > 0 ? (
            gamesData.types.map((game: Game) => {
              const isActive = selectedGame === game.type ? true : false;
              return (
                <GameButton
                  key={game.id}
                  active={isActive}
                  onClick={() => onClickFilterButton(game)}
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
                const isActive =
                  selectedLeague === league.short_name ? true : false;
                return (
                  <LeagueButton
                    key={league.id}
                    active={isActive}
                    onClick={() => onClickFilterButton(league)}
                    name={league.name}
                  />
                );
              })
            : undefined}
        </FiltersContainer>
      </ResultsHeader>
      <ResultContainer>
        {isLoadingLotteryResults ||
        isRefetchingLotteryResults ||
        isLoadingSportResults ||
        isRefetchingSportResults ? (
          <ClipLoader
            color={colors.primary.main}
            loading={true}
            size={40}
            aria-label="Loading Spinner"
          />
        ) : selectedGame ? (
          <LotteryResultCard lotteryResults={lotteryResults} />
        ) : selectedLeague ? (
          sportResults?.map((result: ISportResult) => (
            <SportResultCard sportResult={result} key={result.result.id} />
          ))
        ) : null}
      </ResultContainer>
    </ResultsContainer>
  );
};

export default Results;
