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

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    align-items: center;
    justify-items: center;
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
  flex-direction: column;

  @media (max-width: 1138px) {
    margin-left: 0;
    margin-bottom: 20px;

    align-items: center;
    justify-content: center;
  }
`;
