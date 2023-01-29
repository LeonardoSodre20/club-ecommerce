import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <RouterProvider router={routes} />
      <GlobalStyle />
    </>
  </React.StrictMode>
);
