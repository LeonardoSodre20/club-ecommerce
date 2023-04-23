import { ReactNode } from "react";

export interface IPropsTableProducts {
  name: string;
  amount: string;
  status: string;
  price: string;
  created_at: string;
  actions: string;
  children: ReactNode;
}
