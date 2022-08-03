import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #F7F7F7;
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font-family: 'IBM Plex Sans', sans-serif;
  }
`;
