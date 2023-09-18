import styled from "styled-components";

export const BetContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  overflow: auto;

  @media (max-width: 1138px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const MainContainer = styled.div`
  width: 65vw;
  display: flex;
  flex-direction: column;
  margin-left: 130px;
  margin-top: 74px;

  @media (max-width: 1138px) {
    width: 70vw;
    margin-left: 0;
  }

  @media (max-width: 500px) {
    width: 85vw;
    margin-left: 0;
  }
`;

export const MainTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary.text};
  text-transform: uppercase;
  font: italic normal 300 24px ${(props) => props.theme.font};
`;

export const Bold = styled.b`
  font-style: italic;
`;

export const ChooseLeagueText = styled.p`
  font: italic normal bold 17px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.secundary.text};
  margin-top: 33px;
  margin-bottom: 20px;
`;

export const LeaguesDiv = styled.div`
  display: flex;
  margin-left: -25px;
`;

export const FillBetText = styled.p`
  font: italic normal bold 17px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.secundary.text};
  margin-top: 28px;
`;

export const LeagueDescription = styled.p`
  margin-bottom: 27px;
  font: italic normal normal 17px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.secundary.text};
`;

export const MatchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 30px;
`;
