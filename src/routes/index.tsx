import { createBrowserRouter } from "react-router-dom";

// PAGES
import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAccount";
import Login from "../pages/Login";
import Dashboard from "../pages/Admin/Dashboard";

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
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default routes;
