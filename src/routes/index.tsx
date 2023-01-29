import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAccount";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/createAccount",
    element: <CreateAccount />,
  },
]);

export default routes;
