import { api } from "@src/services/api";

export default {
  async handleGetAllCategories() {
    try {
      const response = await api.get("/category");
      return response?.data?.allCategories;
    } catch (err: any) {
      console.log(err?.response?.data?.message);
    }
  },
};
