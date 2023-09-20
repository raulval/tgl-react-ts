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

export const BetsContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const BetsP = styled.p`
  font: italic normal normal 16px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.secundary.text};
`;

export const BetPicked = styled.p`
  font: italic normal bold 20px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};
  text-transform: capitalize;
`;

export const BetDate: any = styled.p`
  font: italic normal normal 16px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.secundary.text};
`;

export const BetMatch = styled.p`
  font: italic normal bold 20px ${(props) => props.theme.font};
  color: ${({ theme }) => theme.colors.leagues};
`;
