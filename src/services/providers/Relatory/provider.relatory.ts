import { api } from "@src/services/api";

export default {
  async handleGetAllInfoProducts() {
    try {
      const response = await api.get("/relatory");
      return response?.data;
    } catch (err: any) {
      console.log(err);
    }
  },
};
