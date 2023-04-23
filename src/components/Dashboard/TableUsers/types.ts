import { ReactNode } from "react";

export interface IPropsTableUsers {
  name: string;
  lastname: string;
  email: string;
  status: string;
  created_at: string;
  actions: string;
  children: ReactNode;
}
