import { Routes, Route } from "react-router-dom";

// PÁGINAS
import Dashboard from "../pages/Admin/Dashboard";
import Users from "../pages/Admin/Users";

export const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};
