import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font-family: ${(props) => props.theme.font};
  }
`;
