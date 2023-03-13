import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Toaster position="top-right" />
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>
);
