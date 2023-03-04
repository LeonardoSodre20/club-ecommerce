// PROVIDER
import SideBar from "./components/SideBar";
import { AuthProvider, useAuth } from "./contexts/auth/auth";

// ROTAS
import { AuthenticatedRoutes } from "./routes/Authenticated";
import { UnauthenticatedRoutes } from "./routes/Unauthenticated";

function App() {
  const { user } = useAuth();

  return (
    <AuthProvider>
      {!user?.emailUser ? (
        <div>
          <SideBar />
          <AuthenticatedRoutes />
        </div>
      ) : (
        <UnauthenticatedRoutes />
      )}
    </AuthProvider>
  );
}

export default App;
