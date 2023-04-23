// PROVIDER
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth/auth";

import { AuthenticatedRoutes } from "./routes/Authenticated.routes";

// ROUTES PUBLICS
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CategoriesProducts from "./pages/Home/CategoriesProducts";
import ForgotPasswordStepsToSteps from "./pages/Login/ForgotPassword";

// ADMIN
import Dashboard from "./pages/Admin/Dashboard";
import Users from "./pages/Admin/Users";
import GraphicsData from "./pages/Admin/RelatoryManager";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" index element={<CategoriesProducts />} />
        <Route path="/products" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetPassword" element={<ForgotPasswordStepsToSteps />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/dashboard" element={<AuthenticatedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/users" element={<AuthenticatedRoutes />}>
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="/graphics" element={<AuthenticatedRoutes />}>
          <Route path="/graphics" element={<GraphicsData />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
