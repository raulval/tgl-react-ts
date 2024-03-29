import styled from "styled-components";

interface ColorProps {
  active?: boolean;
  color: string;
}

export const GamesButton = styled.button<ColorProps>`
  width: 113px;
  height: 34px;
  margin-left: 25px;

  background-color: ${({ color, active }) => (active ? color : "#ffffff")};
  border: 2px solid ${(props) => props.color};
  border-radius: 100px;

  cursor: pointer;
  text-align: center;
  font: italic normal bold 14px ${(props) => props.theme.font};
  color: ${(props) => (props.active ? "#ffffff" : props.color)};

  @media (max-width: 1138px) {
    margin-left: 15px;
  }

  @media (max-width: 500px) {
    width: 90px;
    height: 40px;
    margin-left: 10px;
  }
`;
