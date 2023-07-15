import { useMutation, useQuery, useQueryClient } from "react-query";

// TYPES
import { ICategoryTypes } from "@src/types/CategoriesTypes";

// PROVIDER
import providerCategories from "@src/services/providers/Categories/provider.categories";

const useCategory = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery<ICategoryTypes[]>(["categories"], () => {
    return providerCategories.handleGetAllCategories();
  });

  const deleteCategory = useMutation(
    (id: string) => {
      return providerCategories.handleDeleteCategoryById(id);
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
  };
};

export default useCategory;
