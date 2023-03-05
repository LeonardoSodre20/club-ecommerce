import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ToastContainer theme="dark" />
      <Toaster position="top-right" />
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>
);
