import { ReactNode } from "react";

export interface IPropsTableCategories {
  name: string;
  image: string;
  createdAt: string;
  actions: string;
  children: ReactNode;
}
