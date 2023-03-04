import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer theme="dark" />
      <Toaster position="top-right" />
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
