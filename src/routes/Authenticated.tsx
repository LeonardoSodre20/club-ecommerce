import { Routes, Route } from "react-router-dom";

// PÁGINAS
import Dashboard from "../pages/Admin/Dashboard";
import Users from "../pages/Admin/Users";
import GraphicsData from "../pages/Admin/Graphics";

export const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/graphics" element={<GraphicsData />} />
    </Routes>
  );
};
