import { FaCoins } from "react-icons/fa";
import { MdEast } from "react-icons/md";
import styled from "styled-components";

export const MatchesCard = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  min-height: 130px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  margin-bottom: 10px;
  padding: 20px;
  gap: 20px;
  align-items: center;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 70vw;
  }

  @media (max-width: 500px) {
    width: 85vw;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  gap: 10px;
  justify-content: start;
`;

export const CardDate = styled.p`
  font: italic normal normal 14px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.secundary.text};

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const CardTeamsContainer = styled.div`
  width: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const CardParticipants = styled.p`
  font: italic normal 500 18px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};

  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

export const CardX = styled.p`
  font: normal normal 500 18px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};

  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

export const CardScore = styled.p`
  font: normal normal 700 20px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};

  @media (max-width: 500px) {
    font-size: 18px;
  }
  @media (max-width: 400px) {
    font-size: 17px;
  }
`;

export const CardBettedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 500px) {
    gap: 10px;
  }
`;

export const CardWinner = styled.p`
  font: italic normal 500 18px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.terciary.text};
  background-color: ${(props) => props.theme.colors.winner};
  border-radius: 10px;
  padding: 5px 10px;

  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

export const CardLoser = styled.p`
  font: italic normal 500 18px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.terciary.text};
  background-color: ${(props) => props.theme.colors.loser};
  border-radius: 10px;
  padding: 5px 10px;

  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

export const CardEarnings = styled.p`
  font: italic normal 500 18px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const CreditsIcons = styled(FaCoins)`
  margin-left: 10px;

  @media (max-width: 400px) {
    margin-left: 5px;
  }
`;
