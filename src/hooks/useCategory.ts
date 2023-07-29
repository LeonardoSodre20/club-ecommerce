import { useMutation, useQuery, useQueryClient } from "react-query";

// TYPES
import { ICategoryTypes } from "@src/types/CategoriesTypes";

// PROVIDER
import categoriesService from "@src/services/Categories/categories.service";

const useCategory = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery<ICategoryTypes[]>(["categories"], () => {
    return categoriesService.handleGetAllCategories();
  });

  const deleteCategory = useMutation(
    (id: string) => {
      return categoriesService.handleDeleteCategoryById(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["categoriesAdmin"] });
      },
    }
  );

  return {
    data,
    deleteCategory,
    isLoading,
  };
};

export default useCategory;
