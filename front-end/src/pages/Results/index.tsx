import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { useTheme } from "styled-components";

import { useGetLotteryResults } from "services/results";
import { Game } from "shared/interfaces";
import { selectGames } from "store/gameSlice";
import { removeAccents } from "shared/utils";

import { GameButton, NavBar } from "components";

import {
  FiltersContainer,
  FiltersText,
  LastResults,
  ResultBody,
  ResultCard,
  ResultContainer,
  ResultLotteryContestAndDate,
  ResultLotteryHeader,
  ResultLotteryName,
  ResultLotteryNumber,
  ResultLotteryNumbersContainer,
  ResultLotteryPrize,
  ResultLotterySeparator,
  ResultLotteryWinnersTable,
  ResultsContainer,
  ResultsHeader,
  TableCell,
  TableHeader,
  TableRow,
} from "./styles";
import { NoBet } from "pages/Home/styles";
import { Prize } from "services/results/types";
import moment from "moment";

const Results = () => {
  const { colors } = useTheme();
  const { gamesData } = useSelector(selectGames);
  const [selectedGame, setSelectedGame] = useState(gamesData.types[0].type);
  const lotteryName = removeAccents(selectedGame);
  const {
    data: lotteryResults,
    isLoading: isLoadingLotteryResults,
    refetch: refetchLotteryResults,
    isRefetching: isRefetchingLotteryResults,
  } = useGetLotteryResults(lotteryName);

  useEffect(() => {
    refetchLotteryResults();
  }, [selectedGame]);

  const onClickFilterButton = (game: Game) => {
    setSelectedGame(game.type);
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
        </FiltersContainer>
      </ResultsHeader>
      <ResultContainer>
        {isLoadingLotteryResults || isRefetchingLotteryResults ? (
          <ClipLoader
            color={colors.primary.main}
            loading={true}
            size={40}
            aria-label="Loading Spinner"
          />
        ) : (
          <ResultCard>
            <ResultLotteryHeader
              style={{ backgroundColor: lotteryResults?.lotteryColor }}
            >
              <ResultLotteryContestAndDate>
                Contest {lotteryResults?.contest} |{" "}
                {moment(lotteryResults?.date, "DD/MM/YYYY").format(
                  "MM/DD/YYYY"
                )}
              </ResultLotteryContestAndDate>
              <ResultLotteryName>{lotteryResults?.name}</ResultLotteryName>
              <ResultLotteryPrize>
                {lotteryResults?.totalPrize} Millions
              </ResultLotteryPrize>
            </ResultLotteryHeader>
            <ResultBody>
              <ResultLotteryNumbersContainer>
                {lotteryResults?.numbers.map((number: number) => (
                  <ResultLotteryNumber
                    key={number}
                    style={{ backgroundColor: lotteryResults.lotteryColor }}
                  >
                    {number}
                  </ResultLotteryNumber>
                ))}
              </ResultLotteryNumbersContainer>
              <ResultLotterySeparator></ResultLotterySeparator>
              <ResultLotteryWinnersTable>
                <thead>
                  <TableRow>
                    <TableHeader
                      style={{
                        backgroundColor: lotteryResults?.lotteryColor,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                      }}
                    >
                      Scores
                    </TableHeader>
                    <TableHeader
                      style={{ backgroundColor: lotteryResults?.lotteryColor }}
                    >
                      Winners
                    </TableHeader>
                    <TableHeader
                      style={{
                        backgroundColor: lotteryResults?.lotteryColor,
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                      }}
                    >
                      Prizes
                    </TableHeader>
                  </TableRow>
                </thead>
                <tbody>
                  {lotteryResults?.prizes.map((winner: Prize) => (
                    <TableRow key={winner.scores}>
                      <TableCell>{winner.scores}</TableCell>
                      <TableCell>{winner.winners}</TableCell>
                      <TableCell>{winner.prize}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </ResultLotteryWinnersTable>
            </ResultBody>
          </ResultCard>
        )}
      </ResultContainer>
    </ResultsContainer>
  );
};

export default Results;
