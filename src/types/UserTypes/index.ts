import { IUser } from "@src/contexts/auth/types";

export interface UsersRows {
  message: string;
  users: {
    rows: IUser[];
  };
  count: number;
}
