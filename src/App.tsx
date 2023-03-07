// PROVIDER
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth/auth";

// ROTAS
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import Login from "./pages/Login";

// ADMIN
import Dashboard from "./pages/Admin/Dashboard";
import Users from "./pages/Admin/Users";
// import GraphicsData from "./pages/Admin/Graphics";

import { AuthenticatedRoutes } from "./routes/Authenticated.routes";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/dashboard" element={<AuthenticatedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
