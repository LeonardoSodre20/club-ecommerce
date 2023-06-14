import { Suspense, lazy } from "react";
// PROVIDER
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth/auth";

import { AuthenticatedRoutes } from "./routes/Authenticated.routes";

// ROUTES PUBLICS
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const CategoriesProducts = lazy(
  () => import("./pages/Home/CategoriesProducts")
);
const ForgotPasswordStepsToSteps = lazy(
  () => import("./pages/Login/ForgotPassword")
);
const ListProducts = lazy(() => import("./pages/Home/ListProducts"));

// ADMIN
const Products = lazy(() => import("./pages/Admin/Products"));
const Users = lazy(() => import("./pages/Admin/Users"));
const GraphicsData = lazy(() => import("./pages/Admin/RelatoryManager"));
const Profile = lazy(() => import("./pages/Admin/Profile"));
const Categories = lazy(() => import("./pages/Admin/Categories"));

function App() {
  return (
    <AuthProvider>
      <Suspense>
        <Routes>
          <Route path="/" index element={<CategoriesProducts />} />
          <Route path="/products" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/resetPassword"
            element={<ForgotPasswordStepsToSteps />}
          />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/listProducts/:id" element={<ListProducts />} />
          <Route path="/dashboard" element={<AuthenticatedRoutes />}>
            <Route path="/dashboard" element={<Products />} />
          </Route>
          <Route path="/users" element={<AuthenticatedRoutes />}>
            <Route path="/users" element={<Users />} />
          </Route>
          <Route path="/graphics" element={<AuthenticatedRoutes />}>
            <Route path="/graphics" element={<GraphicsData />} />
          </Route>
          <Route path="/profile" element={<AuthenticatedRoutes />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/categories" element={<AuthenticatedRoutes />}>
            <Route path="/categories" element={<Categories />} />
          </Route>
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
