import { ReactNode } from "react";

export interface IPropsTableComponent {
  name: string;
  amount: string;
  status: string;
  price: string;
  created_at: string;
  actions: string;
  children: ReactNode;
}
