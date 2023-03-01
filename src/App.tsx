// PROVIDER
import SideBar from "./components/SideBar";
import { AuthProvider, useAuth } from "./contexts/auth/auth";

// ROTAS
import { AuthenticatedRoutes } from "./routes/Authenticated.routes";
import { UnauthenticatedRoutes } from "./routes/Unauthenticated.routes";

function App() {
  const { user } = useAuth();

  return (
    <AuthProvider>
      {user ? (
        <>
          <SideBar />
          <AuthenticatedRoutes />
        </>
      ) : (
        <UnauthenticatedRoutes />
      )}
    </AuthProvider>
  );
}

export default App;
