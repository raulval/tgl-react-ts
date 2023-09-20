import styled from "styled-components";

interface ColorProps {
  color: string;
}

export const BetsContainer = styled.div`
  width: 50vw;
  min-height: auto;
  display: flex;
  flex-direction: row;
  margin-bottom: 35px;
  margin-left: 8.6rem;

  @media (max-width: 1138px) {
    width: 45vw;
    justify-content: center;
    align-self: center;
    margin-left: 0;
  }

  @media (max-width: 500px) {
    width: 80vw;
  }
`;

export const Separator = styled.div`
  width: 6px;
  min-height: 94px;
  background-color: ${(props: ColorProps) => props.color};
  border-radius: 100px;
  margin-right: 20px;
`;

export const BetsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BetNumbers = styled.p`
  font: italic normal bold 20px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.secundary.text};
  margin-bottom: 15px;

  overflow-wrap: break-word;
  min-height: min-content;

  @media (max-width: 1138px) {
    width: 40vw;
  }

  @media (max-width: 500px) {
    width: 65vw;
  }
`;

export const BetDateAndPrice: any = styled.p`
  font: normal normal italic 17px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.secundary.text};
  margin-bottom: 11px;
`;

export const BetGameType = styled.p`
  font: italic normal bold 20px ${(props) => props.theme.font};
  color: ${(props: ColorProps) => props.color};
`;
