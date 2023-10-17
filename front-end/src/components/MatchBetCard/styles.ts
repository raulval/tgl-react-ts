import { FaCoins } from "react-icons/fa";
import { MdEast } from "react-icons/md";
import styled from "styled-components";

export const MatchesCard = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: row;
  min-height: 130px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  margin-bottom: 10px;
  padding: 20px;
  gap: 10px;
  justify-content: space-between;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 80vw;
  }

  @media (max-width: 500px) {
    width: 85vw;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardDate = styled.p`
  font: italic normal normal 14px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.secundary.text};

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const CardTeamsContainer = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const CardParticipants = styled.p`
  font: normal normal 600 20px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};

  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

export const CardContent = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const CardOddsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 20px;

  @media (max-width: 500px) {
    gap: 10px;
    max-width: 50vw;
  }
`;

export const CardOddsButton = styled.button<{
  active: boolean;
  isLive: boolean;
}>`
  width: 5.5rem;
  height: 2rem;
  font: italic normal 500 18px ${(props) => props.theme.font};
  border-radius: 10px;
  cursor: ${({ isLive }) => (isLive ? "not-allowed" : "pointer")};
  transition: all 0.2s;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary.main : "#ffffff"};
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme, active }) =>
    active ? "#ffffff" : theme.colors.primary.main};

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 500px) {
    font-size: 14px;
    width: 3rem;
  }
`;

export const CardOddsTeams = styled.p`
  font: italic normal 500 18px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};
  text-overflow: ellipsis;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const CardAmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media (max-width: 500px) {
    gap: 10px;
  }
`;

export const CardAmountInput = styled.input`
  width: 8rem;
  height: 2rem;
  padding-left: 10px;
  border: none;
  border-radius: 10px;
  border: 2px solid #a1a1a1;
  outline: none;
  font: normal bold 16px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};
  background-color: transparent;

  ::placeholder {
    color: #a1a1a1;
    font: normal normal 16px ${(props) => props.theme.font};
  }

  @media (max-width: 768px) {
    width: 7rem;
    font-size: 16px;
    padding-left: 10px;

    ::placeholder {
      color: #a1a1a1;
      font: normal normal 14px ${(props) => props.theme.font};
    }
  }

  @media (max-width: 500px) {
    width: 5rem;
  }
`;

export const CardSaveBet = styled.button`
  width: 8rem;
  height: 2rem;
  font: italic normal 500 18px ${(props) => props.theme.font};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.secundary.main};
  border: 2px solid ${({ theme }) => theme.colors.secundary.main};
  color: #fff;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 500px) {
    font-size: 14px;
    width: 4.5rem;
  }
`;

export const ArrowRight = styled(MdEast)`
  margin-left: 10px;
  display: inline-block;
  vertical-align: middle;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const CardEarningsContainer = styled.div`
  @media (max-width: 400px) {
    width: 120%;
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

export const LiveCardContainer = styled.div`
  background-color: red;
  color: white;
  border-radius: 20px;
  padding: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 100px;
  height: 35px;

  @media (max-width: 500px) {
    width: 75px;
    height: 25px;
    padding: 2px;
  }
`;

export const LiveCardTitle = styled.h2`
  font-size: 18px;
  text-align: center;
  font-style: italic;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
