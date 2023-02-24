import { createContext, useContext, useEffect, useState } from "react";

import { IAuthContextData, IAuthProvider, IUser } from "./types";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:user");
    const storagedToken = localStorage.getItem("@App:token");

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function Login(email: string, password: string) {
    try {
      const response = await api.post("/auth/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("@App:User", JSON.stringify(response.data));
      localStorage.setItem("@App:token", response.data.token);

      setUser(response.data);

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      toast.success(response.data.message);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }

    console.log(user);
  }

  function Logout() {
    setUser(null);

    sessionStorage.removeItem("@App:user");
    sessionStorage.removeItem("App:token");
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
