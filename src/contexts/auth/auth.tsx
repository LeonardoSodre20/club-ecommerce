import { createContext, useContext, useEffect, useState } from "react";

import { IAuthContextData, IAuthProvider, IUser } from "./types";
import { api } from "../../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import ToastMessage from "@src/components/Dashboard/ToastMessage";
import LoaderAuth from "@src/components/LoaderAuth";

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData
);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:_user");
    const storagedToken = localStorage.getItem("@App:token");

    if (storagedToken && storagedUser) {
      const activeUser = JSON.parse(storagedUser);

      setUser(activeUser);
      navigate("/dashboard");
      api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function Login(email: string, password: string): Promise<void> {
    try {
      const response: AxiosResponse = await api.post("/auth/login", {
        email: email,
        password: password,
      });

      localStorage.setItem(
        "@App:_user",
        JSON.stringify(response.data.checkUserExist)
      );
      localStorage.setItem("@App:token", response.data.token);
      setUser(response.data.checkUserExist);
      api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

      navigate("/dashboard");
      ToastMessage(response.data.message, "success");
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  function Logout() {
    setUser(null);
    toast.success("Logout efetuado com sucesso !", {
      style: {
        backgroundColor: "#21ce21",
        color: "#000",
      },
    });
    localStorage.removeItem("@App:_user");
    localStorage.removeItem("@App:token");
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
