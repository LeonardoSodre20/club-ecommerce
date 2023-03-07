// PROVIDER
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth/auth";

import { AuthenticatedRoutes } from "./routes/Authenticated.routes";

// ROTAS
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DetailsProduct from "./pages/Home/DetailsProduct";

// ADMIN
import Dashboard from "./pages/Admin/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/detailsProduct" element={<DetailsProduct />} />
        <Route path="/dashboard" element={<AuthenticatedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
