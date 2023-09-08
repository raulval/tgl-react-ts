import styled from "styled-components";

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

export const ResultsHeader = styled.div`
  min-width: 0;
  width: 100vw;
  display: flex;
  margin-top: 4.6rem;

  @media (max-width: 1138px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const LastResults = styled.h1`
  font: italic normal bold 24px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};
  text-transform: uppercase;
  margin-left: 8.6rem;

  @media (max-width: 1138px) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 45px;

  @media (max-width: 1138px) {
    margin-left: 0;
    margin-right: 20px;
  }

  @media (max-width: 380px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const FiltersText = styled.p`
  font: italic normal normal 17px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.secundary.text};
`;

export const ResultContainer = styled.div`
  display: flex;
  margin-left: 8.6rem;
  margin-top: 2.5rem;

  @media (max-width: 1138px) {
    margin-left: 0;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

export const ResultCard = styled.div`
  width: 40vw;
  max-height: 73vh;

  display: flex;
  flex-direction: column;

  background-color: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 85vw;
    max-height: 100%;
  }
`;

export const ResultLotteryHeader = styled.div`
  display: flex;
  height: 18vh;
  padding: 1.5rem;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

export const ResultLotteryContestAndDate = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.terciary.text};
`;

export const ResultLotteryName = styled.p`
  font-size: 1.7rem;
  color: ${(props) => props.theme.colors.terciary.text};
  font-weight: bold;
`;

export const ResultLotteryPrize = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.terciary.text};
  font-weight: 500;
`;

export const ResultBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1.5rem;
`;

export const ResultLotteryNumbersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

export const ResultLotteryNumber = styled.p`
  display: flex;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.terciary.text};
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.2rem;
  }
`;

export const ResultLotterySeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.separator};
`;

export const ResultLotteryWinnersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const TableHeader = styled.th`
  color: white;
  padding: 10px;
  text-align: center;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${(props) => props.theme.colors.secundary};
  }
  &:nth-child(odd) {
    background-color: ${(props) => props.theme.colors.terciary};
  }
  text-align: center;
`;

export const TableCell = styled.td`
  padding: 10px;
`;
