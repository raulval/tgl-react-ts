import React, { ChangeEvent } from "react";
import {
  MatchesCard,
  CardContent,
  CardDate,
  CardHeader,
  CardOddsButton,
  CardOddsContainer,
  CardOddsTeams,
  CardParticipants,
  CardTeamsContainer,
  CardAmountInput,
  CardAmountContainer,
  CardEarningsContainer,
  CardEarnings,
  CardSaveBet,
  ArrowRight,
  CreditsIcons,
  LiveCardContainer,
  LiveCardTitle,
} from "./styles";
import { ClipLoader } from "react-spinners";
import { MatchBetCardProps } from "./types";
import { useTheme } from "styled-components";
import moment from "moment";
import { NoBet } from "pages/Home/styles";

export const MatchBetCard: React.FC<MatchBetCardProps> = ({
  matchesData,
  isLoadingMatches,
  isRefetching,
  selectedOdd,
  onClickOddButton,
  selectedAmount,
  setSelectedAmount,
  onClickSaveBet,
}) => {
  const { colors } = useTheme();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setSelectedAmount(undefined);
    } else {
      const sanitizedValue = inputValue.replace(/^0+/, "");
      setSelectedAmount(Number(sanitizedValue));
    }
  };

  const renderOddButton = (
    isActive: boolean,
    odd: number,
    picked: string,
    live: boolean,
    matchName: string
  ) => (
    <CardOddsButton
      onClick={() =>
        onClickOddButton(
          isActive
            ? undefined
            : {
                picked: picked,
                odd: odd,
                matchName: matchName,
              }
        )
      }
      active={isActive}
      disabled={live}
    >
      {odd}
    </CardOddsButton>
  );

  return (
    <>
      {isLoadingMatches || isRefetching ? (
        <ClipLoader
          color={colors.primary.main}
          loading={true}
          size={40}
          aria-label="Loading Spinner"
        />
      ) : matchesData && matchesData.matches.length > 0 ? (
        matchesData.matches.map((match) => {
          const isHomeActive =
            selectedOdd?.odd === match.odds.home &&
            selectedOdd.matchName === match.name
              ? true
              : false;
          const isDrawActive =
            selectedOdd?.odd === match.odds.draw &&
            selectedOdd.matchName === match.name
              ? true
              : false;
          const isGuestActive =
            selectedOdd?.odd === match.odds.guest &&
            selectedOdd.matchName === match.name
              ? true
              : false;

          const live = match.start_time <= new Date().getTime();
          const earnings =
            selectedAmount && selectedOdd && selectedAmount * selectedOdd?.odd;

          return (
            <MatchesCard key={match.id}>
              <CardHeader>
                <CardDate>
                  <p>{moment(match.start_time).format("MM/DD/YYYY - HH:mm")}</p>
                </CardDate>
                <CardTeamsContainer>
                  <CardParticipants>{match.participants.home}</CardParticipants>
                  <CardParticipants>X</CardParticipants>
                  <CardParticipants>
                    {match.participants.guest}
                  </CardParticipants>
                </CardTeamsContainer>
              </CardHeader>

              <CardContent>
                <CardOddsContainer>
                  <CardOddsTeams>1</CardOddsTeams>
                  <CardOddsTeams>Draw</CardOddsTeams>
                  <CardOddsTeams>2</CardOddsTeams>
                  {renderOddButton(
                    isHomeActive,
                    match.odds.home,
                    match.participants.home,
                    live,
                    match.name
                  )}
                  {renderOddButton(
                    isDrawActive,
                    match.odds.draw,
                    "draw",
                    live,
                    match.name
                  )}
                  {renderOddButton(
                    isGuestActive,
                    match.odds.guest,
                    match.participants.guest,
                    live,
                    match.name
                  )}
                </CardOddsContainer>
                {live && (
                  <LiveCardContainer>
                    <LiveCardTitle>Live</LiveCardTitle>
                  </LiveCardContainer>
                )}
                <CardAmountContainer>
                  {isHomeActive || isDrawActive || isGuestActive ? (
                    <>
                      <CardAmountInput
                        type="number"
                        min="1"
                        step="1"
                        required
                        disabled={live}
                        placeholder="Amount"
                        value={selectedAmount}
                        onChange={handleInputChange}
                      />
                      {selectedAmount && !live && selectedAmount > 0 ? (
                        <CardSaveBet
                          onClick={() => onClickSaveBet(match)}
                          disabled={live}
                        >
                          Save Bet
                          <ArrowRight />
                        </CardSaveBet>
                      ) : null}
                    </>
                  ) : null}
                </CardAmountContainer>
                {(isHomeActive || isDrawActive || isGuestActive) &&
                selectedAmount &&
                selectedAmount > 0 ? (
                  <CardEarningsContainer>
                    <CardEarnings>
                      Possible earnings: {earnings?.toFixed(2)}
                      <CreditsIcons size={14} color={colors.primary.text} />
                    </CardEarnings>
                  </CardEarningsContainer>
                ) : null}
              </CardContent>
            </MatchesCard>
          );
        })
      ) : (
        <NoBet>Something went wrong, try again later</NoBet>
      )}
    </>
  );
};
