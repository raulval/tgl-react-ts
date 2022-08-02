import styled from "styled-components";

export const BetContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  overflow: scroll;

  @media (max-width: 1138px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const MainContainer = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  margin-left: 130px;
  margin-top: 74px;
`;

export const MainTitle = styled.h1`
  color: #707070;
  text-transform: uppercase;
  font: italic normal 300 24px "IBM Plex Sans", sans-serif;
`;

export const Bold = styled.b`
  font-style: italic;
`;

export const ChooseGameText = styled.p`
  font: italic normal bold 17px "IBM Plex Sans", sans-serif;
  color: #868686;
  margin-top: 33px;
  margin-bottom: 20px;
`;

export const GamesDiv = styled.div`
  display: flex;
  margin-left: -25px;
`;

export const FillBetText = styled.p`
  font: italic normal bold 17px "IBM Plex Sans", sans-serif;
  color: #868686;
  margin-top: 28px;
`;

export const GameDescription = styled.p`
  margin-bottom: 27px;
  font: italic normal normal 17px "IBM Plex Sans", sans-serif;
  color: #868686;
`;

export const NumbersContainer = styled.div``;

export const CartContainer = styled.div`
  width: 35vw;
  display: flex;
  flex-direction: column;
  margin-top: 42px;
`;

export const Cart = styled.div`
  width: 317px;
  max-height: 600px;

  display: flex;
  flex-direction: column;

  background-color: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  overflow: unset;
`;

export const CartTitle = styled.h1`
  font: italic normal 600 24px "IBM Plex Sans", sans-serif;
  color: #707070;
  text-transform: uppercase;
  margin: 32px 0 35px 19px;
`;

export const CartBetsContainer = styled.div`
  max-height: 400px;
  overflow: auto;
  margin-left: 17px;
  margin-right: 16px;
`;

export const CartTotalPrice = styled.p`
  margin: 40px 0 47px 19px;

  font: normal normal 300 24px "IBM Plex Sans", sans-serif;
  color: #707070;
  text-transform: uppercase;
`;

export const CartSaveButton = styled.button`
  width: 316px;
  min-height: 96px;

  background-color: #f4f4f4;
  border-radius: 0px 0px 10px 10px;
  border: 1px solid #e2e2e2;

  cursor: pointer;
  font: italic normal bold 35px "IBM Plex Sans", sans-serif;
  color: #27c383;
  transition: all 0.2s;

  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }
`;
