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

  @media (max-width: 1138px) {
    width: 70vw;
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

export const ChooseGameText = styled.p`
  font: italic normal bold 17px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.secundary.text};
  margin-top: 33px;
  margin-bottom: 20px;
`;

export const GamesDiv = styled.div`
  display: flex;
  margin-left: -25px;
`;

export const FillBetText = styled.p`
  font: italic normal bold 17px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.secundary.text};
  margin-top: 28px;
`;

export const GameDescription = styled.p`
  margin-bottom: 27px;
  font: italic normal normal 17px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.secundary.text};
`;

export const NumbersContainer = styled.div`
  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(4, 70px);
    grid-auto-rows: minmax(10px, auto);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 44px;
  margin-bottom: 80px;

  @media (max-width: 400px) {
    margin-left: -10px;
  }
`;

export const CompleteGameButton = styled.button`
  width: 164px;
  height: 52px;
  border: 1px solid ${(props) => props.theme.colors.secundary.main};
  border-radius: 10px;
  font: normal normal medium 20px ${(props) => props.theme.font};
  font-size: 16px;
  color: ${(props) => props.theme.colors.secundary.main};
  cursor: pointer;
  margin-right: 25px;
  transition: all 0.2s;

  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }

  @media (max-width: 880px) {
    min-width: 80px;
  }
`;

export const ClearGameButton = styled.button`
  width: 135px;
  height: 52px;
  border: 1px solid ${(props) => props.theme.colors.secundary.main};
  border-radius: 10px;
  font: normal normal medium 20px ${(props) => props.theme.font};
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.secundary.main};
  margin-right: 150px;
  transition: all 0.2s;

  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }

  @media (max-width: 880px) {
    min-width: 80px;

    margin-right: 25px;
  }
`;

export const AddToCartButton = styled.button`
  width: 209px;
  height: 52px;
  background-color: ${(props) => props.theme.colors.secundary.main};
  border: 1px solid ${(props) => props.theme.colors.secundary.main};
  cursor: pointer;
  border-radius: 10px;
  font: normal normal bold 16px ${(props) => props.theme.font};
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

  @media (max-width: 880px) {
    min-width: 90px;
  }
`;

export const CartContainer = styled.div`
  width: 35vw;
  display: flex;
  flex-direction: column;
  margin-top: 42px;

  @media (max-width: 1138px) {
    margin-bottom: 40px;
  }

  @media (max-width: 880px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Cart = styled.div`
  width: 420px;
  max-height: 600px;

  display: flex;
  flex-direction: column;

  background-color: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  overflow: unset;

  @media (max-width: 500px) {
    width: 85vw;
  }
`;

export const CartTitle = styled.h1`
  font: italic normal 600 24px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};
  text-transform: uppercase;
  margin: 32px 0 35px 19px;
`;

export const CartBetsContainer = styled.div`
  width: 410px;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 500px) {
    width: 85vw;
  }
`;

export const CartTotalPrice = styled.p`
  margin: 40px 0 47px 19px;

  font: normal normal 300 24px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};
  text-transform: uppercase;
`;

export const CartSaveButton = styled.button`
  width: 419px;
  min-height: 96px;

  background-color: #f4f4f4;
  border-radius: 0px 0px 10px 10px;
  border: 1px solid #e2e2e2;

  cursor: pointer;
  font: italic normal bold 35px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.secundary.main};
  transition: all 0.2s;

  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }

  :disabled {
    cursor: not-allowed;
    color: ${(props) => props.theme.colors.secundary.text};
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
