import { ReactNode } from "react";

export interface IPropsTableUsers {
  name: string;
  lastname: string;
  email: string;
  role: string;
  created_at: string;
  actions: string;
  children: ReactNode;
}
