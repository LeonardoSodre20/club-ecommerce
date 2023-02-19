import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <RouterProvider router={routes} />
      <ToastContainer />
      <GlobalStyle />
    </>
  </React.StrictMode>
);
