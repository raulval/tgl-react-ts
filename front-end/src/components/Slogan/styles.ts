import styled from "styled-components";

export const SloganContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;

  h1 {
    font: italic normal bold 65px "IBM Plex Sans", sans-serif;
    color: #707070;
    text-align: center;
    inline-size: 20rem;
    overflow-wrap: break-word;
  }

  div {
    width: 144px;
    height: 39px;
    background-color: #b5c401;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 30px 0 20px 0;

    span {
      font: italic normal bold 22px "IBM Plex Sans", sans-serif;
      color: #ffffff;
    }
  }

  h2 {
    text-align: center;
    font: italic normal bold 83px "IBM Plex Sans", sans-serif;
    color: #707070;
    text-transform: uppercase;
  }

  @media (max-width: 900px) {
    margin-top: 30%;
    margin-bottom: 10%;

    h1 {
      font-size: 2.5rem;
      inline-size: 12rem;
    }

    h2 {
      font-size: 3rem;
    }
  }
`;
