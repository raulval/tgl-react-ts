import styled from "styled-components";

interface ColorProps {
  active?: boolean;
}

export const LeagueButtons = styled.button<ColorProps>`
  /* min-height: 34px;
  max-height: 50px; */
  height: 34px;
  margin-left: 25px;
  padding: 0 10px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.leagues : "#ffffff"};
  border: 2px solid ${({ theme }) => theme.colors.leagues};
  border-radius: 100px;

  cursor: pointer;
  text-align: center;
  font: italic normal bold 14px ${(props) => props.theme.font};
  color: ${({ theme, active }) => (active ? "#ffffff" : theme.colors.leagues)};

  @media (max-width: 1138px) {
    margin-left: 15px;
  }

  @media (max-width: 500px) {
    height: 40px;
    margin-left: 10px;
  }
`;
