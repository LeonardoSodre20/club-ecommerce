import { ReactNode } from "react";

export interface IUser {
  id?: string;
  name: string;
  lastname: string;
  email: string;
  role: string;
  status?: string;
  avatar?: string;
  created_at: string;
}

export interface IAuthProvider {
  children: ReactNode;
}

export interface IAuthContextData {
  signed: boolean;
  isLoading: boolean;
  user: IUser | null;
  Login: (email: string, password: string) => Promise<void>;
  Logout: () => void;
}
