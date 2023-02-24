import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <ToastContainer />
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </>
  </React.StrictMode>
);
