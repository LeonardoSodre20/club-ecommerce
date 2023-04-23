import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Toaster position="top-right" />
        <GlobalStyle />
        <App />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
