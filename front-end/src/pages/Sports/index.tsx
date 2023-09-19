import { LeagueButton, MatchBetCard, NavBar } from "components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bets } from "services";
import Swal from "sweetalert2";
import { NoBet } from "../Home/styles";

import {
  BetContainer,
  Bold,
  ChooseLeagueText,
  LeaguesDiv,
  MainContainer,
  MainTitle,
  MatchesContainer,
} from "./styles";
import {
  useCreateSportBet,
  useGetLeagues,
  useGetMatches,
} from "services/sports";
import { IMatch, League } from "services/sports/types";
import { selectLeagues } from "store/leagueSlice";
import { useTheme } from "styled-components";
import { selectUser, setCredits } from "store/userSlice";

const Sports = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const { isLogged } = useSelector(selectUser);
  const { leaguesData: leaguesRedux } = useSelector(selectLeagues);
  const { data: leaguesData } = useGetLeagues();
  const { mutateAsync } = useCreateSportBet();
  const [selectedLeague, setSelectedLeague] = useState<League>(
    leaguesRedux.leagues[0]
  );
  const [selectedAmount, setSelectedAmount] = useState<number | undefined>();
  const [selectedOdd, setSelectedOdd] = useState<
    | {
        picked: string;
        odd: number;
        matchName: string;
      }
    | undefined
  >();
  const {
    data: matchesData,
    isLoading: isLoadingMatches,
    isError: isErrorMatches,
    error: errorMatches,
    refetch: refetchMatches,
    isRefetching,
  } = useGetMatches(selectedLeague.short_name);

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
      toast.error("You must be logged in to see this page", {
        toastId: "loginError1",
      });
    }
    if (isErrorMatches) {
      toast.error(errorMatches.message, {
        toastId: "loginError2",
      });
    }
  }, [isLogged]);

  useEffect(() => {
    refetchMatches();
  }, [selectedLeague]);

  const onClickLeagueButton = (league: League) => {
    setSelectedLeague(league);
  };

  const onClickOddButton = (picked?: {
    picked: string;
    odd: number;
    matchName: string;
  }) => {
    setSelectedOdd(picked);
  };

  const onClickSaveBet = (match: IMatch) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You will bet ${selectedAmount} ${
        selectedAmount! > 1 ? "credits" : "credit"
      } on ${selectedOdd?.picked} for ${match.name} at ${selectedLeague?.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: colors.secundary.main,
      cancelButtonColor: "#d33",
      confirmButtonText: "Bet!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await toast.promise(
            mutateAsync({
              match_id: match.id,
              amount: selectedAmount!,
              odd: selectedOdd?.odd!,
              picked: selectedOdd?.picked!,
            }),
            {
              pending: "Saving Bet...",
              success: "Sport bet saved successfully",
            }
          );
          dispatch(setCredits(response.credits));
          setSelectedAmount(undefined);
          setSelectedOdd(undefined);
        } catch (error: any) {
          console.log(error.response.data);
          toast.error(
            error.response.data.message
              ? error.response.data.message
              : "Something went wrong!"
          );
        }
      }
    });
  };

  return (
    <>
      <NavBar />
      <BetContainer>
        <MainContainer>
          <MainTitle>
            <Bold>New bet</Bold> for {selectedLeague?.name}
          </MainTitle>
          <ChooseLeagueText>Choose a league</ChooseLeagueText>
          <LeaguesDiv>
            {leaguesData && leaguesData.leagues.length > 0 ? (
              leaguesData.leagues.map((league: League) => {
                const isActive =
                  selectedLeague?.short_name === league.short_name
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
            ) : (
              <NoBet>No league found, create one first</NoBet>
            )}
          </LeaguesDiv>
          <MatchesContainer>
            <MatchBetCard
              matchesData={matchesData}
              isLoadingMatches={isLoadingMatches}
              isRefetching={isRefetching}
              selectedOdd={selectedOdd}
              onClickOddButton={onClickOddButton}
              onClickSaveBet={onClickSaveBet}
              selectedAmount={selectedAmount}
              setSelectedAmount={setSelectedAmount}
            />
          </MatchesContainer>
        </MainContainer>
      </BetContainer>
    </>
  );
};

export default Sports;
