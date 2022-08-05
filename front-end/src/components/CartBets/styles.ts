import styled from "styled-components";

interface ColorProps {
  color: string;
}

export const BetsContainer = styled.div`
  width: 45vw;
  min-height: auto;
  display: flex;
  flex-direction: row;
  margin-bottom: 35px;
  margin-left: 17px;

  @media (max-width: 1138px) {
    justify-content: center;
    width: 20vw;
  }

  @media (max-width: 880px) {
    width: 50vw;
  }
`;

export const DeleteBetButton = styled.button`
  color: #888888;

  background: none;
  border: none;
  cursor: pointer;
  margin-right: 14px;
  transition: all 0.2s;

  &:hover {
    color: #e95c66;
    transform: scale(1.1);
  }

  svg {
    font-size: 25px;
    display: inline-block;
    vertical-align: middle;
  }
`;

export const Separator = styled.div`
  min-width: 4px;
  min-height: 60px;
  background-color: ${(props: ColorProps) => props.color};
  border-radius: 100px 0px 0px 100px;
  margin-right: 20px;
`;

export const BetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
`;

export const BetNumbers = styled.p`
  font: italic normal bold 15px ${(props) => props.theme.font};
  color: #868686;
  margin-bottom: 6px;

  overflow-wrap: break-word;
  /* min-height: min-content; */

  @media (max-width: 1138px) {
    width: 130px;
  }
`;

export const TypePriceWrapper = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const BetGameType = styled.p`
  font: italic normal bold 16px ${(props) => props.theme.font};
  color: ${(props: ColorProps) => props.color};
  margin-right: 14px;
`;

export const BetPrice: any = styled.p`
  font: normal normal normal 16px ${(props) => props.theme.font};
  color: #868686;
`;
