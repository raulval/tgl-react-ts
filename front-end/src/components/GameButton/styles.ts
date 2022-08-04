import styled from "styled-components";

interface ColorProps {
  active?: boolean;
  color: string;
}

export const GamesButton = styled.button`
  width: 113px;
  height: 34px;
  margin-left: 25px;

  background-color: ${(props: ColorProps) =>
    props.active ? props.color : "#ffffff"};
  border: 2px solid ${(props: ColorProps) => props.color};
  border-radius: 100px;

  cursor: pointer;
  text-align: center;
  font: italic normal bold 14px "IBM Plex Sans", sans-serif;
  color: ${(props: ColorProps) => (props.active ? "#ffffff" : props.color)};

  &:focus {
    background-color: ${(props: ColorProps) => props.color};
    color: #fff;
  }

  @media (max-width: 1138px) {
    margin-left: 15px;
  }

  @media (max-width: 880px) {
    width: 90px;
  }
`;
