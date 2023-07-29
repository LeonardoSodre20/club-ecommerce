import ToastMessage from "@src/components/Dashboard/ToastMessage";
import { api } from "@src/services/api";
import { UsersRows } from "@src/types/UserTypes";

export default {
  async handleGetAllUsers() {
    try {
      const response = await api.get<UsersRows>("/users");
      ToastMessage(`${response?.data?.message}`, "success");
      return response?.data?.users.rows;
    } catch (err: any) {
      console.log(err);
    }
  },
};
