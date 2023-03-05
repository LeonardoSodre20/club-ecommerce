import { Navigate, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

// PÁGINAS
import { useAuth } from "../contexts/auth/auth";

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
