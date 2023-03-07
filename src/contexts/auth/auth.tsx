import { createContext, useContext, useEffect, useState } from "react";

import { IAuthContextData, IAuthProvider, IUser } from "./types";
import { api } from "../../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData
);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    async function getActiveUser() {
      const storagedUser = localStorage.getItem("@App:user");
      const storagedToken = localStorage.getItem("@App:token");
      if (storagedToken && storagedUser) {
        const activeUser = JSON.parse(storagedUser);
        setUser(activeUser);
        api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`;
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    }
    getActiveUser();
  }, []);

  async function Login(email: string, password: string): Promise<void> {
    try {
      const response: AxiosResponse = await api.post("/auth/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("@App:User", JSON.stringify(response.data));
      localStorage.setItem("@App:token", response.data.token);
      setUser(response.data);
      api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

      if (user?.role !== "Admin") {
        toast.error("Credenciais Inválidas !");
      } else {
        navigate("/dashboard");
        toast.success(response.data.message);
      }
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
    <AuthContext.Provider value={{ signed: !!user, user, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
