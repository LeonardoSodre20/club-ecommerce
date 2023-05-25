import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { formatDate } from "@src/formatters/dateFormatted";

// COMPONENTS
import TableCategories from "@src/components/Dashboard/TableCategories";

// STYLES
import {
  IconDelete,
  ImageCategory,
  MainContainer,
  PreviewImage,
  Td,
} from "./styles";

// PROVIDER
import providerCategories from "@src/providers/Categories/provider.categories";

// TYPES
import { ICategoryTypes, ICategoryTypesList } from "@src/types/CategoriesTypes";
import ModalCreateCategory from "@src/components/Dashboard/ModalCreateCategory";

const Categories = () => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState<boolean>(false);
  const { data } = useQuery<ICategoryTypesList[]>(["categoriesAdmin"], () => {
    return providerCategories.handleGetAllCategories();
  });

  const handleOpenPreviewImage = () => {
    setOpen(!open);
  };

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

  return (
    <MainContainer>
      <ModalCreateCategory />
      <TableCategories
        name="Nome"
        image="Imagem"
        createdAt="Data de Criação"
        actions="Ações"
      >
        <tbody>
          {data?.map((category) => {
            return (
              <tr key={category?.id}>
                <Td>{category?.name}</Td>
                <Td onClick={() => handleOpenPreviewImage()}>
                  <ImageCategory
                    src={category?.image}
                    alt="image-category"
                    decoding="auto"
                    loading="lazy"
                  />
                  {open ? (
                    <PreviewImage
                      url_image={category?.image}
                      onClick={() => {
                        setOpen(false);
                      }}
                    />
                  ) : (
                    false
                  )}
                </Td>
                <Td>{formatDate(category.created_at)}</Td>
                <Td>
                  <IconDelete
                    onClick={() => deleteCategory.mutate(category?.id)}
                  />
                </Td>
              </tr>
            );
          })}
        </tbody>
      </TableCategories>
    </MainContainer>
  );
};

export default Categories;
