import { useState } from "react";

// FORMATTERS
import { formatDate } from "@src/utils/formatters";

// COMPONENTS
import TableCategories from "@src/components/Dashboard/TableCategories";
import ModalCreateCategory from "@src/components/Dashboard/ModalCreateCategory";

// STYLES
import * as S from "./styles";

// HOOKS
import useCategory from "@src/hooks/useCategory";

const Categories = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data, deleteCategory } = useCategory();

  const handleOpenPreviewImage = () => {
    setOpen(!open);
  };

  return (
    <S.MainContainer>
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
                <S.Td>{category?.name}</S.Td>
                <S.Td onClick={() => handleOpenPreviewImage()}>
                  <S.ImageCategory
                    src={category?.image}
                    alt="image-category"
                    decoding="auto"
                    loading="lazy"
                  />
                  {open ? (
                    <S.PreviewImage
                      url_image={category?.image}
                      onClick={() => {
                        setOpen(false);
                      }}
                    />
                  ) : (
                    false
                  )}
                </S.Td>
                <S.Td>{formatDate(category.created_at)}</S.Td>
                <S.Td>
                  <S.IconDelete
                    onClick={() => deleteCategory.mutate(category?.id)}
                  />
                </S.Td>
              </tr>
            );
          })}
        </tbody>
      </TableCategories>
    </S.MainContainer>
  );
};

export default Categories;
