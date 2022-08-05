import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import Theme from "styles/theme";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>
);
