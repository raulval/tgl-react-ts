import styled from "styled-components";

export const GamesButton = styled.button`
  width: 113px;
  height: 34px;
  margin-left: 25px;

  background-color: #ffffff;
  border: 2px solid #7f3992;
  border-radius: 100px;

  text-align: center;
  font: italic normal bold 14px "IBM Plex Sans", sans-serif;
  color: #7f3992;

  @media (max-width: 1138px) {
    width: 80px;
    margin-left: 15px;
  }
`;
