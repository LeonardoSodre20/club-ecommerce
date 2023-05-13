import { useState } from "react";
import { useQuery } from "react-query";
import { formatDate } from "@src/formatters/dateFormatted";

// COMPONENTS
import TableCategories from "@src/components/Dashboard/TableCategories";

// STYLES
import { ImageCategory, MainContainer, PreviewImage, Td } from "./styles";

// PROVIDER
import providerCategories from "@src/providers/Categories/provider.categories";

// TYPES
import { ICategoryTypes } from "@src/types/CategoriesTypes";

const Categories = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data } = useQuery<ICategoryTypes[]>(["categoriesAdmin"], () => {
    return providerCategories.handleGetAllCategories();
  });

  const handleOpenPreviewImage = () => {
    setOpen(!open);
  };

  return (
    <MainContainer>
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
                  <ImageCategory src={category?.image} alt="image-category" />
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
                <Td>Teste</Td>
              </tr>
            );
          })}
        </tbody>
      </TableCategories>
    </MainContainer>
  );
};

export default Categories;
