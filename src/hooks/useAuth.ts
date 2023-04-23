import { useContext } from "react";
import { AuthContext } from "@src/contexts/auth/auth";

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
