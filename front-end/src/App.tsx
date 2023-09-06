import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { GlobalStyle } from "./styles/global";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
