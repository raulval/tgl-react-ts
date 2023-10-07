import React, { ChangeEvent } from "react";
import {
  MatchesCard,
  CardContent,
  CardDate,
  CardHeader,
  CardParticipants,
  CardTeamsContainer,
  CardBettedContainer,
  CardEarnings,
  CreditsIcons,
  CardScore,
  CardX,
  CardWinner,
  CardLoser,
} from "./styles";
import { SportResultCardProps } from "./types";
import { useTheme } from "styled-components";
import moment from "moment";

export const SportResultCard: React.FC<SportResultCardProps> = ({
  sportResult,
}) => {
  const { result, sportBet } = sportResult;
  const { colors } = useTheme();
  const winner =
    sportBet &&
    ((result.winner === "HOME_TEAM" &&
      sportBet.picked === result.match.participants.home) ||
      (result.winner === "AWAY_TEAM" &&
        sportBet.picked === result.match.participants.guest) ||
      (result.winner === "DRAW" && sportBet.picked === "draw"));

  return (
    <MatchesCard>
      <CardHeader>
        <CardDate>
          <p>{moment(result.started_date).format("L - HH:mm")}</p>
        </CardDate>
      </CardHeader>

      <CardContent>
        <CardTeamsContainer data-testid="match-teams">
          <CardParticipants>{result.participants.home}</CardParticipants>
          <CardScore>{result.score.home}</CardScore>
          <CardX>x</CardX>
          <CardScore>{result.score.guest}</CardScore>
          <CardParticipants>{result.participants.guest}</CardParticipants>
        </CardTeamsContainer>
        {sportBet && (
          <CardBettedContainer>
            {winner ? (
              <CardWinner>You Won</CardWinner>
            ) : (
              <CardLoser>You Lost</CardLoser>
            )}
            <CardEarnings>
              Your bet:{"  "}
              <strong style={{ textTransform: "capitalize" }}>
                {sportBet.picked} - {sportBet.amount.toFixed(2)}
                <CreditsIcons size={14} color={colors.primary.text} />
              </strong>
            </CardEarnings>
            {winner && (
              <CardEarnings>
                Credits earned: <strong>{sportBet?.earning.toFixed(2)}</strong>
                <CreditsIcons size={14} color={colors.primary.text} />
              </CardEarnings>
            )}
          </CardBettedContainer>
        )}
      </CardContent>
    </MatchesCard>
  );
};
