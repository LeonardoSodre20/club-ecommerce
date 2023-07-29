import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// TYPES
import { IAuthContextData, IAuthProvider, IUser } from "./types";
import { AxiosResponse } from "axios";

// COMPONENTS
import ToastMessage from "@src/components/Dashboard/ToastMessage";

// SERVICES
import { api } from "@src/services/api";

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData
);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:_user");
    const storagedToken = localStorage.getItem("@App:token");

    if (storagedToken && storagedUser) {
      const activeUser = JSON.parse(storagedUser);
      api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`;
      setUser(activeUser);
      navigate("/dashboard");
    }
  }, []);

  async function Login(email: string, password: string): Promise<void> {
    try {
      const response: AxiosResponse = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("@App:_user", JSON.stringify(response.data));
      localStorage.setItem("@App:token", response.data.token);
      api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      setUser(response.data);
      setIsLoading(!isLoading);

      if (response?.data?.role === "Admin" && response?.status === 200) {
        navigate("/dashboard");
        ToastMessage(response?.data?.message, "success");
      }
    } catch (error: any) {
      console.log(error);
      ToastMessage(error.response.data.message, "error");
    }
  }

  function Logout() {
    setUser(null);
    ToastMessage("Logout efetuado com sucesso !", "success");
    localStorage.removeItem("@App:_user");
    localStorage.removeItem("@App:token");
    console.log(isLoading);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, isLoading, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
