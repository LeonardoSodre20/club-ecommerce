import { Navigate, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

import { useAuth } from "@src/hooks/useAuth";

export const AuthenticatedRoutes = () => {
  const { signed } = useAuth();

  return signed ? (
    <>
      <SideBar />

      <Outlet />
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};
