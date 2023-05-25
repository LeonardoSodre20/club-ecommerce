import { ReactNode } from "react";

export interface IUser {
  name: string;
  lastname: string;
  email: string;
  role: string;
  avatar?: string;
}

export interface IAuthProvider {
  children: ReactNode;
}

export interface IAuthContextData {
  signed: boolean;
  user: IUser | null;
  Login: (email: string, password: string) => Promise<void>;
  Logout: () => void;
}
