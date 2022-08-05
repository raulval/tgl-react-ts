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
  font: italic normal bold 14px "IBM Plex Sans", sans-serif;
  color: ${(props) => (props.active ? "#ffffff" : props.color)};

  &:focus {
    background-color: ${(props) => props.color};
    color: #fff;
  }

  @media (max-width: 1138px) {
    margin-left: 15px;
  }

  @media (max-width: 880px) {
    width: 90px;
  }
`;
