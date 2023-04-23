import { api } from "@src/services/api";
import ToastMessage from "@src/components/Dashboard/ToastMessage";
import { INewProduct } from "@src/types/NewProduct";

export default {
  async handleGetAllProducts() {
    try {
      const response = await api.get("/product", {
        params: { pages: 0, limit: 10, search: "" },
      });
      return response?.data?.products;
    } catch (err: any) {
      console.log(err?.response?.data?.message);
    }
  },

  async handleDeleteProductById(id: string) {
    try {
      const response = await api.delete(`/product/${id}`);
      ToastMessage(response?.data?.message, "success");
    } catch (err: any) {
      console.log(err?.response?.data?.message);
      ToastMessage(err?.response?.data?.message, "error");
    }
  },

  async handleCreateNewProduct(product: INewProduct) {
    try {
      const response = await api.post("/product", product);
      ToastMessage(response?.data?.message, "success");
    } catch (err: any) {
      console.log(err?.response?.data?.message);
      ToastMessage(err?.response?.data?.message, "error");
    }
  },
};
