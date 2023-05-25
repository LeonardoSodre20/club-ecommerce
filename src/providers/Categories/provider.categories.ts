import ToastMessage from "@src/components/Dashboard/ToastMessage";
import { ICategory } from "@src/components/Dashboard/Types/CategoryTypes";
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
  async handleDeleteCategoryById(categoryId: string) {
    try {
      const response = await api.delete(`/category/${categoryId}`);
      ToastMessage(response?.data?.message, "success");
      return response.data;
    } catch (err: any) {
      ToastMessage(err?.response?.data?.message, "error");
    }
  },
  async handleCreateNewCategory(categoryProps: ICategory) {
    try {
      const formData = new FormData();
      formData.append("name", categoryProps?.name);

      if (categoryProps.image instanceof File) {
        formData.append("image", categoryProps.image);
      }

      const response = await api.post("/category", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      ToastMessage(response?.data?.message, "success");
      return response?.data;
    } catch (err: any) {
      ToastMessage(err?.response?.data?.message, "error");
    }
  },
};
