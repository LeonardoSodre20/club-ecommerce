import ToastMessage from "@src/components/Dashboard/ToastMessage";
import { api } from "@src/services/api";
import { AxiosResponse } from "axios";

export default {
  async handleGetAllUsers() {
    try {
      const response: AxiosResponse = await api.get("/users");
      ToastMessage(`${response?.data?.message}`, "success");
      return response?.data.users;
    } catch (err: any) {
      console.log(err);
    }
  },
};
