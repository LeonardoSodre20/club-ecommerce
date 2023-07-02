import { api } from "@src/services/api";

import ToastMessage from "@src/components/Dashboard/ToastMessage";

// TYPES
import { INewProduct } from "@src/types/NewProduct";
import { ProductsRows } from "./types";

export default {
  async handleGetAllProducts() {
    try {
      const response = await api.get<ProductsRows>("/product", {
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
      return response?.data;
    } catch (err: any) {
      console.log(err?.response?.data?.message);
      ToastMessage(err?.response?.data?.message, "error");
    }
  },

  async handleCreateNewProduct(product: INewProduct) {
    try {
      const formData = new FormData();

      formData.append("name", product.name);
      formData.append("quantity", product.quantity);
      formData.append("status", product.status);
      formData.append("price", product.price);
      if (product.image instanceof File) {
        formData.append("image", product.image);
      }
      formData.append("categoryName", product.categoryName);

      const response = await api.post("/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      ToastMessage(response?.data?.message, "success");
      return response?.data;
    } catch (err: any) {
      console.log(err?.response?.data?.message);
      ToastMessage(err?.response?.data?.message, "error");
    }
  },
};
