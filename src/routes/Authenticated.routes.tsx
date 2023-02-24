import { Routes, Route } from "react-router-dom";

// PÁGINAS
import Dashboard from "../pages/Admin/Dashboard";

export const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
