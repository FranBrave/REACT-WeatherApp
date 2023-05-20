import { useAuthState } from "../../../user-login-auth/src/context";
import { Navigate } from "react-router-dom";
import Dashboard from "../../../user-login-auth/src/pages/dashboard";

function AppRoutes() {
  const { user } = useAuthState();

  return <>{user ? <Dashboard /> : <Navigate to="/" />}</>;
}

export default AppRoutes;
