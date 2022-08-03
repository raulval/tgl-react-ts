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

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 44px;
  margin-bottom: 80px;
`;

export const CompleteGameButton = styled.button`
  width: 164px;
  height: 52px;
  border: 1px solid #27c383;
  border-radius: 10px;
  font: normal normal medium 20px "IBM Plex Sans", sans-serif;
  font-size: 16px;
  color: #27c383;
  cursor: pointer;
  margin-right: 25px;
  transition: all 0.2s;

  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }
`;

export const ClearGameButton = styled.button`
  width: 135px;
  height: 52px;
  border: 1px solid #27c383;
  border-radius: 10px;
  font: normal normal medium 20px "IBM Plex Sans", sans-serif;
  font-size: 16px;
  cursor: pointer;
  color: #27c383;
  margin-right: 150px;
  transition: all 0.2s;

  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }
`;

export const AddToCartButton = styled.button`
  width: 209px;
  height: 52px;
  background-color: #27c383;
  border: 1px solid #27c383;
  cursor: pointer;
  border-radius: 10px;
  font: normal normal bold 16px "IBM Plex Sans", sans-serif;
  font-size: 16px;
  color: #ffffff;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    margin-right: 28px;
    font-size: 25px;
    display: inline-block;
    vertical-align: middle;
  }
`;

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
