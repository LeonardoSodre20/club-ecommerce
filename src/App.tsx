// PROVIDER
import { AuthProvider, useAuth } from "./contexts/auth/auth";

// ROTAS
import { AuthenticatedRoutes } from "./routes/Authenticated.routes";
import { UnauthenticatedRoutes } from "./routes/Unauthenticated.routes";

function App() {
  const { signed } = useAuth();

  console.log(signed);

  return (
    <AuthProvider>
      {signed ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
    </AuthProvider>
  );
}

export default App;
