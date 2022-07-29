import styled from "styled-components";

export const BetsContainer = styled.div`
  width: 45vw;
  min-height: auto;
  display: flex;
  flex-direction: row;
  margin-top: 35px;

  @media (max-width: 1138px) {
    justify-content: center;
    overflow: auto;
  }
`;

export const Separator = styled.div`
  width: 6px;
  min-height: 94px;
  background-color: #7f3992;
  border-radius: 100px;
  margin-right: 20px;
`;

export const BetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BetNumbers = styled.p`
  font: italic normal bold 20px "IBM Plex Sans", sans-serif;
  color: #868686;
  margin-bottom: 15px;

  overflow-wrap: break-word;
  min-height: min-content;

  @media (max-width: 1138px) {
    width: 130px;
  }
`;

export const BetDateAndPrice = styled.p`
  font: normal normal normal 17px "IBM Plex Sans", sans-serif;
  color: #868686;
  margin-bottom: 11px;
`;

export const BetGameType = styled.p`
  font: italic normal bold 20px "IBM Plex Sans", sans-serif;
  color: #7f3992;
`;
