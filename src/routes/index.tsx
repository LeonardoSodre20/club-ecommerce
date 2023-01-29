import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAccount";
import Login from "../pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/createAccount",
    element: <CreateAccount />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
